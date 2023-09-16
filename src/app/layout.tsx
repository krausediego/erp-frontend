import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Metadata } from "next";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ERP",
    template: `%s | ERP`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
