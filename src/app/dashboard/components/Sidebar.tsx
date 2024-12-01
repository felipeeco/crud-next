"use server";

import Link from "next/link";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { getServerSession } from 'next-auth';
import { authOptions } from '@auth';
import { MenuComponent } from './index';

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="flex justify-center items-center -mx-6 px-6 py-4">
          <Link href="#" title="home">
            <Image
              alt="tailus logo"
              src="/images/adidas.png"
              width={150}
              height={50}
              priority
            />
          </Link>
        </div>

        {session?.user?.name && (
          <div className="mt-8 text-center">
            <Image
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              src={session.user.image?.toString() ?? ''}
              width={112}
              height={112}
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              {session?.user?.name ?? ''}
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>
        )}

        <MenuComponent />
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
