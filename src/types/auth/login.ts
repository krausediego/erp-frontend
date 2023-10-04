export interface ILogin {
  email: string;
  password: string;
}

export namespace ILogin {
  export type Response = {
    token: string;
  };
}
