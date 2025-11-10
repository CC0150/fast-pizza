// import { redirect } from "react-router-dom";
import { updateOrder } from "@/services/apiRestaurant";

export default async function updateOrderAction({ params }) {
  const data = { priority: true };
  const orderId = params.orderId;
  await updateOrder(orderId, data);
  return null;
}
