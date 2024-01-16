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
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const itemClasses = {
    base: "py-0",
    title: "py-0 text-lg",
    trigger: "py-0",
    content: "pb-2",
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
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

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ChevronDownIcon className="h-3 w-3" />}
                radius="sm"
                variant="light"
              >
                Features
              </Button>
            </DropdownTrigger>

            <DropdownMenu>
              <DropdownItem>
                <Link href="/portraits">Portraits</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/">Places</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Link href="/">Contact</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/">About me</Link>
        </NavbarMenuItem>
        <Divider />
        <Accordion
          variant="light"
          isCompact
          className="m-0 p-0 text-lg "
          itemClasses={itemClasses}
        >
          <AccordionItem className="" title="Gallery">
            <NavbarMenuItem className=" py-2">
              <Link className="" href="/">
                Portraits
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link className="" href="/">
                Places
              </Link>
            </NavbarMenuItem>
          </AccordionItem>
        </Accordion>
        <Divider />
        <NavbarMenuItem>
          <Link href="/">Contact</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
