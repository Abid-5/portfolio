import React, { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

const AnimatedComponent = ({
  children,
  id,
  className,
  as: Component = "section",
  delay = 0,
}) => {
  const [ref, isVisible] = useOnScreen({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });
  const style = { transitionDelay: `${delay}ms` };

  return (
    <Component
      ref={ref}
      id={id}
      style={style}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </Component>
  );
};
export default AnimatedComponent;
