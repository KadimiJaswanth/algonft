// TxRowMinimal — compact transaction row
// TODO: show minimal details and status badge (client-only)
import React from "react";

const TxRowMinimal: React.FC<{ id?: string }> = ({ id }) => <div className="p-1">{id ?? "tx..."}</div>;

export default TxRowMinimal;
