"use client";

export type Project = { id: number; name: string };

// いったん同期返却（将来APIに切り替える時はここを非同期化）
export function useProjects(): Project[] {
  return [
    { id: 1, name: "プロジェクトA" },
    { id: 2, name: "プロジェクトB" },
    { id: 3, name: "プロジェクトC" },
  ];
}
