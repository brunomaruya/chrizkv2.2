"use client";
import React from "react";
import { Navbar } from "@nextui-org/react";

import DesktopVersion from "./navbarComps/DesktopVersion";
import MobileVersion from "./navbarComps/MobileVersion";

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="fixed top-0 "
    >
      <DesktopVersion />
      <MobileVersion />
    </Navbar>
  );
}
