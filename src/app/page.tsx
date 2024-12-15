import Link from "next/link";

import { auth } from "~/server/auth";
import { api, } from "~/trpc/server";
import Shout from "./_components/shout";
import CreateShout from "./_components/create_shout";

export default async function Home() {
  const session = await auth();

  const shouts = await api.post.getShouts(0); // TODO: pagination logic

  return (
    <main className="bg-primary_dark flex min-h-screen flex-col items-center justify-center text-white">
      <div>
        {session ? (
          <Link href="/api/auth/signout">Sign out</Link>
        ) : (
          <Link href="/api/auth/signin">Sign in</Link>
        )}
      </div>
      {session && (<CreateShout/>
        )}
      <div className="bg-primary container flex h-screen max-w-screen-md flex-col items-center justify-center gap-12 px-4 py-16">
        {shouts.map((s) => Shout(s))}
      </div>
    </main>
  );
}
