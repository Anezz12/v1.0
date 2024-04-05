import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
// import { Clerk } from "@clerk/nextjs/dist/types/server";
import "../globals.css";
export const metadata = {
  title: "AmikomConnect",
  description: "Next 14 Social Media App",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={"${inter.className} bg-[#8B008B]"}>
          <div className="min-h-screen flex flex-col justify-center items-center">
            <main className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg p-8">
              {children}
            </main>
          </div>
          <footer className="text-center text-white py-4">
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
