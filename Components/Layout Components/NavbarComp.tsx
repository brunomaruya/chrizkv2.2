"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>ChriZtianK</NavbarBrand>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/">About me</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/">Home</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
