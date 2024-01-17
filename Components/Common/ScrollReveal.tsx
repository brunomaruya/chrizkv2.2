import React, { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps {
  style: CSSProperties;
}

const ScrollReveal = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: {};
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 300,
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={style}
      className=" container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
