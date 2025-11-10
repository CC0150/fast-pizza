import { createBrowserRouter } from "react-router-dom";
import Home from "@/ui/Home";
import Menu from "@/components/menu/Menu";
import Cart from "@/components/cart/Cart";
import CreateOrder from "@/components/order/CreateOrder";
import Order from "@/components/order/Order";
import AppLayout from "@/ui/AppLayout";
import menuLoader from "@/components/menu/menuLoader";
import ErrorPage from "@/ui/Error";
import orderLoader from "@/components/order/orderLoader";
import createOrderAction from "@/components/order/createOrderAction";
import updateOrderAction from "@/components/order/updateOrderAction";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <ErrorPage />,
        action: updateOrderAction,
      },
    ],
  },
]);

export default router;
