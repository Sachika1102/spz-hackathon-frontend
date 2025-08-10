"use client";

export type Project = { id: number; name: string };

// いったん同期返却（将来APIに切り替える時はここを非同期化）
export function useProjects(): Project[] {
  return [
    { id: 1, name: "spz-hackathon-frontend" },
    { id: 2, name: "cook-manegement" },
    { id: 3, name: "spz-hackathon-backend" },
  ];
}
