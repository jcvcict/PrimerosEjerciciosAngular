export interface User {
  username:string;
  name: string;
  email: string;
  password: string; // No olvides manejar las contraseñas de forma segura
}

export interface UserLogin {
  usernameocorreo?:string | null | undefined;
  password?: string | null | undefined;
}

export interface Token{
  access_token:string;
}
