export type Agent = {  name: string, email: string,password : string , confirmPassword : string, phoneNumber : string, accountType:string };
export type Agents = Agent[];

interface IAgent {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  accountType:string
}
