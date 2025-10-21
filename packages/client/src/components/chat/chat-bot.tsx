import notificationSound from '@/assets/sounds/notification.mp3';
import popSound from '@/assets/sounds/pop.mp3';
import axios from 'axios';
import { Plus } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import type { ChatFormData } from './chat-input';
import ChatInput from './chat-input';
import type { Message } from './chat-messages';
import ChatMessages from './chat-messages';
import TypingIndicator from './typing-indicator';
import Welcome from './welcome';

const popAudio = new Audio(popSound);
popAudio.volume = 0.2;

const notificationAudio = new Audio(notificationSound);
notificationAudio.volume = 0.2;

type ChatResponse = {
   message: string;
};

const ChatBot = () => {
   const [messages, setMessages] = useState<Message[]>([]);
   const [isBotTyping, setIsBotTyping] = useState(false);
   const [error, setError] = useState('');
   const conversationId = useRef(crypto.randomUUID());

   const onSubmit = async ({ prompt }: ChatFormData) => {
      try {
         setMessages((prev) => [...prev, { content: prompt, role: 'user' }]);
         setIsBotTyping(true);
         setError('');
         popAudio.play();

         // show promotions panel if the user asks for promotions
         if (/\b(promos?|promotions?|started)\b/i.test(prompt)) {
            setMessages(
               (prev) =>
                  [
                     ...prev,
                     { content: '', role: 'bot', type: 'promotions' },
                  ] as Message[]
            );
            setIsBotTyping(false);
            return;
         }

         const { data } = await axios.post<ChatResponse>('/api/chat', {
            prompt,
            conversationId: conversationId.current,
         });
         setMessages((prev) => [
            ...prev,
            { content: data.message, role: 'bot' },
         ]);
         notificationAudio.play();
      } catch (error) {
         console.error(error);
         setError('Something went wrong, try again!');
      } finally {
         setIsBotTyping(false);
      }
   };

   const startNewChat = () => {
      setMessages([]);
      setError('');
      conversationId.current = crypto.randomUUID();
      // scroll to top to show welcome cleanly
      queueMicrotask(() => {
         const container = document.querySelector('#chat-scroll-container');
         (container as HTMLElement | null)?.scrollTo({
            top: 0,
            behavior: 'smooth',
         });
      });
   };

   return (
      <div className="flex flex-col h-full relative">
         <div
            id="chat-scroll-container"
            className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto"
         >
            {messages.length === 0 ? (
               <Welcome onPick={(p) => onSubmit({ prompt: p })} />
            ) : (
               <ChatMessages messages={messages} />
            )}
            {isBotTyping && <TypingIndicator />}
            {error && <p className="text-red-500">{error}</p>}
         </div>
         {/* floating new chat button above input */}
         <Button
            variant="outline"
            type="button"
            onClick={startNewChat}
            className=" mb-2 max-w-max mx-auto rounded-xl"
         >
            <Plus />
            Nouveau chat
         </Button>
         <ChatInput onSubmit={onSubmit} />
      </div>
   );
};

export default ChatBot;
