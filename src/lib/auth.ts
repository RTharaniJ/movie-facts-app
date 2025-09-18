import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"
import { prisma } from "./prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
 
export const { handlers, signIn, signOut, auth } = NextAuth({

      adapter: PrismaAdapter(prisma),
      providers: [Google, Instagram,GitHub],
      pages: {
        signIn: '/signin'
      }
})