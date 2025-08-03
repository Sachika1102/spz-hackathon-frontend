"use client";
import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Tabs from "@/components/ui/Tabs";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* ページタイトルとサブタイトル */}
      <PageHeader
        title="ダッシュボード"
        subtitle="あなたの開発活動とチーム貢献を分析しています"
      />

      {/* タブUI（共通コンポーネント） */}
      <Tabs
        tabs={[
          { id: "overview", label: "チーム" },
          { id: "analysis", label: "個人" },
        ]}
        onChange={setActiveTab}
      />

      {/* タブごとの中身 */}
      <div className="mt-6">
        {activeTab === "overview" && <p>ここに概要の内容を表示</p>}
        {activeTab === "analysis" && <p>ここに詳細分析の内容を表示</p>}
      </div>
    </div>
  );
}
