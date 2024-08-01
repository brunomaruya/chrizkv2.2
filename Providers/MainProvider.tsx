"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import NavbarProvider from "./NavbarProvider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <NavbarProvider>{children}</NavbarProvider>
    </NextUIProvider>
  );
}
