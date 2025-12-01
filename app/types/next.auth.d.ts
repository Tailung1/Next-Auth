import NextAuth from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      age: number;
      email: string;
      image?: string;
      password?: string;

    };
  }
  interface TokenTypes extends DefaultJWT {
    id: string;
    name: string;
    age: number;
    email: string;
    image?: string;
    password?: string;
  }
}
