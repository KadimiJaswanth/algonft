// PaymentToast — small toast notification for payments
// TODO: show tx status and link to indexer view (client-only)
import React from "react";

const PaymentToast: React.FC<{ message?: string }> = ({ message = "Payment sent" }) => (
  <div className="p-2 bg-white border shadow">{message}</div>
);

export default PaymentToast;
