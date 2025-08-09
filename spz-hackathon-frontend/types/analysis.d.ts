export type AIInsight = {
  title: string;
  body: string;
  tone: "success" | "info" | "warning";
};

export type Stat = {
  readonly kind: string;
  readonly title: string;
  readonly value: number;
  readonly delta: number;
};