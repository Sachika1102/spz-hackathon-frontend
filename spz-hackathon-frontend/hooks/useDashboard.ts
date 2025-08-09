"use client";

import type {
  ChartData,
  DistributionDataItem,
  Stat,
  AIInsight,
} from "@/types/analysis";
import {
  teamChartDataByWeek,
  personalChartDataByWeek,
  teamWorkDistributionByWeek,
  personalWorkDistributionByWeek,
  teamSkillRatingsByWeek,
  personalSkillRatingsByWeek,
  teamStatsByWeek,
  personalStatsByWeek,
  teamAIInsightsByWeek,
  personalAIInsightsByWeek,
  teamWeeklySummaryByWeek,
  personalWeeklySummaryByWeek,
} from "@/lib/dashboardData";

export type DashboardScope = "team" | "personal";

export type DashboardPayload = {
  chart: ChartData;
  workDistribution: DistributionDataItem[];
  skillRatings: DistributionDataItem[];
  stats: ReadonlyArray<Stat>;
  insights: ReadonlyArray<AIInsight>;
  summary: string;
};

/**
 * いまはローカル配列から即時返却。
 * 後でAPI化する時は、この中身だけ fetch('/api/...') に差し替えればOK。
 */
export function useDashboard(
  scope: DashboardScope,
  week: number
): DashboardPayload {
  const w = clamp(week, 0, 2);

  if (scope === "team") {
    return {
      chart: teamChartDataByWeek[w],
      workDistribution: teamWorkDistributionByWeek[w],
      skillRatings: teamSkillRatingsByWeek[w],
      stats: teamStatsByWeek[w],
      insights: teamAIInsightsByWeek[w],
      summary: teamWeeklySummaryByWeek[w],
    };
  }

  // personal
  return {
    chart: personalChartDataByWeek[w],
    workDistribution: personalWorkDistributionByWeek[w],
    skillRatings: personalSkillRatingsByWeek[w],
    stats: personalStatsByWeek[w],
    insights: personalAIInsightsByWeek[w],
    summary: personalWeeklySummaryByWeek[w],
  };
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}
