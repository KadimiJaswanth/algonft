// NFTCardTall — tall-format NFT card for gallery
// TODO: show owner and allow 'view on chain' via indexer URL (client-side only)
import React from "react";

const NFTCardTall: React.FC<{ title?: string }> = ({ title = "NFT" }) => (
  <article className="p-2 border rounded">NFTCardTall: {title}</article>
);

export default NFTCardTall;
