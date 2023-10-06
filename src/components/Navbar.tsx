import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const Navbar = () => {
  const navItems = ["Products", "Resources", "About us", "Sustainability"];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 mx-auto mt-10 flex w-[90%] max-w-screen-xl justify-between font-neue-roman text-xl text-[#e5e5e5]">
      <a href="#">Regal Foliage.</a>

      <ul className="hidden gap-10 lg:flex">
        {navItems.map((item) => (
          <li key={item} className="hover-effect">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>

      <ul className="hidden gap-10 lg:flex">
        <li>
          <a href="#" className="flex items-center gap-3">
            <BsSearch />
            <p className="text-[#c2c3c2]">Search</p>
          </a>
        </li>
        <li>
          <a href="#" className="hover-effect">
            Contact us
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="menu-burger group flex w-8 cursor-pointer flex-col items-center justify-center space-y-1 py-3 lg:hidden [&>span]:block [&>span]:h-[1.5px] [&>span]:w-full [&>span]:transform [&>span]:bg-white [&>span]:transition [&>span]:duration-300"
        onClick={() => handleMenu()}
      >
        <span
          className={`${
            isOpen
              ? "translate-y-[3px] rotate-45 opacity-100 group-hover:opacity-50"
              : "opacity-100 group-hover:opacity-50"
          }`}
        />
        <span
          className={`${
            isOpen
              ? "-translate-y-[3px] -rotate-45 opacity-100 group-hover:opacity-50"
              : "opacity-100 group-hover:opacity-50"
          }`}
        />
      </button>
    </nav>
  );
};
