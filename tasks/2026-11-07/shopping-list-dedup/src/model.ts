export type CartLine = { productId: string; name: string; unitPrice: number; quantity: number };
export type Product = Omit<CartLine, 'quantity'>;

export function addProduct(lines: CartLine[], product: Product): CartLine[] {
  // Intentional bug: adding an existing product creates a duplicate line instead of increasing quantity.
  return [...lines, { ...product, quantity: 1 }];
}
