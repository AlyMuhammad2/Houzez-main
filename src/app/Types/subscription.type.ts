export type Subscription = { 
    id: number, subscriptionType: string, durationMonths: number, 
    price: number, userType: string, description:string, 
    numOfAvailableAgents:number,numOfimagesperproducts:number,
    isActive:boolean, numOfsubs:number,
    startDate:string,  features: [
        'Add up to 5 properties',
        '8 images per property',
        'Add contact methods',
        'Manage customer relationships',
        'Dashbord Access',
        'Display Your Page'
    
      ],numOfAvailableproducts:number;
};
export type Subscriptions = Subscription[];

interface ISubscription {
  id: number;
  subscriptionType: string;
  durationMonths: number;
  price: number;
  userType: string;
  description:string;
  numOfAvailableAgents:number;
  numOfAvailableproducts:number;
  numOfimagesperproducts:number;
  isActive:boolean;
  numOfsubs:number;
  startDate:string;  
  features: [
    'Add up to 5 properties',
    '8 images per property',
    'Add contact methods',
    'Manage customer relationships',
    'Dashbord Access',
    'Display Your Page'

  ]
}
