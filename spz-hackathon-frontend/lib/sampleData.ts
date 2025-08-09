// lib/sampleData.ts
export const data: number[] = Array.from({ length: 365 }, () =>
  Math.floor(Math.random() * 5)
);