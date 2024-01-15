import Link from "next/link";
import ThemeToggleSwitch from "./ThemeToggleSwitch";

const Nav = () => {
  return (
    <nav className="p-4 bg-slate-100 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-gray-800 dark:text-white">
            <span className="nav-link">Home</span>
          </h1>
        </Link>
        <div className="flex items-center">
          <ThemeToggleSwitch />
          <Link href="/create-event">
            <div className="cursor-pointer ml-2">
              <span className="text-gray-800 dark:text-white nav-link">
                Crear Evento
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
