export const addAlpha = (hex, alpha) =>
  `rgba(${hex
    .match(/^#(.{2})(.{2})(.{2})$/)
    .slice(1)
    .map(value => Number(`0x${value}`))
    .concat(alpha)
    .join(", ")})`;
