import axios from 'axios';
import { useEffect, useState } from 'react';
import NoPromotionCard from './no-promotion-card';

export type Promotion = {
   section: string;
   city: string;
   name: string;
   stars: number;
   roomType: string;
   priceFrom: {
      amount: number;
      currency: string;
      basis: string;
   };
   highlights?: string[];
   image?: string;
   url?: string;
};

const PromotionsList = () => {
   const [promotions, setPromotions] = useState<Promotion[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   useEffect(() => {
      const fetchPromotions = async () => {
         try {
            const { data } = await axios.get<Promotion[]>('/api/promotions');
            setPromotions(data);
         } catch (err) {
            console.error(err);
            setError('Failed to load promotions');
         } finally {
            setLoading(false);
         }
      };
      fetchPromotions();
   }, []);

   if (loading) return <p>loading promotions…</p>;
   if (error) return <p className="text-red-500">{error}</p>;

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         {promotions.map((p, idx) => (
            <NoPromotionCard
               key={idx}
               location={`${p.section} — ${p.name}`}
               starts={p.stars}
               description={`${p.roomType}${p.highlights ? ' • ' + p.highlights.join(' • ') : ''}`}
               price={p.priceFrom.amount}
               image={p.image}
               url={p.url}
            />
         ))}
      </div>
   );
};

export default PromotionsList;
