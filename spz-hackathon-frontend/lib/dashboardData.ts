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
// KPIカード（チーム）
export const teamStats = [
  { kind: "commits", title: "今週のコミット数", value: 22, delta: 12 },
  { kind: "features", title: "機能追加", value: 12, delta: 8 },
  { kind: "bugs", title: "バグ修正", value: 6, delta: -5 },
  { kind: "reviews", title: "レビュー", value: 4, delta: 25 },
] as const;

// KPIカード（個人）
export const personalStats = [
  { kind: "commits", title: "今週のコミット数", value: 9, delta: 5 },
  { kind: "features", title: "機能追加", value: 5, delta: 11 },
  { kind: "bugs", title: "バグ修正", value: 2, delta: -3 },
  { kind: "reviews", title: "レビュー", value: 2, delta: 18 },
] as const;

import { AIInsight } from "@/types/analysis";

// AI分析（チーム）
export const teamAIInsights: AIInsight[] = [
  {
    title: "今週のハイライト",
    body: "機能追加が全体を牽引。認証まわりで品質が向上しています。",
    tone: "success",
  },
  {
    title: "おすすめの改善点",
    body: "コードレビューの回数を増やすとチーム全体の品質が底上げできます。",
    tone: "info",
  },
  {
    title: "トレンド分析",
    body: "バックエンド寄り。UI改善の時間をもう少し確保するとバランスが良くなります。",
    tone: "warning",
  },
];

// AI分析（個人）
export const personalAIInsights: AIInsight[] = [
  {
    title: "今週のハイライト",
    body: "TypeScriptリファクタで生産性が向上。",
    tone: "success",
  },
  {
    title: "おすすめの改善点",
    body: "PR説明文をもう一段詳しく。レビュアーの負担が減ります。",
    tone: "info",
  },
  {
    title: "トレンド分析",
    body: "API実装が多め。UIテストも少しずつ取り組むと◎。",
    tone: "warning",
  },
];

// 今週の総評
export const teamWeeklySummary =
  "全体的に活発な開発活動。機能追加の伸びが顕著で、レビュー体制の強化が次の課題です。継続的な成長が期待できます";

export const personalWeeklySummary =
  "安定してコミットを継続。機能追加での貢献が高く、次週はレビュー主導での品質改善に挑戦するとさらに評価が伸びます。";
