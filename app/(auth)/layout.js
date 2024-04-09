import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const layout = {
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
        <body className={`${inter.className} relative`}>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            src="/assets/vidio.mp4"
          />
          <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
            <main className="max-w-4xl mx-auto px-4 py-8 bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
              {children}
            </main>
          </div>
          <footer className="text-center text-white py-4 relative z-10">
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
