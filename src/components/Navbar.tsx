"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { ModeToggle } from "./ToogleDarkMode";

const Navbar = () => {
  const [showCabang, setShowCabang] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm dark:shadow-md transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={50}
            height={40}
              className="cursor-pointer animate-float hover-animate-keren"

          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700 dark:text-gray-200 ml-auto mr-6">
          <a href="/games" className="hover:text-black dark:hover:text-white transition-colors duration-200">
            Games
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors duration-200">
              Cabang <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 shadow-lg rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
              <DropdownMenuItem><Link href="/jakartaBarat">Jakarta Barat</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/jakartaSelatan">Jakarta Selatan</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/Tangerang">Tangerang</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="/about" className="hover:text-black dark:hover:text-white transition-colors duration-200">
            About
          </a>

          <ModeToggle />
        </div>

        {/* Desktop Book Button */}
        <Button
          variant="outline"
          className="hidden md:block text-black dark:text-white border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white transition-all duration-200"
        >
          Book
        </Button>

        {/* Mobile: Mode Toggle + Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-64 shadow-md rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2 space-y-1">
              <DropdownMenuItem><Link href="/about">About</Link></DropdownMenuItem>


              {/* Mobile Expandable Dropdown Cabang */}
              <div>
                <button
                  className="w-full flex justify-between items-center text-left text-sm font-medium px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  onClick={() => setShowCabang(!showCabang)}
                >
                  Cabang
                  {showCabang ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showCabang && (
                  <div className="ml-4 mt-1 space-y-1">
                    <DropdownMenuItem><Link href="/jakartaBarat">Jakarta Barat</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href="/jakartaSelatan">Jakarta Selatan</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href="/Tangerang">Tangerang</Link></DropdownMenuItem>
                  </div>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
