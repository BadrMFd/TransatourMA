import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Star } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from '@/components/ui/button';

type Props = {
   location: string;
   starts: number;
   description: string;
   price: number;
   image?: string;
   badge?: string;
   url?: string;
};

const NoPromotionCard = ({
   location,
   starts,
   description,
   price,
   image,
   badge,
   url,
}: Props) => {
   return (
      <Card className="overflow-hidden p-0">
         <CardHeader className="gap-0 p-0 px-0">
            <div className="relative">
               <AspectRatio
                  ratio={16 / 7}
                  className="w-full"
               >
                  <img
                     src={image}
                     alt={location}
                     className="object-cover absolute top-0 left-0 w-full h-full rounded-t-xl"
                     draggable={false}
                  />
               </AspectRatio>
               {badge && (
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium shadow">
                     {badge}
                  </div>
               )}
               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
               <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <CardTitle className="text-white text-base drop-shadow line-clamp-1">
                     {location}
                  </CardTitle>
                  <CardAction>
                     <div className="flex items-center gap-1">
                        {Array.from({ length: starts }).map((_, i) => (
                           <Star
                              key={i}
                              size={14}
                              className="fill-yellow-400 text-yellow-400 drop-shadow"
                           />
                        ))}
                     </div>
                  </CardAction>
               </div>
            </div>
         </CardHeader>
         <CardContent className="flex items-center justify-between gap-3 px-4 pb-4">
            <div className="flex min-w-0 flex-col">
               <CardDescription className="line-clamp-2">
                  {description}
               </CardDescription>
               <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-semibold">
                     {price.toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground">Dhs</span>
               </div>
            </div>
            {url && (
               <Button
                  size="sm"
                  className="rounded-full whitespace-nowrap"
               >
                  <a
                     href={url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm text-white hover:text-white/80"
                  >
                     Voir l'offre
                  </a>
               </Button>
            )}
         </CardContent>
      </Card>
   );
};

export default NoPromotionCard;
