export type Price = {
   amount: number;
   currency: string;
   basis: string;
};

export type Promotion = {
   section: string;
   city: string;
   name: string;
   stars: number;
   roomType: string;
   priceFrom: Price;
   highlights?: string[];
   image?: string;
   url?: string;
};

export const transatourService = {
   getPromotions: async (): Promise<Promotion[]> => {
      return [
         {
            section: 'Hôtels à Nice',
            city: 'Nice',
            name: 'Radisson Blu Hotel Nice',
            stars: 5,
            roomType: 'Chambre standard',
            priceFrom: {
               amount: 1537.0,
               currency: 'Dhs',
               basis: 'par chambre',
            },
            image: 'https://www.transatour.ma/handlers/ImageRequest.ashx?path=%2Fimages%2Fupload%2FRadisson_Blu_Hotel_Nice.jpg&mediaSize=sm&imgSize=original&signature=kKlzfMzCbkmSsPKfolbLNwsKqJO0K45JEKY74EQXj2U',
            url: 'https://www.transatour.ma/hotels/details.aspx?UID=GHU@JP975217&searchSessionID=1787617',
         },
         {
            section: 'Hôtels à Casablanca',
            city: 'Casablanca',
            name: 'Casablanca Suites & Spa',
            stars: 5,
            roomType: 'Chambre double avec petit-déjeuner inclus',
            priceFrom: {
               amount: 970.0,
               currency: 'Dhs',
               basis: 'par chambre',
            },
            image: 'https://www.transatour.ma/handlers/ImageRequest.ashx?path=%2Fimages%2Fupload%2FCasablanca_Suites__and__Spa.jpg&mediaSize=sm&imgSize=original&signature=yqRT6V3QXPVgoxsfFVyExuRnnpK2lW1RvJP1Zu9vsOU',
            url: 'https://www.transatour.ma/hotels/details.aspx?UID=GHU@JP02745G&searchSessionID=1787674',
         },
         {
            section: 'Hôtels à Charm el-Cheikh',
            city: 'Charm el-Cheikh',
            name: 'DoubleTree by Hilton Sharks ...',
            stars: 5,
            roomType: 'Chambre twin deluxe montagne',
            highlights: ['vue piscine', 'petit déjeuner'],
            priceFrom: {
               amount: 1510.0,
               currency: 'Dhs',
               basis: 'par chambre',
            },
            image: 'https://www.transatour.ma/handlers/ImageRequest.ashx?path=%2Fimages%2Fupload%2FDoubleTree_by_Hilton_Sharks_Bay_Resort.jpg&mediaSize=sm&imgSize=original&signature=7pMT0s2nVTM16_UZNawXwAHABzOrD7Axpz_1IUz0dRg',
            url: 'https://www.transatour.ma/hotels/details.aspx?UID=GHU@JP197856&searchSessionID=1787689',
         },
         {
            section: 'Hôtels à Bali',
            city: 'Bali',
            name: 'Hotel Vila Lumbung',
            stars: 5,
            roomType: 'Chambre deluxe',
            priceFrom: {
               amount: 521.0,
               currency: 'Dhs',
               basis: 'par chambre',
            },
            image: 'https://www.transatour.ma/handlers/ImageRequest.ashx?path=%2Fimages%2Fupload%2FHotel_Vila_Lumbung.jpeg&mediaSize=sm&imgSize=original&signature=zrPt6Dz1107KJFtVGUVypMXeawB0YB1uzPmLi0riauM',
            url: 'https://www.transatour.ma/hotels/details.aspx?UID=GHU@JP978903&searchSessionID=1787709',
         },
      ];
   },
};
