import { warn } from "frontity";

export const addAlpha = (hex: string, alpha: number) => {
  const match = hex.match(/^#(.{2})(.{2})(.{2})$/);

  if (!match) {
    warn(`"${hex}" is not a valid color in hexadecimal format.`);
    return hex;
  }

  return `rgba(${match
    .slice(1)
    .map(value => Number(`0x${value}`))
    .concat(alpha)
    .join(", ")})`;
};
