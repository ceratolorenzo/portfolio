"use client"
import React from "react";
import { Navbar, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Link } from "@nextui-org/react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Progetti",
    "Skills",
    "Contattami",
  ];

  const menuLinks = [
    "/",
    "/#projects",
    "/#skills",
    "/contact",
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="h-[100px]">
      <NavbarContent>
        <NavbarBrand>
        <svg className="w-[40px]" width="100" height="86" viewBox="0 0 100 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.3804 57.5563H99.3804L82.9998 85.0459H15.9998L32.3804 57.5563Z" fill="black"/>
            <path d="M0.380417 57.5563L34.6772 0H66.6772L32.3804 57.5563H0.380417Z" fill="black"/>
        </svg>
        <div className="flex flex-col pl-4 text-sm">
            <p className="opacity-50">LORENZO CERATO</p>
            <p className="font-semibold">PORTFOLIO ®</p>
        </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
            <NavbarItem key={index}>
                <Link color="foreground" href={menuLinks[index]} aria-current="page">
                  {item}
                </Link>
            </NavbarItem>
        ))}
      </NavbarContent>
      <p className="text-xs font-semibold sm:hidden">MENU</p>
      <NavbarMenu className="pt-[50px]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
                className="w-full text-current"
                href={menuLinks[index]}
                size="lg"
                onClick={() => {
                    setIsMenuOpen(false);
                }}
              >
                {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
    </Navbar>
  );
}