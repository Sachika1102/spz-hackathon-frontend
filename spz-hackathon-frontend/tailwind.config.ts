import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router全体
    "./app/dashboard/**/*.{js,ts,jsx,tsx}", // ダッシュボード明示的に追加
    "./components/**/*.{js,ts,jsx,tsx}", // 共通コンポーネント
    "./lib/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
