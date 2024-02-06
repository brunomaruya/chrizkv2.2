"use client";
import { Divider } from "@nextui-org/react";
import { InstagramLogo } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 h-[72px] ">
      <Divider />
      <div className="margin-default  py-5 flex items-center justify-between">
        <div>
          <Link href="/">ChriZtianK</Link>
        </div>
        <div className="flex flex-col items-end">
          <ul>
            <li>
              <Link
                href="https://www.instagram.com/_chriztiank_/"
                target="_blank"
              >
                <InstagramLogo size={32} />
              </Link>
            </li>
          </ul>
          <div>christiankenji2003394@gmail.com</div>
        </div>
      </div>
    </footer>
  );
}
