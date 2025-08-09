// types/sprint.d.ts
export type SprintKpt = {
  keep: string;
  problem: string;
  try: string;
  goal: string;
};

export type SprintRecord = SprintKpt & {
  id: string;
  title: string; // 例: "スプリント 3"
  createdAt: string; // ISO文字列（new Date().toISOString()）
};
