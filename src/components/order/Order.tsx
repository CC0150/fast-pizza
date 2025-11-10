// 测试ID: IIDSAT
import UpdateOrder from "./UpdateOrder";
import { useEffect } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { OrderData } from "./types";
import OrderItem from "./OrderItem";
import useCartStore from "../../store/cartStore";

const Order: React.FC = () => {
  const order = useLoaderData() as OrderData;

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
    // console.log(fetcher.data);
  }, [fetcher]);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const clearCart = useCartStore((state) => state.clearCart);

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  // 当用户访问订单详情页时，自动清空购物车
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">订单 #{id} 状态</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `预计还需 ${deliveryIn} 分钟送达 😃`
            : "订单应该已经送达"}
        </p>
        <p className="text-xs text-stone-500">
          （预计送达时间：{formatDate(estimatedDelivery)}）
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            key={item.pizzaId}
            item={item}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher.data?.find(
                (el: { id: number; ingredients: string[] }) =>
                  el.id === item.pizzaId,
              )?.ingredients
            }
          />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          餐品价格：{formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            优先配送费：{formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          货到付款金额：{formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
};

export default Order;
