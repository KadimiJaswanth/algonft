// GalleryFilterRange — numeric range filter for gallery
// TODO: connect to filtering logic in gallery components (client-only)
import React from "react";

const GalleryFilterRange: React.FC = () => (
  <div className="flex gap-2 items-center">
    <input type="number" className="border p-1 w-20" placeholder="min" />
    <input type="number" className="border p-1 w-20" placeholder="max" />
  </div>
);

export default GalleryFilterRange;
