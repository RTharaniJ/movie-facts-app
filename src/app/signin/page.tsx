'use client';
import { signIn } from "next-auth/react";
import React from "react";


export default function SignIN() {
    return <div className="flex items-center justify-center mt-20">
        <button 
        onClick={() => signIn('google', {callbackUrl: '/dashboard'})}
        className="border p-4 bg-blue-300 text-white rounded">SingIn with google</button>
    </div>
}