export default interface CreateRestaurantDTO {
  name: string;
  description: string;
  logo?: string | null;
  ownerId: number
}