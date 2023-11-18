"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBurger } from "./context";
import logo from "@/app/img/logo.png";
import Burger from "./Burger";

const Header: React.FC = (): JSX.Element => {
  const isOpen = useBurger((state) => state.isOpen);
  return (
    <header className="max-w  mx-auto py-12 w-full h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-mainGray dark:text-white font-bold flex items-start justify-start">
          <Image
            className="object-fill mr-2 invert dark:invert-0"
            src={logo}
            alt="Logo"
          />
          tian
        </h1>
        <div
          className={cn(
            " dark:bg-[#121212] md:dark:bg-transparent bg-white md:w-[-webkit-fill-available] top-[85px] overflow-hidden h-0 z-[3]  left-0 w-[100dvw] md:h-auto  absolute md:static flex flex-col md:flex-row md:items-center pl-[30px] md:ml-0 gap-7 text-custom-color  transition-all duration-500 ",
            { " h-[100dvh] transition-all duration-700 pt-16 ": isOpen }
          )}
        >
          <nav className="flex flex-col md:flex-row gap-5 md:mx-auto">
            <Link href="/" className=" text-xl">
              Home
            </Link>
            <Link href="/" className=" text-xl">
              Portfolio
            </Link>
            <Link href="/" className=" text-xl">
              Skills
            </Link>
            <Link href="/" className=" text-xl">
              About Me
            </Link>
          </nav>
          <button className="flex dark:bg-purple-400 bg-mainGray text-white px-6 py-3 max-w-max">
            Contact me
          </button>
        </div>

        <Burger />
      </div>
    </header>
  );
};

export default Header;
