"use client";
import { Divider } from "@nextui-org/react";
import { InstagramLogo } from "@phosphor-icons/react";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 h-[72px] ">
      <Divider />
      <div className="margin-default  py-5 flex items-center justify-between">
        <div>ChriZtianK</div>
        <div>
          <ul>
            <li>
              <InstagramLogo size={32} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
