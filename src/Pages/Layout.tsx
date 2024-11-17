import { Outlet } from "react-router-dom";
import { useColorMode } from "../zustand/useColorMode";
import { Moon, Sun } from "lucide-react";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto pt-16">
          <Outlet />
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  const { mode, setMode } = useColorMode();
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 py-4 border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 xl:px-0 flex justify-between items-center">
        <h1 className="text-2xl font-semibold dark:text-gray-300 ">@Ekbal41</h1>
        <div>
          <button
            className="rounded-full focus:ring-0 focus:outline-none dark:text-gray-300 dark:hover:text-white"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
};
