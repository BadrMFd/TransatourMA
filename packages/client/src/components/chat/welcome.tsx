import transatourLogo from '@/assets/images/transatour.png';

type Props = {
   onPick?: (prompt: string) => void;
};

const suggestions: string[] = [
   'Nos Promotions',
   'Top Destinations',
   'Bons plans',
   'Nos hôtels dans le monde',
];

const Welcome = ({ onPick }: Props) => {
   return (
      <div className="flex flex-col items-center justify-center text-center px-6 py-10 gap-6">
         <img
            src={transatourLogo}
            alt="TransaTour"
            className="h-12 opacity-90 select-none"
            draggable={false}
         />

         <div className="max-w-2xl space-y-3">
            <h1 className="text-2xl font-semibold tracking-tight">
               Your TransaTour travel copilot
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
               Ask for tailored itineraries, pricing ideas, availability hints,
               and quick travel research. I can draft messages to clients,
               translate, and turn your notes into polished proposals.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
            {suggestions.map((s, i) => (
               <button
                  key={i}
                  onClick={() => onPick?.(s)}
                  className="text-left rounded-xl border p-3 hover:bg-accent transition-colors"
               >
                  <div className="text-sm font-medium">{s}</div>
               </button>
            ))}
         </div>

         <p className="text-[11px] text-muted-foreground">
            responses may contain errors. verify important details.
         </p>
      </div>
   );
};

export default Welcome;
