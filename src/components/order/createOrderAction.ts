import { createOrder } from "@/services/apiRestaurant";
import { redirect } from "react-router-dom";

const isValidPhone = (str: string) =>
  /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(
    str,
  );

export default async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on", // HTML复选框选中时的值是"on"
  };

  const errors: { phone?: string } = {};
  if (!isValidPhone(data.phone)) {
    errors.phone = "请输入正确的电话号码";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const newOrder = await createOrder({
    ...order,
    customer: data.customer,
    phone: data.phone,
    address: data.address,
  });

  return redirect(`/order/${newOrder.id}`);
}
