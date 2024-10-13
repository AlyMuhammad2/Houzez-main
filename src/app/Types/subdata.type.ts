export type sub = { 
    id: number;               // Unique identifier for the subscription
    subscriptionType: string; // Type of the subscription (e.g., Basic, Premium)
    
subscriberName: string;       // Name of the agency associated with the subscription
subscriberType: string;        // Name of the agent associated with the subscription
    startDate: Date;          // Date when the subscription starts
    durationmonth: number;            // Date when the subscription ends
    isActive: boolean;   
    amount:number;
};
export type Subs = sub[];
