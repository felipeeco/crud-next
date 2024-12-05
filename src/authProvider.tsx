'use client';

import { SessionProvider } from "next-auth/react";

interface props {
  children: React.ReactNode
}

export default function AuthProvider({children, ...rest}: props) {
 return (
  <SessionProvider>
    {children}
  </SessionProvider>
 )
}