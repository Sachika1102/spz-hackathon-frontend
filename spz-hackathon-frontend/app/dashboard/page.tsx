"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Tabs from "@/components/ui/Tabs";

// グラフ・右パネルのコンポーネント
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardInsights from "@/components/dashboard/DashboardInsights";

// データ（チーム・個人で別データを読み込み）
import {
  teamChartData,
  personalChartData,
  teamWorkDistribution,
  personalWorkDistribution,
  teamSkillRatings,
  personalSkillRatings,
} from "@/lib/dashboardData";

export default function DashboardPage() {
  // -------------------------------
  // 現在アクティブなタブの状態を管理
  // "overview" = チーム, "analysis" = 個人
  // -------------------------------
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* -------------------------------
          ページ上部の共通ヘッダー
          → PageHeaderコンポーネントにタイトルとサブタイトルを渡す
      ------------------------------- */}
      <PageHeader
        title="ダッシュボード"
        subtitle="あなたの開発活動とチーム貢献を分析しています"
      />

      {/* -------------------------------
          タブ切り替えコンポーネント
          → "チーム" / "個人" の2タブを表示
          → onChange で activeTab を更新
      ------------------------------- */}
      <Tabs
        tabs={[
          { id: "overview", label: "チーム" },
          { id: "analysis", label: "個人" },
        ]}
        onChange={setActiveTab}
      />

      {/* -------------------------------
          タブごとの中身
          → activeTab の値に応じて表示内容を切り替える
      ------------------------------- */}
      <div className="mt-6">
        {/* ======== チームタブ ======== */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 左側：折れ線グラフコンポーネント */}
            <DashboardChart
              title="週間活動トレンド（チーム）"
              labels={teamChartData.labels}
              datasets={teamChartData.datasets}
            />

            {/* 右側：作業傾向＆スキル評価コンポーネント */}
            <DashboardInsights
              title="あなたの開発傾向（チーム）"
              workDistribution={teamWorkDistribution}
              skillRatings={teamSkillRatings}
            />
          </div>
        )}

        {/* ======== 個人タブ ======== */}
        {activeTab === "analysis" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 左側：折れ線グラフ（個人データ） */}
            <DashboardChart
              title="週間活動トレンド（個人）"
              labels={personalChartData.labels}
              datasets={personalChartData.datasets}
            />

            {/* 右側：作業傾向＆スキル評価（個人データ） */}
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
