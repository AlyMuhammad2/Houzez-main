export interface HouseRequestDTO {
    title: string;
    description: string;
    area:number,
    price: number;
    location: string;
    isForRent?: boolean; 
    numOfBedroom?: number;
    numOfBathrom?: number;
    numOfCars?: number; 
    createdDate: Date;
    isAvailable: boolean;
    numberOfRooms: number;
    hasGarage: boolean;
    hasBackyard: boolean;
    primaryImg: string;
    images: string[];
    agencyId?: number;
    agentId?: number;
  }
  