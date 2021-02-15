export interface ILogin {
  email: string;
  password: string
}

export interface IEmailSignup {
  names     : string;
  lastNames : string;
  email     : string;
  password  : string;
}

export interface ILoginAuth {
  expiresIn : number;
  token     : string;
}