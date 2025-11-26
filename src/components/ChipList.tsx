// ChipList — list of chips/tags
// TODO: allow removal of chips and keyboard navigation (client-only)
import React from "react";

const ChipList: React.FC<{ items?: string[] }> = ({ items = [] }) => (
  <div className="flex gap-2">{items.length ? items.map((i) => <span key={i} className="px-2 py-1 bg-gray-100 rounded">{i}</span>) : 'No chips'}</div>
);

export default ChipList;
