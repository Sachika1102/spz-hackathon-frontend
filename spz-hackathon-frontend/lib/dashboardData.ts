import type {
  ChartData,
  DistributionDataItem,
  Stat,
  AIInsight,
} from "@/types/analysis";

/* ================================
 * チャート（週ごと）
 * 0: 今週 / 1: 先週 / 2: 2週間前
 * ================================ */

export const teamChartDataByWeek: ChartData[] = [
  // 今週
  {
    labels: ["月", "火", "水", "木", "金", "土", "日"],
    datasets: [
      {
        label: "総コミット数",
        data: [3, 0, 0, 0, 3, 10, 6],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
      },
      {
        label: "機能追加",
        data: [3, 3, 5, 5, 0, 0, 0],
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
      },
      {
        label: "バグ修正",
        data: [0, 0, 0, 0, 0, 2, 4],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,0.2)",
      },
    ],
  },
  // 先週
  {
    labels: ["月", "火", "水", "木", "金", "土", "日"],
    datasets: [
      {
        label: "総コミット数",
        data: [5, 9, 12, 16, 18, 14, 9],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
      },
      {
        label: "機能追加",
        data: [3, 5, 7, 9, 11, 8, 5],
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
      },
      {
        label: "バグ修正",
        data: [2, 4, 5, 5, 7, 6, 4],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,0.2)",
      },
    ],
  },
  // 2週間前
  {
    labels: ["月", "火", "水", "木", "金", "土", "日"],
    datasets: [
      {
        label: "総コミット数",
        data: [4, 8, 10, 12, 15, 12, 8],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
      },
      {
        label: "機能追加",
        data: [2, 4, 5, 7, 9, 7, 4],
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
      },
      {
        label: "バグ修正",
        data: [2, 4, 5, 5, 6, 5, 4],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,0.2)",
      },
    ],
  },
];

export const personalChartDataByWeek: ChartData[] = [
  // 今週
  {
    labels: ["月", "火", "水", "木", "金", "土", "日"],
    datasets: [
      {
        label: "総コミット数",
        data: [2, 4, 6, 8, 10, 7, 5],
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139,92,246,0.2)",
      },
      {
        label: "機能追加",
        data: [1, 2, 3, 4, 5, 3, 2],
        borderColor: "#f43f5e",
        backgroundColor: "rgba(244,63,94,0.2)",
      },
      {
        label: "バグ修正",
        data: [1, 1, 2, 2, 2, 1, 1],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,0.2)",
      },
    ],
  },
  // 先週
  {
    labels: ["月", "火", "水", "木", "金", "土", "日"],
    datasets: [
      {
        label: "総コミット数",
        data: [2, 3, 5, 7, 9, 6, 4],
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139,92,246,0.2)",
      },
      {
        label: "機能追加",
        data: [1, 1, 2, 3, 4, 2, 2],
        borderColor: "#f43f5e",
        backgroundColor: "rgba(244,63,94,0.2)",
      },
      {
        label: "バグ修正",
        data: [1, 1, 1, 2, 2, 1, 1],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,0.2)",
      },
    ],
  },
  // 2週間前
  {
    labels: ["月", "火", "水", "木", "金", "土", "日"],
    datasets: [
      {
        label: "総コミット数",
        data: [1, 3, 4, 6, 8, 5, 3],
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139,92,246,0.2)",
      },
      {
        label: "機能追加",
        data: [0, 1, 2, 3, 3, 2, 1],
        borderColor: "#f43f5e",
        backgroundColor: "rgba(244,63,94,0.2)",
      },
      {
        label: "バグ修正",
        data: [1, 1, 1, 1, 2, 1, 1],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,0.2)",
      },
    ],
  },
];

/* ================================
 * 作業分布 / スキル評価（週ごと）
 * ================================ */

export const teamWorkDistributionByWeek: DistributionDataItem[][] = [
  // 今週
  [
    { label: "フロントエンド", value: 45, color: "bg-blue-500" },
    { label: "バックエンド", value: 35, color: "bg-green-500" },
    { label: "テスト", value: 12, color: "bg-yellow-500" },
    { label: "ドキュメント", value: 8, color: "bg-purple-500" },
  ],
  // 先週
  [
    { label: "フロントエンド", value: 42, color: "bg-blue-500" },
    { label: "バックエンド", value: 38, color: "bg-green-500" },
    { label: "テスト", value: 12, color: "bg-yellow-500" },
    { label: "ドキュメント", value: 8, color: "bg-purple-500" },
  ],
  // 2週間前
  [
    { label: "フロントエンド", value: 40, color: "bg-blue-500" },
    { label: "バックエンド", value: 40, color: "bg-green-500" },
    { label: "テスト", value: 12, color: "bg-yellow-500" },
    { label: "ドキュメント", value: 8, color: "bg-purple-500" },
  ],
];

export const personalWorkDistributionByWeek: DistributionDataItem[][] = [
  // 今週
  [
    { label: "フロントエンド", value: 60, color: "bg-blue-500" },
    { label: "バックエンド", value: 25, color: "bg-green-500" },
    { label: "テスト", value: 10, color: "bg-yellow-500" },
    { label: "ドキュメント", value: 5, color: "bg-purple-500" },
  ],
  // 先週
  [
    { label: "フロントエンド", value: 58, color: "bg-blue-500" },
    { label: "バックエンド", value: 27, color: "bg-green-500" },
    { label: "テスト", value: 10, color: "bg-yellow-500" },
    { label: "ドキュメント", value: 5, color: "bg-purple-500" },
  ],
  // 2週間前
  [
    { label: "フロントエンド", value: 55, color: "bg-blue-500" },
    { label: "バックエンド", value: 30, color: "bg-green-500" },
    { label: "テスト", value: 10, color: "bg-yellow-500" },
    { label: "ドキュメント", value: 5, color: "bg-purple-500" },
  ],
];

export const teamSkillRatingsByWeek: DistributionDataItem[][] = [
  // 今週
  [
    { label: "React/TypeScript", value: 85, color: "bg-blue-500" },
    { label: "Node.js", value: 75, color: "bg-green-500" },
    { label: "データベース", value: 65, color: "bg-purple-500" },
    { label: "テスト設計", value: 55, color: "bg-orange-500" },
  ],
  // 先週
  [
    { label: "React/TypeScript", value: 84, color: "bg-blue-500" },
    { label: "Node.js", value: 74, color: "bg-green-500" },
    { label: "データベース", value: 64, color: "bg-purple-500" },
    { label: "テスト設計", value: 54, color: "bg-orange-500" },
  ],
  // 2週間前
  [
    { label: "React/TypeScript", value: 83, color: "bg-blue-500" },
    { label: "Node.js", value: 73, color: "bg-green-500" },
    { label: "データベース", value: 63, color: "bg-purple-500" },
    { label: "テスト設計", value: 53, color: "bg-orange-500" },
  ],
];

export const personalSkillRatingsByWeek: DistributionDataItem[][] = [
  // 今週
  [
    { label: "React/TypeScript", value: 90, color: "bg-blue-500" },
    { label: "Node.js", value: 70, color: "bg-green-500" },
    { label: "データベース", value: 60, color: "bg-purple-500" },
    { label: "テスト設計", value: 50, color: "bg-orange-500" },
  ],
  // 先週
  [
    { label: "React/TypeScript", value: 89, color: "bg-blue-500" },
    { label: "Node.js", value: 71, color: "bg-green-500" },
    { label: "データベース", value: 61, color: "bg-purple-500" },
    { label: "テスト設計", value: 51, color: "bg-orange-500" },
  ],
  // 2週間前
  [
    { label: "React/TypeScript", value: 88, color: "bg-blue-500" },
    { label: "Node.js", value: 72, color: "bg-green-500" },
    { label: "データベース", value: 61, color: "bg-purple-500" },
    { label: "テスト設計", value: 52, color: "bg-orange-500" },
  ],
];

/* ================================
 * KPI（週ごと）
 * ================================ */

// 元データ（デルタなし）
const teamStatsSource: ReadonlyArray<ReadonlyArray<Omit<Stat, "delta">>> = [
  // 今週
  [
    { kind: "commits", title: "コミット数", value: 22 },
    { kind: "features", title: "機能追加", value: 12 },
    { kind: "bugs", title: "バグ修正", value: 6 },
    { kind: "reviews", title: "レビュー", value: 4 },
  ],
  // 先週
  [
    { kind: "commits", title: "コミット数", value: 22 },
    { kind: "features", title: "機能追加", value: 10 },
    { kind: "bugs", title: "バグ修正", value: 7 },
    { kind: "reviews", title: "レビュー", value: 5 },
  ],
  // 2週間前
  [
    { kind: "commits", title: "コミット数", value: 18 },
    { kind: "features", title: "機能追加", value: 9 },
    { kind: "bugs", title: "バグ修正", value: 8 },
    { kind: "reviews", title: "レビュー", value: 4 },
  ],
];

const personalStatsSource: ReadonlyArray<ReadonlyArray<Omit<Stat, "delta">>> = [
  // 今週
  [
    { kind: "commits", title: "コミット数", value: 9 },
    { kind: "features", title: "機能追加", value: 5 },
    { kind: "bugs", title: "バグ修正", value: 2 },
    { kind: "reviews", title: "レビュー", value: 2 },
  ],
  // 先週
  [
    { kind: "commits", title: "コミット数", value: 8 },
    { kind: "features", title: "機能追加", value: 4 },
    { kind: "bugs", title: "バグ修正", value: 3 },
    { kind: "reviews", title: "レビュー", value: 2 },
  ],
  // 2週間前
  [
    { kind: "commits", title: "コミット数", value: 7 },
    { kind: "features", title: "機能追加", value: 3 },
    { kind: "bugs", title: "バグ修正", value: 2 },
    { kind: "reviews", title: "レビュー", value: 1 },
  ],
];

/**
 * 前週との差分（delta）を計算してStat[]を生成する
 * @param statsByWeek 週ごとのStat配列（deltaなし）
 */
function calculateDeltas(
  statsByWeek: ReadonlyArray<ReadonlyArray<Omit<Stat, "delta">>>
): ReadonlyArray<ReadonlyArray<Stat>> {
  return statsByWeek.map((currentWeekStats, index) => {
    // 1つ前の週のデータを取得 (index+1 が前の週)
    const previousWeekStats = statsByWeek[index + 1];

    // 比較対象の週がない場合 (最も古い週)
    if (!previousWeekStats) {
      return currentWeekStats.map((stat) => ({ ...stat, delta: null }));
    }

    // 今週と前週のデータを比較してdeltaを計算
    return currentWeekStats.map((currentStat) => {
      const previousStat = previousWeekStats.find(
        (s) => s.kind === currentStat.kind
      );

      const delta = previousStat
        ? currentStat.value - previousStat.value
        : null;

      return { ...currentStat, delta };
    });
  });
}

// 計算済みのデータをエクスポート
export const teamStatsByWeek = calculateDeltas(teamStatsSource);
export const personalStatsByWeek = calculateDeltas(personalStatsSource);

/* ================================
 * AI Insights / 週次総評（週ごと）
 * ================================ */

export const teamAIInsightsByWeek: AIInsight[][] = [
  // 今週
  [
    {
      title: "今週のハイライト",
      body: "機能追加が全体を牽引。認証まわりで品質向上。",
      tone: "success",
    },
    {
      title: "おすすめの改善点",
      body: "レビュー回数を増やして品質底上げ。",
      tone: "info",
    },
    {
      title: "トレンド分析",
      body: "バックエンド寄り。UI改善の時間を確保。",
      tone: "warning",
    },
  ],
  // 先週
  [
    {
      title: "今週のハイライト",
      body: "新機能の仕様固めが順調。小バグ修正で安定度UP。",
      tone: "success",
    },
    {
      title: "おすすめの改善点",
      body: "テストケースの充実を。E2Eの追加で回帰を防止。",
      tone: "info",
    },
    {
      title: "トレンド分析",
      body: "レビュー対応が増加。知見共有のドキュメント化を。",
      tone: "warning",
    },
  ],
  // 2週間前
  [
    {
      title: "今週のハイライト",
      body: "設計・調査タスクを着実に消化。基盤整備が前進。",
      tone: "success",
    },
    {
      title: "おすすめの改善点",
      body: "スプリント計画時の見積もり精度向上を検討。",
      tone: "info",
    },
    {
      title: "トレンド分析",
      body: "バックログの整理で優先度が明確化。",
      tone: "warning",
    },
  ],
];

export const personalAIInsightsByWeek: AIInsight[][] = [
  // 今週
  [
    {
      title: "今週のハイライト",
      body: "TSリファクタで生産性向上。型エラー減少。",
      tone: "success",
    },
    {
      title: "おすすめの改善点",
      body: "PR 説明を詳しくしてレビュアーの負担軽減。",
      tone: "info",
    },
    {
      title: "トレンド分析",
      body: "API 実装が多め。UI テストも少しずつ取り組むと◎。",
      tone: "warning",
    },
  ],
  // 先週
  [
    {
      title: "今週のハイライト",
      body: "バグ修正の効率が改善。再発防止のチェックリスト作成。",
      tone: "success",
    },
    {
      title: "おすすめの改善点",
      body: "コミット粒度を一定に。履歴から変更意図が追いやすく。",
      tone: "info",
    },
    {
      title: "トレンド分析",
      body: "ドキュメントが薄め。README の更新頻度を上げよう。",
      tone: "warning",
    },
  ],
  // 2週間前
  [
    {
      title: "今週のハイライト",
      body: "設計レビューに積極参加。仕様理解が深まった。",
      tone: "success",
    },
    {
      title: "おすすめの改善点",
      body: "テストカバレッジの目標を設定して可視化。",
      tone: "info",
    },
    {
      title: "トレンド分析",
      body: "バックエンド偏重。フロントにも時間を配分するとバランス◎。",
      tone: "warning",
    },
  ],
];

export const teamWeeklySummaryByWeek: string[] = [
  "全体的に活発な開発活動。機能追加の伸びが顕著。レビュー体制の強化が次の課題。",
  "先週は安定推移。レビュー対応が増加し、品質基盤が強化された週。",
  "2週間前は設計・準備フェーズが多め。今週以降の開発加速に備えた整備期間。",
];

export const personalWeeklySummaryByWeek: string[] = [
  "安定してコミットを継続。機能追加の貢献が高く、質も向上。",
  "先週はレビュー中心で品質改善に寄与。PR の説明精度が上がった。",
  "2週間前は設計・調査に時間を配分。以降の実装効率向上に繋がる投資。",
];
