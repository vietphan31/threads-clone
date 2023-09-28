import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import MainLayout from "@/components/layout/main-layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";
import { ModalProvider } from "@/components/providers/modal-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A clone Threads website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(font.className, "bg-white dark:bg-[#101010]")} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="threads-clone-theme">
          <ModalProvider />
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
