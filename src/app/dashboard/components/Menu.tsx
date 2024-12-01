"use client";

import { usePathname } from "next/navigation";
import { Menu } from "../interfaces";
import { CiBookmarkCheck } from "react-icons/ci";
import Link from "next/link";

const menu: Menu[] = [
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

export const MenuComponent = () => {
  const pathName = usePathname();

  return (
    <ul className="space-y-2 tracking-wide mt-8">
      {menu.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={`
                    relative px-4 py-3 flex items-center space-x-4 rounded-xl
                    ${
                      pathName === item.href
                        ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                        : "text-black"
                    } `}
              href={item.href}
            >
              {item.icon}
              <span className="-mr-1 font-medium">{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
