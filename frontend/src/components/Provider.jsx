"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { SessionProvider } from "next-auth/react";

import { useEffect } from "react";
import { getCookie } from "cookies-next";

const Provider = ({ children, session }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Se obtiene el tema desde las cookies en el lado del cliente
    const temaGuardado = getCookie("tema");
    if (temaGuardado) {
      setTheme(temaGuardado);
    }
  }, [setTheme]);

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SessionProvider>
  );
};

export default Provider;
