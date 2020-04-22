import { warn } from "frontity";

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
