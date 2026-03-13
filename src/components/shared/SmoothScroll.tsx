"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{ 
        // lerp: Linear Interpolation. 0.1 is the "sweet spot" for 
        // feeling smooth but still responsive (10% movement per frame).
        lerp: 0.1, 
        
        // duration: How long the scroll takes to settle.
        duration: 1.5, 
        
        // smoothWheel: Ensures mouse wheel scrolling is intercepted and smoothed.
        smoothWheel: true,

        // wheelMultiplier: Adjusts how "fast" the scroll feels. 
        wheelMultiplier: 1,
        
        // touchMultiplier: Essential for making mobile scrolling feel natural.
        touchMultiplier: 2,

        // infinite: Set to false unless you want the page to loop.
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}