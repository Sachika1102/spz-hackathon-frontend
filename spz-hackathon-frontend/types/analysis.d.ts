// types/analysis.ts
export interface AIInsight {
  title: string;
  body: string;
  tone: "success" | "info" | "warning";
}

export interface Stat {
  kind: "commits" | "features" | "bugs" | "reviews";
  title: string;
  value: number;
  delta?: number | null;
}

// 単一のデータセット
export interface ChartDataSet {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

// グラフ全体
export interface ChartData {
  labels: string[];
  datasets: ChartDataSet[];
}

// 作業分布/スキル評価アイテム
export interface DistributionDataItem {
  label: string;
  value: number;
  color: string;
}
