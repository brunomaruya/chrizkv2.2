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
import { usePathname } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import { Key } from "@phosphor-icons/react";

export default function NavbarComp() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const itemClasses = {
    base: "py-0",
    title: "py-0 text-lg",
    trigger: "py-0",
    content: "pb-2",
  };
  const links = [
    { title: "Home", href: "/" },
    { title: "About me", href: "/about-me" },
    {
      title: "Gallery",
      subLinks: [
        { title: "Portraits", href: "/portraits" },
        { title: "Travel", href: "/travel" },
      ],
    },
    { title: "Contact", href: "/contact" },
  ];
  console.log(links[1].hasOwnProperty("href"));

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarBrand>ChriZtianK</NavbarBrand>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        {links.map((link, index) => (
          <NavbarItem key={index}>
            {link.hasOwnProperty("href") ? (
              <Link
                href={link.href ? link.href : "#"}
                className={` hover:opacity-75 ${
                  pathname == link.href ? "text-primary" : "text-text"
                }`}
              >
                {link.title}
              </Link>
            ) : (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ChevronDownIcon className="h-3 w-3" />}
                    radius="sm"
                    variant="light"
                  >
                    {link.title}
                  </Button>
                </DropdownTrigger>

                <DropdownMenu>
                  {link.subLinks ? (
                    link.subLinks.map((subLink, index) => (
                      <DropdownItem key={subLink.title}>
                        <Link
                          className={` hover:opacity-75 ${
                            pathname == subLink.href
                              ? "text-primary"
                              : "text-text"
                          }`}
                          href={subLink.href}
                        >
                          {subLink.title}
                        </Link>
                      </DropdownItem>
                    ))
                  ) : (
                    <Spinner />
                  )}
                </DropdownMenu>
              </Dropdown>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* //--------------------------------------------------------------------------------------//
      // MOBILE VERSION //
      //--------------------------------------------------------------------------------------/ */}

      <NavbarMenu>
        {links.map((link, index) => (
          <div key={index}>
            {link.hasOwnProperty("href") ? (
              <NavbarMenuItem key={index}>
                <Link
                  className={` hover:opacity-75 ${
                    pathname == link.href ? "text-primary" : "text-text"
                  }`}
                  href={link.href ? link.href : "#"}
                >
                  {link.title}
                </Link>
              </NavbarMenuItem>
            ) : (
              <>
                <Divider />
                <Accordion
                  variant="light"
                  isCompact
                  className="m-0 p-0 text-lg "
                  itemClasses={itemClasses}
                >
                  <AccordionItem title={link.title}>
                    {link.subLinks?.map((subLink, index) => (
                      <NavbarMenuItem key={index} className=" py-2">
                        <Link
                          className={` hover:opacity-75 ${
                            pathname == subLink.href
                              ? "text-primary"
                              : "text-text"
                          }`}
                          href={subLink.href}
                        >
                          {subLink.title}
                        </Link>
                      </NavbarMenuItem>
                    ))}
                  </AccordionItem>
                </Accordion>
                <Divider />
              </>
            )}
          </div>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
