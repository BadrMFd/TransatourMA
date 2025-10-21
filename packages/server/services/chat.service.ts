import OpenAI from 'openai';
import template from '../llm/prompts/TransaTourMA.txt';
import { conversationRepository } from '../repositories/conversation.repository';

import fs from 'fs';
import path from 'path';

type ChatResponse = {
   id: string;
   message: string;
};

const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

const transaTourMAInfo = fs.readFileSync(
   path.join(__dirname, '..', 'llm', 'prompts', 'TransaTourMA.md'),
   'utf-8'
);
const instructions = template.replace('{{agencyInfo}}', transaTourMAInfo);

// Public interface
export const chatService = {
   sendMessage: async (
      prompt: string,
      conversationId: string
   ): Promise<ChatResponse> => {
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         instructions,
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 350,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationId),
      });

      conversationRepository.setLastResponseId(conversationId, response.id);

      return {
         id: response.id,
         message: response.output_text,
      };
   },
};
