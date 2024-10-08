export type Agency = { Id: number, AgencyName: string, OwnerName: string,OwnerEmail : string,OwnerPhone : string, SubscriptionType : string , AgentsNumber :number ,  ProductsNumber :number };
export type Agencies = Agency[];

interface IAgency {
  AgencyName: string;
  OwnerName: string;
  OwnerEmail: string;
  OwnerPhone: string;
  ProductsNumber: number;
}
