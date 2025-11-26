// MintFormAdvanced — expanded mint form with extra metadata fields
// TODO: prepare unsigned asset create tx and show gas estimate; sign in wallet
import React from "react";

const MintFormAdvanced: React.FC = () => (
  <form className="p-3 border rounded">
    <input placeholder="Title" className="border p-1 w-full mb-2" />
    <textarea placeholder="Description" className="border p-1 w-full mb-2" />
    <button className="px-3 py-1 border rounded">Mint (advanced)</button>
  </form>
);

export default MintFormAdvanced;
