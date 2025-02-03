import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/api/list",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // 모든 출처 허용, 필요에 따라 수정 가능
          },
        ],
      },
    ];
  },
};

export default nextConfig;
