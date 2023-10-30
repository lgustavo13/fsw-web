import { OrderStatus } from "@prisma/client";

export const getOrdersStatus = (orderStatus: OrderStatus) => {
  return {
    [OrderStatus.PAYMENT_CONFIRMED]: "Pago",
    [OrderStatus.WAITING_FOR_PAYMENT]: "Pendente"
  } [orderStatus]
}