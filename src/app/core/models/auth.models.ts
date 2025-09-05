export interface User {
    id?: number;
    email: string;
    name?: string;
    // outros campos que precisar
  }
  
  export interface LoginResponse {
    token: string;
    user: User;
  }
  
  export interface LoginDTO {
    email: string;
    password: string;
  }
  