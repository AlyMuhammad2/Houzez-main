export interface VillaRequestDTO {
title: string;
description: string;
area:number,
price: number;
location: string;
createdDate: Date;
isForRent?: boolean; 
numOfBedroom?: number;
numOfBathrom?: number; 
numOfCars?: number; 
isAvailable: boolean;
primaryImg: string;
images: string[];
numberOfFloors: number;
hasSwimmingPool: boolean;
hasGarden: boolean;
agencyId?: number;
agentId?: number;
}