export class Product {
    id!: string;
    name!: string;
    price!: string;
    amountAvailable!: string;

    public constructor(product?: Partial<Product>) {
        Object.assign(this, product);
    }
}