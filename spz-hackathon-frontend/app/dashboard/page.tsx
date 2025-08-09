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

// 既存 + 追加データをまとめて import
import {
  teamChartData,
  personalChartData,
  teamWorkDistribution,
  personalWorkDistribution,
  teamSkillRatings,
  personalSkillRatings,
  // 追加分
  teamStats,
  personalStats,
  teamAIInsights,
  personalAIInsights,
  teamWeeklySummary,
  personalWeeklySummary,
} from "@/lib/dashboardData";
import { Stat } from "@/types/analysis";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview"); // overview=チーム / analysis=個人

  const renderCards = (stats: readonly Stat[]) => (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <StatsCard
          key={s.kind}
          title={s.title}
          value={s.value}
          delta={s.delta}
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

      <Tabs
        tabs={[
          { id: "overview", label: "チーム" },
          { id: "analysis", label: "個人" },
        ]}
        onChange={setActiveTab}
      />

      {/* ---- チームタブ ---- */}
      {activeTab === "overview" && (
        <div className="mt-6 space-y-6">
          {/* グラフ + 傾向 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DashboardChart
              title="週間活動トレンド（チーム）"
              labels={teamChartData.labels}
              datasets={teamChartData.datasets}
            />
            <DashboardInsights
              title="あなたの開発傾向（チーム）"
              workDistribution={teamWorkDistribution}
              skillRatings={teamSkillRatings}
            />
          </div>
          {/* 4枚カード */}
          {renderCards(teamStats)}

          {/* AI分析 + 今週の総評 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <AIAdviceSection items={teamAIInsights} />
            <WeeklySummary text={teamWeeklySummary} />
          </div>
        </div>
      )}

      {/* ---- 個人タブ ---- */}
      {activeTab === "analysis" && (
        <div className="mt-6 space-y-6">
          {/* グラフ + 傾向 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DashboardChart
              title="週間活動トレンド（個人）"
              labels={personalChartData.labels}
              datasets={personalChartData.datasets}
            />
            <DashboardInsights
              title="あなたの開発傾向（個人）"
              workDistribution={personalWorkDistribution}
              skillRatings={personalSkillRatings}
            />
          </div>
          {/* 4枚カード */}
          {renderCards(personalStats)}

          {/* AI分析 + 今週の総評 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <AIAdviceSection items={personalAIInsights} />
            <WeeklySummary text={personalWeeklySummary} />
          </div>
        </div>
      )}
    </div>
  );
}
