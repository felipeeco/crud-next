'use client';

import Link from "next/link";
import Image from "next/image";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { Menu } from "../interfaces";

const menu:Menu[] = [
  {
    title: "Dashboard",
    icon: <CiBookmarkCheck size={30} />,
    href: "/dashboard",
  },
  {
    title: "Rest Todos",
    icon: <CiBookmarkCheck size={30} />,
    href: "/dashboard/rest-todos",
  },
  {
    title: "Cookies",
    icon: <CiBookmarkCheck size={30} />,
    href: "/dashboard/cookies",
  },
  {
    title: "Products",
    icon: <CiBookmarkCheck size={30} />,
    href: "/dashboard/products",
  },
  {
    title: "Cart",
    icon: <CiBookmarkCheck size={30} />,
    href: "/dashboard/cart",
  },
];

export const Sidebar = () => {
  
  const pathName = usePathname();

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="#" title="home">
            <Image
              alt="tailus logo"
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              width={233}
              height={66}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            width={112}
            height={112}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={`
                    relative px-4 py-3 flex items-center space-x-4 rounded-xl
                    ${ pathName === item.href ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'text-black'} `
                  }
                  href={item.href}
                >
                  {item.icon}
                  <span className="-mr-1 font-medium">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
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
