export interface ApartmentRequestDto {
    title: string;
    description: string;
    price: number;
    location: string;
    Area: number;
    isForRent?: boolean;
    numOfBedroom?: number;
    numOfBathrom?: number;
    numOfCars?: number;
    createdDate: Date;
    isAvailable: boolean;
    primaryImg: string;
    images: string[];
    floorNumber: number;
    hasElevatorAccess: boolean;
    agencyId?: number ;
    agentId?: number ;
  }
  