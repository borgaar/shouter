import Link from "next/link";

import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import Shout from "./_components/shout";
import CreateShout from "./_components/create_shout";

export default async function Home() {
  const session = await auth();

  const shouts = await api.post.getShouts(0); // TODO: pagination logic

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary_dark text-white">
      <div>
        <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
      {session && <CreateShout />}
      <div className="container flex h-screen max-w-screen-md flex-col items-center justify-center gap-12 bg-primary px-4 py-16">
        {shouts.map((s) => Shout(s))}
      </div>
    </main>
  );
}
