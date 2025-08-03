"use client";
import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Tabs from "@/components/ui/Tabs";

export default function SprintPage() {
  // 選択中のタブ状態
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="space-y-6">
      {/* ページタイトルとサブタイトル */}
      <PageHeader
        title="スプリント記録"
        subtitle="チームのスプリント進捗や履歴を管理します"
      />

      {/* タブUI（共通コンポーネント） */}
      <Tabs
        tabs={[
          { id: "new", label: "新規記録" },
          { id: "past", label: "過去の記録" },
        ]}
        onChange={setActiveTab}
      />

      {/* タブごとの中身 */}
      <div className="mt-6">
        {activeTab === "new" && <p>ここに新規記録フォームの内容を表示</p>}
        {activeTab === "past" && <p>ここに過去の記録の内容を表示</p>}
      </div>
    </div>
  );
}
