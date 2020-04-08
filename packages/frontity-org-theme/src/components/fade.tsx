import { css, keyframes } from "frontity";
import React, { useEffect, useState } from "react";

const fadeIn = keyframes`
  from {
    transform: translateY(-2%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 0;
  }
  to {
    transform: translateY(-2%);
    opacity: 1;
  }
`;

const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div
        css={css`
          animation: ${show ? fadeIn : fadeOut} 600ms ease-in-out;
        `}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;
