// GalleryFilterChip — single filter chip for gallery
// TODO: wire selection state to gallery filter hooks (client-side)
import React from "react";

const GalleryFilterChip: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-2 py-1 border rounded">{label}</button>
);

export default GalleryFilterChip;
