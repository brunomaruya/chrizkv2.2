import {
  NavbarMenu,
  NavbarMenuItem,
  Divider,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { links } from "./links";
import { usePathname } from "next/navigation";

export default function MobileVersion() {
  const pathname = usePathname();
  const itemClasses = {
    base: "py-0",
    title: "py-0 text-lg",
    trigger: "py-0",
    content: "pb-2",
  };
  return (
    <>
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
    </>
  );
}
