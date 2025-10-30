"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollWrapper({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp:0.08,
      }}
    >
      {children}
    </ReactLenis>
  );
}
