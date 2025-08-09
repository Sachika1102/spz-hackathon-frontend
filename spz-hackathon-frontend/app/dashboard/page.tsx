"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Tabs from "@/components/ui/Tabs";
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardInsights from "@/components/dashboard/DashboardInsights";

// 追加: KPIカード / AI分析 / 総評
import StatsCard from "@/components/dashboard/StatsCard";
import AIAdviceSection from "@/components/dashboard/AIAdviceSection";
import WeeklySummary from "@/components/dashboard/WeeklySummary";

import type { Stat } from "@/types/analysis";

// ★ 週ごとの配列をインポート（ByWeek）
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

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "analysis">(
    "overview"
  ); // チーム/個人
  const [selectedWeek, setSelectedWeek] = useState(0); // 0: 今週, 1: 先週, 2: 2週間前

  const weeks = ["今週", "先週", "2週間前"] as const;

  // clamp: 0..weeks.length-1 の範囲に収める（配列外アクセス防止）
  const w = Math.min(Math.max(selectedWeek, 0), weeks.length - 1);

  const getUnit = (kind: Stat["kind"]): string => {
    switch (kind) {
      case "commits":
        return "commits";
      case "features":
        return "features";
      case "bugs":
        return "fixes";
      case "reviews":
        return "reviews";
      default:
        return "";
    }
  };

  const renderCards = (stats: ReadonlyArray<Stat>) => (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <StatsCard
          key={s.kind}
          title={s.title}
          value={s.value}
          delta={s.delta}
          deltaUnit={getUnit(s.kind)}
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="ダッシュボード"
        subtitle="あなたの開発活動とチーム貢献を分析しています"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          tabs={[
            { id: "overview", label: "チーム" },
            { id: "analysis", label: "個人" },
          ]}
          value={activeTab} // ★ 制御コンポーネントとして値を渡す
          onChange={(v) => setActiveTab(v as "overview" | "analysis")}
        />

        {/* 週セレクタ */}
        <div className="inline-flex rounded-md shadow-sm border border-gray-300 overflow-hidden">
          {weeks.map((week, index) => {
            const active = w === index;
            return (
              <button
                key={week}
                type="button"
                onClick={() => setSelectedWeek(index)}
                className={`px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  active
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } ${index > 0 ? "border-l border-gray-300" : ""}`}
                aria-pressed={active}
              >
                {week}
              </button>
            );
          })}
        </div>
      </div>

      {/* ---- チームタブ ---- */}
      {activeTab === "overview" && (
        <div className="mt-6 space-y-6">
          {/* グラフ + 傾向 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DashboardChart
              title={`週間活動トレンド（チーム）- ${weeks[w]}`}
              labels={teamChartDataByWeek[w].labels}
              datasets={teamChartDataByWeek[w].datasets}
            />
            <DashboardInsights
              title={`あなたの開発傾向（チーム）- ${weeks[w]}`}
              workDistribution={teamWorkDistributionByWeek[w]}
              skillRatings={teamSkillRatingsByWeek[w]}
            />
          </div>
          {/* 4枚カード */}
          {renderCards(teamStatsByWeek[w])}

          {/* AI分析 + 今週の総評 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <AIAdviceSection items={teamAIInsightsByWeek[w]} />
            <WeeklySummary text={teamWeeklySummaryByWeek[w]} />
          </div>
        </div>
      )}

      {/* ---- 個人タブ ---- */}
      {activeTab === "analysis" && (
        <div className="mt-6 space-y-6">
          {/* グラフ + 傾向 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DashboardChart
              title={`週間活動トレンド（個人）- ${weeks[w]}`}
              labels={personalChartDataByWeek[w].labels}
              datasets={personalChartDataByWeek[w].datasets}
            />
            <DashboardInsights
              title={`あなたの開発傾向（個人）- ${weeks[w]}`}
              workDistribution={personalWorkDistributionByWeek[w]}
              skillRatings={personalSkillRatingsByWeek[w]}
            />
          </div>
          {/* 4枚カード */}
          {renderCards(personalStatsByWeek[w])}

          {/* AI分析 + 今週の総評 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <AIAdviceSection items={personalAIInsightsByWeek[w]} />
            <WeeklySummary text={personalWeeklySummaryByWeek[w]} />
          </div>
        </div>
      )}
    </div>
  );
}
