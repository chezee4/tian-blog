import Image from "next/image";
import { Menu } from "lucide-react";

import logo from "@/app/img/logo.png";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="px-5 md:px-13 py-12 w-full h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-white dark:text-mainGray font-bold flex items-start justify-start">
          <Image
            className="object-fill mr-2 invert-0 dark:invert"
            src={logo}
            alt="Logo"
          />
          tian
        </h1>
        <button>
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;
