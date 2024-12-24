"use client";

import { SlButton } from "../ShoelaceWrapper";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-primary-container w-screen h-10 fixed top-0 left-0">
      <nav className="flex items-center justify-around w-1/4 h-full">
        <Link href={"/"}>
          <SlButton size="small" className="bg-primary">
            Home
          </SlButton>
        </Link>
        <Link href={"/kanban"}>
          <SlButton variant="default" size="small">
            Kanban
          </SlButton>
        </Link>
        <Link href={"/buttons"}>
          <SlButton variant="default" size="small">
            Buttons
          </SlButton>
        </Link>
        <Link href={"/login"}>
          <SlButton variant="default" size="small">
            Login
          </SlButton>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
