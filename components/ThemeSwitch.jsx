"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";


export default function Theme({ children }) {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
     setIsMounted(true);
   }, []);
  
  if (!isMounted) {
    return <>{children}</>
  }
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}
