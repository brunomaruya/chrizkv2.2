"use client";
import React, { useContext } from "react";
import { Navbar } from "@nextui-org/react";

import DesktopVersion from "./navbarComps/DesktopVersion";
import MobileVersion from "./navbarComps/MobileVersion";
import NavbarProvider, {
  NavbarContext,
  userNavbarContext,
} from "./navbarComps/NavbarProvider";

export default function NavbarComp() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const { isMenuOpen, setIsMenuOpen } = useContext(NavbarContext);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="fixed top-0 "
    >
      <DesktopVersion />
      <MobileVersion />
    </Navbar>
  );
}
