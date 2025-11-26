// CollectionHeader — header for a collection page
// TODO: display collection metadata and CTA to mint/import (client-only)
import React from "react";

const CollectionHeader: React.FC<{ title?: string }> = ({ title = "Collection" }) => (
  <div className="p-4 border-b">{title}</div>
);

export default CollectionHeader;
