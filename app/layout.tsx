"use client";
import "@/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { NavLink } from "./components/NavLink";
import { Socials } from "./components/Socials";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [colorScheme, setColorScheme] = useState("light");

  function toggleColorScheme() {
    setColorScheme((prevScheme) => {
      const newScheme = prevScheme === "light" ? "dark" : "light";
      localStorage.setItem("color-scheme", newScheme);
      return newScheme;
    });
  }

  useEffect(() => {
    const savedScheme = localStorage.getItem("color-scheme");
    if (savedScheme) {
      setColorScheme(savedScheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setColorScheme(prefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <html lang="en" data-theme={colorScheme}>
      <Head>
        <title>Beatriz Campos Estrada PhD</title>
        <meta
          name="description"
          content="Postdoctoral researcher at the Max Planck Institute for Astronomy, focused on connecting theory to observations of exoplanets via different modelling techniques"
        />
        <link href="/dist/styles.css" rel="stylesheet" />
      </Head>
      <body className="dark:bg-zinc-900 dark:text-zinc-100">
        <header className="flex justify-between space-x-4 p-4 border-b border-b-gray-200 dark:border-b-gray-700">
          <nav>
            <ul className="flex space-x-2">
              <NavLink href="/">about</NavLink>
              <NavLink href="/publications">publications</NavLink>
              <NavLink href="/CamposEstrada_CV.pdf">cv</NavLink>
              <NavLink href="/CamposEstrada_thesis.pdf">thesis</NavLink>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleColorScheme}>{colorScheme}</button>
            <Socials />
          </div>
        </header>
        <div className="py-8 px-4">{children}</div>
      </body>
    </html>
  );
}
