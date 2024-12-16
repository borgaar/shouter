import Link from "next/link";

import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import Shout from "./_components/shout";
import CreateShout from "./_components/create_shout";

export default async function Home() {
  const session = await auth();

  const shouts = await api.post.getShouts(0); // TODO: pagination logic

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary">
      <div>
        {session ? (
          <Link href="/api/auth/signout">Sign out</Link>
        ) : (
          <Link href="/api/auth/signin">Sign in</Link>
        )}
      </div>
      {session && <CreateShout key={"create-shout"} />}
      <div
        key={"shout-view"}
        className="container flex h-screen max-w-screen-md flex-col items-center gap-8 px-4 py-16"
      >
        {shouts.map((s) => (
          <Shout key={s.id} {...s} />
        ))}
      </div>
    </main>
  );
}
