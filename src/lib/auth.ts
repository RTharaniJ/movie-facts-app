import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"
import { prisma } from "./prisma"
 
export const { handlers, signIn, signOut, auth } = NextAuth({

     adapter: prisma,
  providers: [Google, Instagram,GitHub],
})