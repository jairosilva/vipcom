export class Product {
  constructor(
    public id: number,
    public title: string,
    public type: string,
    public rating: number,
    public price: number,
    public created_at: Date
  ) {}
}
