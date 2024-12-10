'use client';

import { useSession } from "next-auth/react";

export default function ProfilePage() {

  const { data: session } = useSession();

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <span>{session?.user?.name ?? ''}</span>
      <span>{session?.user?.email ?? ''}</span>
      <span>{session?.user?.image ?? ''}</span>
      <span>{session?.user?.id ?? ''}</span>
      <span>
        {session?.user?.roles?.join(', ')}
      </span>
    </div>
  )
}