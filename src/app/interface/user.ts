export interface User {
  user_id: number;
  lastName: string;
  username:String;
  roles: Role[];
  firstName: string;
  email: string;
  password:string;
}
export interface Role {
  id: number;
  name: string;
}


