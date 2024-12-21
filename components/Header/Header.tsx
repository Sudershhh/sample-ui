"use client";

import { SlButton } from "../ShoelaceWrapper";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-slate-200 max-w-screen h-10">
      <nav className="flex items-center justify-around w-1/4 h-full">
        <Link href={"/"}>
          <SlButton variant="default" size="small">
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
      </nav>
    </header>
  );
}

export default Header;
