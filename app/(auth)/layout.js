"use client";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import "../globals.css";

export const layout = {
  title: "AmikomConnect",
  description: "Next 14 Social Media App",
  icons: {
    icon: "/R.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ClerkProvider>
      <html lang="en" className={theme === "light" ? "light" : "dark"}>
        <body
          className={`${inter.className} ${
            theme === "light" ? "bg-[#ffffff]" : "bg-[#000000]"
          } transition-colors duration-300`}
        >
          <div className="min-h-screen flex flex-col justify-center items-center relative">
            <button
              className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
              onClick={toggleTheme}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            <main className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
              {children}
            </main>
          </div>
          <footer className="text-center text-gray-800 dark:text-white py-20 transition-colors duration-300">
            <p>
              &copy; {new Date().getFullYear()} AmikomConnect. All rights
              reserved.
            </p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
