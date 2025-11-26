// TxRowDetailed — detailed transaction row for activity lists
// TODO: link to indexer and show decoded note (client-only)
import React from "react";

const TxRowDetailed: React.FC<{ id?: string }> = ({ id }) => (
  <div className="p-2 border-b">Tx: {id ?? "txid..."} (detailed)</div>
);

export default TxRowDetailed;
