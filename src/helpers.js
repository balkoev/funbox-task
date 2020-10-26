export const declension = (number) => {
  let txt = ["мышь в подарок", "мыши в подарок", "мышей в подарок"];
  let cases = [2, 0, 1, 1, 1, 2];
  return txt[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
