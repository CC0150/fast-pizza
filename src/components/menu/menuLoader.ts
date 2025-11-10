import { getMenu } from "@/services/apiRestaurant";

export default async function menuLoader() {
  const res = await getMenu();
  return res;
}
