export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export const getRandomFloat = (min: number, max: number) =>
  (Math.random() * (max - min) + min).toFixed(2);
