// lib/dashboardData.ts

// チーム用データ
export const teamChartData = {
  labels: ["月", "火", "水", "木", "金", "土", "日"],
  datasets: [
    {
      label: "総コミット数",
      data: [6, 10, 14, 18, 22, 16, 10],
      borderColor: "#3b82f6", // 青
      backgroundColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      label: "機能追加",
      data: [4, 6, 8, 12, 14, 10, 6],
      borderColor: "#10b981", // 緑
      backgroundColor: "rgba(16, 185, 129, 0.2)",
    },
    {
      label: "バグ修正",
      data: [2, 4, 5, 6, 7, 5, 3],
      borderColor: "#f59e0b", // オレンジ
      backgroundColor: "rgba(245, 158, 11, 0.2)",
    },
  ],
};

// 個人用データ（同じ3本構成で色変更）
export const personalChartData = {
  labels: ["月", "火", "水", "木", "金", "土", "日"],
  datasets: [
    {
      label: "総コミット数",
      data: [2, 4, 6, 8, 10, 7, 5],
      borderColor: "#8b5cf6", // 紫
      backgroundColor: "rgba(139, 92, 246, 0.2)",
    },
    {
      label: "機能追加",
      data: [1, 2, 3, 4, 5, 3, 2],
      borderColor: "#f43f5e", // ピンク
      backgroundColor: "rgba(244, 63, 94, 0.2)",
    },
    {
      label: "バグ修正",
      data: [1, 1, 2, 2, 2, 1, 1],
      borderColor: "#f59e0b", // オレンジ
      backgroundColor: "rgba(245, 158, 11, 0.2)",
    },
  ],
};
// -------------------- チームデータ --------------------

// 右側の作業傾向データ（チーム）
export const teamWorkDistribution = [
  { label: "フロントエンド", value: 45, color: "bg-blue-500" },
  { label: "バックエンド", value: 35, color: "bg-green-500" },
  { label: "テスト", value: 12, color: "bg-yellow-500" },
  { label: "ドキュメント", value: 8, color: "bg-purple-500" },
];

// スキル評価データ（チーム）
export const teamSkillRatings = [
  { label: "React/TypeScript", value: 85, color: "bg-blue-500" },
  { label: "Node.js", value: 75, color: "bg-green-500" },
  { label: "データベース", value: 65, color: "bg-purple-500" },
  { label: "テスト設計", value: 55, color: "bg-orange-500" },
];

// -------------------- 個人データ --------------------

// 右側の作業傾向データ（個人）
export const personalWorkDistribution = [
  { label: "フロントエンド", value: 60, color: "bg-blue-500" },
  { label: "バックエンド", value: 25, color: "bg-green-500" },
  { label: "テスト", value: 10, color: "bg-yellow-500" },
  { label: "ドキュメント", value: 5, color: "bg-purple-500" },
];

// スキル評価データ（個人）
export const personalSkillRatings = [
  { label: "React/TypeScript", value: 90, color: "bg-blue-500" },
  { label: "Node.js", value: 70, color: "bg-green-500" },
  { label: "データベース", value: 60, color: "bg-purple-500" },
  { label: "テスト設計", value: 50, color: "bg-orange-500" },
];
