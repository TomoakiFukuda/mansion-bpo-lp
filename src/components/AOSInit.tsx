"use client";

import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({ duration: 800, once: true });
    });
    import("aos/dist/aos.css");
  }, []);

  return null;
}
