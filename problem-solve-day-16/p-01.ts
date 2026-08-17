interface Product {
  title: string;
  price: number;
  isDiscounted: boolean;
}

function createProduct(
  title: string,
  price: number,
  discount?: number,
): Product {
  const hasDiscount = discount !== undefined && discount > 0;

  const finalPrice = hasDiscount ? price - discount : price;

  return {
    title: title,
    price: finalPrice,
    isDiscounted: hasDiscount ? true : false,
  };
}

console.log(createProduct("product title", 20, 10));
