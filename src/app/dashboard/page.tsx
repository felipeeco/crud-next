'use server';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@auth';

export default async function DashboardPage() {

  const session = await getServerSession(authOptions);

  if( !session ) redirect('/api/auth/signin');

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <span>{session.user?.name}</span>
      </div>
    </div>
  );
}