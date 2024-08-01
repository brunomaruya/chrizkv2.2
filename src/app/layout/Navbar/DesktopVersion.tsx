import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link as LinkUI,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Spinner,
} from "@nextui-org/react";
import React from "react";
import { links } from "../../../../constants/links";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function DesktopVersion() {
  const router = useRouter();
  const pathname = usePathname();
  const handleOnClick = (link: string) => {
    router.push(link);
  };
  return (
    <>
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">ChriZtianK</Link>
        </NavbarBrand>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        {links.map((link, index) => (
          <NavbarItem key={index}>
            {link.hasOwnProperty("href") ? (
              <LinkUI
                href={link.href ? link.href : "#"}
                className={` hover:opacity-75 ${
                  pathname == link.href ? "text-primary" : "text-text"
                }`}
              >
                {link.title}
              </LinkUI>
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
                      <DropdownItem
                        key={subLink.title}
                        onClick={() => handleOnClick(subLink.href)}
                      >
                        <div
                          className={` hover:opacity-75 ${
                            pathname == subLink.href
                              ? "text-primary"
                              : "text-text"
                          }`}
                        >
                          {subLink.title}
                        </div>
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
