"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
    useEffect(() => {
    if (resolvedTheme === "dark") {
        setTheme("light");
    }
    }, [resolvedTheme]);
    
  if (!mounted) return <div>Wait</div>;
}
