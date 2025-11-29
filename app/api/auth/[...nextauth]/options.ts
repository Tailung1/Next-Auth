import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github"
import { signIn } from "next-auth/react";


export   const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "ramaz", password: "ramaz123" };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GitHubProvider({
        clientId:process.env.GITHUB_ID as string,
        clientSecret:process.env.GITHUB_SECRET as string
    })
  ],
  pages:{signIn:"/sign-in"}
};
