import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Spinner,
} from "@nextui-org/react";
import React from "react";
import { links } from "./links";
import { usePathname } from "next/navigation";

export default function DesktopVersion() {
  const pathname = usePathname();
  return (
    <>
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
    </>
  );
}
