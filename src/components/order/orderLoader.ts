import { getOrder } from "@/services/apiRestaurant";

export default async function orderLoader({ params }) {
  const orderId = params.orderId;
  const order = await getOrder(orderId as string);
  return order;
}
