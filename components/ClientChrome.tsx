"use client";

import { ReactNode } from "react";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export function ClientChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <ScrollAnimations />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}
