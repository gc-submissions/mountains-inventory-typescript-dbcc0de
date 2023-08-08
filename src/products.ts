import Product from "./models/Product";

const products: Product[] = [
  {
    name: "Beanie Baby",
    price: 5.0,
  },
  {
    name: "Bon Jovi CD",
    price: 12.99,
  },
  {
    name: "Barbie Mall House",
    price: 50.99,
  },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  if (!array.length) {
    return 0;
  } else {
    const averagePreFixed =
      array.reduce((acc, cv) => acc + cv.price, 0) / array.length;
    return Math.round(averagePreFixed * 100) / 100;
  }
};

const ourAverageOfProducts = calcAverageProductPrice(products);
console.log(ourAverageOfProducts);
