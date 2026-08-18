enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
}

interface OrderConfig {
  orderId: string;
  status: OrderStatus;
}

const processOrder = (config: OrderConfig): string => {
  if (config.status === OrderStatus.Delivered) {
    return "Order is completed!";
  } else {
    return `Order is in progress: ${config.status}`;
  }
};

const orderInfo = {
  orderId: "ORD-101",
  status: "DELIVERED",
} as const;

const result = processOrder({
  orderId: orderInfo.orderId,
  status: orderInfo.status as OrderStatus,
});

console.log(result);
