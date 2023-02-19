export default interface CreateItemDTO {
  name: string;
  price: number;
  description: string;
  image?: string;
  restaurantId: number;
  categoryId: number;
}