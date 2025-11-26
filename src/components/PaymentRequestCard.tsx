// PaymentRequestCard — card showing a payment request
// TODO: allow user to accept and sign a request via wallet (client-only)
import React from "react";

const PaymentRequestCard: React.FC<{ amount?: number; from?: string }> = ({ amount, from }) => (
  <div className="p-3 border rounded">Request: {amount ?? 0} ALGO from {from ?? "user"}</div>
);

export default PaymentRequestCard;
