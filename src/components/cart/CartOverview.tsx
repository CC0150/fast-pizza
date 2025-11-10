import { memo } from "react";
import { Link } from "react-router-dom";
import useCartStore from "@/store/cartStore";
import { formatCurrency } from "@/utils/helpers";

const CartOverview: React.FC = () => {
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  if (totalQuantity === 0) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default memo(CartOverview);
