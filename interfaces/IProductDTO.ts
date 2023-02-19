export default interface IProductDTO {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string
  views: number
}