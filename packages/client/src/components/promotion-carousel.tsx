import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import NoPromotionCard from './no-promotion-card';
import type { Promotion } from './promotions-list';

const PromotionCarousel = () => {
   const { data, isLoading, error } = useQuery<Promotion[]>({
      queryKey: ['promotions'],
      queryFn: async () =>
         (await axios.get<Promotion[]>('/api/promotions')).data,
      staleTime: 5 * 60 * 1000,
   });

   // defer loading/error UI to parent (single source of truth)
   if (isLoading || error) return null;
   const promotions = data ?? [];

   return (
      <div className="w-full max-w-md">
         <div className="mb-3">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
               promotions
            </h3>
            <h2 className="text-xl font-semibold">Offres à ne pas manquer</h2>
            <p className="text-sm text-muted-foreground">
               Découvrez nos meilleures offres d'hôtels et séjours sélectionnées
               pour vous.
            </p>
         </div>
         <Carousel
            opts={{ align: 'start' }}
            orientation="vertical"
            className="w-full"
         >
            <CarouselContent className="-mt-1 max-h-[420px]">
               {promotions.map((p, index) => (
                  <CarouselItem
                     key={index}
                     className="pt-1"
                  >
                     <div className="p-1">
                        <div>
                           <NoPromotionCard
                              location={`${p.section} — ${p.name}`}
                              starts={p.stars}
                              description={`${p.roomType}${p.highlights ? ' • ' + p.highlights.join(' • ') : ''}`}
                              price={p.priceFrom.amount}
                              image={p.image}
                              badge={p.city}
                              url={p.url}
                           />
                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </div>
   );
};

export default PromotionCarousel;
