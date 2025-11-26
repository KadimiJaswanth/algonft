// PaginationCursor — cursor-based pagination controls
// TODO: integrate with GraphQL/REST cursor results (client-only)
import React from "react";

const PaginationCursor: React.FC = () => (
  <div className="flex gap-2">
    <button className="px-2 py-1 border rounded">Newer</button>
    <button className="px-2 py-1 border rounded">Older</button>
  </div>
);

export default PaginationCursor;
