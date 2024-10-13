export type Agency = { id: number, agencyName: string, ownerName: string,ownerEmail : string,ownerPhone : string, subscriptionType : string , agentsNumber :number ,  productsNumber :number };
export type Agencies = Agency[];

interface IAgency {
  AgencyName: string;
  OwnerName: string;
  OwnerEmail: string;
  OwnerPhone: string;
  ProductsNumber: number;
}