import { NextAuthOptions, TokenTypes } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
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
        const user = {
          id: "1",
          name: "ramaz",
          age: 12,
          email: "ramaz11@gmail.com",
          password: "ramaz123",
          image: "",
        };

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
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile, trigger, session }) {
      //   if (profile) {
      //     return { ...token, ...profile };
      //   } else {
      //     return { ...token, ...user };
      //   }
      if (trigger === "update") {
        token.name = session.name;
      }
      return { ...token, ...user }; // !! github's object's properties are transalted into user's typed properties.. !!
    },

    async session({ session, token }) {
      session.user = token as TokenTypes;
      return session;
    },
  },

  pages: { signIn: "/sign-in" },
};
