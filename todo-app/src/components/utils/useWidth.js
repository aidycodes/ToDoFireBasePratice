import React, { useState, useEffect } from "react";

export const useWidth = (bp) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = bp;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ;
}