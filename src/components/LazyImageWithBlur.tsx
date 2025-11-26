// LazyImageWithBlur — lazy image with low-res blur placeholder
// TODO: implement IntersectionObserver and client-side blur-up technique
import React from "react";

const LazyImageWithBlur: React.FC<{ src?: string; alt?: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="block w-full" />
);

export default LazyImageWithBlur;
