import Link from "next/link";
import React from "react";


export default function Navbar() {
    return <div className="bg-zinc-50 border-b">
            <div className="flex items-center justify-between max-w-4xl mx-auto py-4 ">
                <Link href="/">HOME</Link>
                <button>Login</button>
            </div>
    </div>
}