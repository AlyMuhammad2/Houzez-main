export type Agent = {  id:number,name: string, email: string,password : string , confirmPassword : string, phoneNumber : string, accountType:string };
export type Agents = Agent[];

interface IAgent {
  id:number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  accountType:string
}
export type Agent2 = {
  id:number, name:
   string, email: string,
   agencyName : string , 
   agencyid : string,
    phoneNumber : string, 
    createdDate:string ,
    subscriptionType:string,
    subscriptionId:number,
    tasksNumber:number,
    productsNumber:number
   };
export type Agents2 = Agent2[];

interface IAgent {
 name: string;
 email: string;
 password: string;
 confirmPassword: string;
 phoneNumber: string;
 accountType:string
}