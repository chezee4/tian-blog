"use client";

import Header from "@/app/components/Header";
import { ThemeProvider } from "next-themes";
import Footer from "@/app/components/Footer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
