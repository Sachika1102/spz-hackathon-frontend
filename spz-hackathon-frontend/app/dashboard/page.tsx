"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Tabs from "@/components/ui/Tabs";
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardInsights from "@/components/dashboard/DashboardInsights";
import {
  teamChartData,
  personalChartData,
  teamWorkDistribution,
  personalWorkDistribution,
  teamSkillRatings,
  personalSkillRatings,
} from "@/lib/dashboardData";

export default function DashboardPage() {
  // タブ状態（チーム or 個人）
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* ページタイトル */}
      <PageHeader
        title="ダッシュボード"
        subtitle="あなたの開発活動とチーム貢献を分析しています"
      />

      {/* タブ切替（チーム / 個人） */}
      <Tabs
        tabs={[
          { id: "overview", label: "チーム" },
          { id: "analysis", label: "個人" },
        ]}
        onChange={setActiveTab}
      />

      {/* タブごとの表示 */}
      <div className="mt-6">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        )}

        {activeTab === "analysis" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        )}
      </div>
    </div>
  );
}
