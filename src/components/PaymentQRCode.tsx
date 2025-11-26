// PaymentQRCode — shows a QR code for a payment request (placeholder)
// TODO: generate QR payload client-side; do not include secrets
import React from "react";

const PaymentQRCode: React.FC<{ payload?: string }> = ({ payload }) => (
  <div className="p-3">QR: {payload ?? "pay:..."}</div>
);

export default PaymentQRCode;
