import Product from "./Product";

export default interface InventoryItem {
  product: Product; // {name: && price:}
  quantity: number;
}
