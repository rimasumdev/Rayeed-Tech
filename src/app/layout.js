import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Home - Rayeed Tech",
  description: "Home Page",
  icons: {
    icon: [{ url: "/icon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${montserrat.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
