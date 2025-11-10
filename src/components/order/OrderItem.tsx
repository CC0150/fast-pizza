import { memo } from "react";
import { formatCurrency } from "../../utils/helpers";
import { OrderCart } from "./types";

interface OrderItemProps {
  item: OrderCart;
  ingredients?: string[];
  isLoadingIngredients?: boolean;
}

const OrderItem: React.FC<OrderItemProps> = ({
  item,
  ingredients,
  isLoadingIngredients,
}) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
};

export default memo(OrderItem);
