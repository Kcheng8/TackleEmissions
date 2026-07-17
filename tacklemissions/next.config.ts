import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 permits only [75] by default and silently coerces any other
    // `quality` prop to the nearest listed value. 90 is here for the Solution
    // step diagrams — line-art whose small labels 75 blurs.
    qualities: [75, 90],
  },
};

export default nextConfig;
