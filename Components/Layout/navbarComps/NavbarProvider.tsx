import React, { createContext, useContext } from "react";

export const NavbarContext = createContext({} as any);

export const userNavbarContext = () => {
  useContext(NavbarContext);
};

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const values = { isMenuOpen, setIsMenuOpen };
  return (
    <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
  );
}
