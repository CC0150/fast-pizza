export interface Root {
  status: string;
  data: OrderData;
}

export interface OrderData {
  customer: string;
  status: string;
  priority: boolean;
  cart: OrderCart[];
  id: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
}

export interface OrderCart {
  addIngredients: string[];
  removeIngredients: string[];
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Cart {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CreateOrderRequest {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: Cart[];
}
