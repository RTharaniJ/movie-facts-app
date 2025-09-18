import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user) {
        redirect('/signin');
    }

    return <div>
        <h1>Welcome to your private DashboardPage</h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>;
}