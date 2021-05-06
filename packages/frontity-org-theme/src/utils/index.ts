import { warn } from "frontity";
import { useEffect, useState } from "react";

export const addAlpha = (hex: string, alpha: number) => {
  const match = hex.match(/^#(.{2})(.{2})(.{2})$/);

  if (!match) {
    warn(`"${hex}" is not a valid color in hexadecimal format.`);
    return hex;
  }

  return `rgba(${match
    .slice(1)
    .map((value) => Number(`0x${value}`))
    .concat(alpha)
    .join(", ")})`;
};

/*
 *
 *  Unlike the addAlpha this will NOT "add" an opacity and return an RGB,
 *
 *  Rather, it will "lighten" the color to match the given alpha, assuming a
 *  white (#fff) background.
 *
 */
export const mixAlpha = (hex: string, alpha: number) => {
  const match = hex.match(/^#(.{2})(.{2})(.{2})$/);

  if (!match) {
    warn(`"${hex}" is not a valid color in hexadecimal format.`);
    return hex;
  }

  return `rgb(
    ${(1 - alpha) * 255 + alpha * Number(`0x${match[1]}`)}, 
    ${(1 - alpha) * 255 + alpha * Number(`0x${match[2]}`)}, 
    ${(1 - alpha) * 255 + alpha * Number(`0x${match[3]}`)}
  )`;
};

/*
 *
 *  React hook that tracks state of a CSS media query. It's based on this
 *  library: https://github.com/streamich/use-media
 *
 */
export const useMedia = (query: string) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    let mounted = true;
    const mediaQueryList: MediaQueryList =
      typeof window === "undefined"
        ? mockMediaQueryList
        : window.matchMedia(query);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      setState(Boolean(mediaQueryList.matches));
    };

    mediaQueryList.addListener(onChange);
    setState(mediaQueryList.matches);

    return () => {
      mounted = false;
      mediaQueryList.removeListener(onChange);
    };
  }, [query]);

  return state;
};
