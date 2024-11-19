export const chooseRandomItem = (list: string[]): string => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
