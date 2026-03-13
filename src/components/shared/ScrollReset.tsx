"use client";
import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // Force browser to stop remembering scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Snap to top on refresh
    window.scrollTo(0, 0);
  }, []);

  return null;
}