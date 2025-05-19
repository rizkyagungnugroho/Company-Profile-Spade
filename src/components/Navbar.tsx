import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { ModeToggle } from "./ToogleDarkMode";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo dibungkus Link */}
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" width={50} height={40} className="cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700 ml-auto mr-9 gap-3">
          <a href="#pc" className="hover:text-black transition-colors duration-200">
            PC
          </a>
         
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-black transition-colors duration-200">
              Cabang <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 shadow-lg rounded-md">
              <DropdownMenuItem>
                <Link href="/jakartaBarat">Jakarta Barat</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/jakartaSelatan">Jakarta Selatan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/Tangerang">Tangerang</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/about" className="hover:text-black transition-colors duration-200">
            About
          </a>
           <ModeToggle/>
        </div>

        {/* Desktop Book Button */}
        <Button
          variant="outline"
          className="hidden md:block text-black border-gray-300 hover:border-black transition-all duration-200"
        >
          Book
        </Button>
        

        {/* Mobile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden focus:outline-none">
            <Menu className="w-6 h-6 text-gray-700" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 w-48 shadow-md rounded-md">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#portofolio">Portofolio</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#testimonials">Testimonials</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
