import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const ibmPlexSans = localfont({
  src: [
    { path: "./fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-ibm-plex-sans",
});

const bebasNeue = localfont({
  src: [
    { path: "./fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise - Your book borrowing university management solution",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

export default RootLayout;
