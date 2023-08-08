import Mountain from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (!array.length) {
    return "";
  } else {
    const tallestName = array.reduce((acc, cv) =>
      acc.height > cv.height ? acc : cv
    );
    return tallestName.name;
  }
};

const nameOfTallest = findNameOfTallestMountain(mountains);
console.log(nameOfTallest);

console.log(findNameOfTallestMountain([]));
