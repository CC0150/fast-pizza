import DeleteItem from "./DeleteItem";
import { formatCurrency } from "@/utils/helpers";
import { memo } from "react";
import UpdateItemQuantity from "./UpdateItemQuantity";
import useCartStore from "@/store/cartStore";

interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

const CartItem: React.FC<{ item: CartItem }> = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useCartStore((state) => state.getQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default memo(CartItem);
