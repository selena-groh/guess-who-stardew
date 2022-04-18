export const POSSIBLE = "POSSIBLE";
export const ELIMINATED = "ELIMINATED";

export const STATUSES = {
  POSSIBLE,
  ELIMINATED
};

export const generateRandomFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];
