export type Product = {id: number;
    title: string,
    price: number,
    area: number,
    createdDate: string,
    isForRent: boolean,
    numOfBedroom: number,
    numOfBathrom: number,
    numOfCars: number,
    location: string,
    isAvailable: boolean,
    agencyName: string,
    agentName: string,
    primaryImg: string,
    productType: string,
 };
export type Products = Product[];