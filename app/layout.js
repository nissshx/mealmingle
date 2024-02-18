import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MealMingle",
  description: "Developed By Nishant : git/nissshx :)",
  
};
export const viewport = {
  width: 1,
  themeColor: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
<meta name="theme-color" content="#ffffff"></meta>

<meta name="msapplication-navbutton-color" content="#ffffff"></meta>

<meta name="apple-mobile-web-app-status-bar-style" content="#ffffff"></meta>
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
