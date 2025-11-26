// TopNavWithSearch — top navigation including a small search box
// TODO: implement search debounce and connect to gallery filtering
import React from "react";

const TopNavWithSearch: React.FC = () => (
  <nav className="p-3 flex gap-4 items-center">
    <div>TopNavWithSearch</div>
    <input aria-label="search" className="border rounded p-1" placeholder="Search" />
  </nav>
);

export default TopNavWithSearch;
