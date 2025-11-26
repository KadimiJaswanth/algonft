// ModalConfirm — simple confirm modal
// TODO: accept callbacks for confirm/cancel and trap focus (client-only)
import React from "react";

const ModalConfirm: React.FC<{ message?: string; onConfirm?: () => void }> = ({ message = "Are you sure?", onConfirm }) => (
  <div className="p-4 border rounded">
    <div>{message}</div>
    <button onClick={onConfirm} className="mt-2 px-3 py-1 border rounded">Confirm</button>
  </div>
);

export default ModalConfirm;
