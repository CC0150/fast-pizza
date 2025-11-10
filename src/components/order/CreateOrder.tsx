import useUserStore from "@/store/userStore";
import Button from "@/ui/Button";
import { memo, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import useCartStore from "@/store/cartStore";
import EmptyCart from "@/components/cart/EmptyCart";
import { formatCurrency } from "@/utils/helpers";

const CreateOrder: React.FC = () => {
  const userName = useUserStore((state) => state.userName);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData() as { phone?: string } | null;
  const [withPriority, setWithPriority] = useState(false);
  const cart = useCartStore((state) => state.getCart());
  const totalCartPrice = useCartStore((state) => state.getTotalPrice());
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-2xl font-bold">请填写相关用户信息</h2>

      <Form method="post">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-20">姓名</label>
          <input
            className="input grow"
            defaultValue={userName}
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-20">电话号码</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-20">地址</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-bold" htmlFor="priority">
            您的订单需要加急配送吗？
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting
              ? "提交中..."
              : `立即下单 (${formatCurrency(totalPrice)})`}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default memo(CreateOrder);
