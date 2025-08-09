"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Tabs from "@/components/ui/Tabs";
import SprintForm from "@/components/sprint/SprintForm";
import SprintHistory from "@/components/sprint/SprintHistory";
import type { SprintRecord, SprintKpt } from "@/types/sprint";

export default function SprintPage() {
  const [activeTab, setActiveTab] = useState<"new" | "past">("new");

  // 初期ダミーデータ（createdAt で管理）
  const initial: SprintRecord[] = useMemo(
    () => [
      {
        id: "sp2",
        title: "スプリント 2",
        createdAt: "2024-02-13T09:00:00.000Z",
        keep: "TDDの導入により、コード品質が向上した",
        problem:
          "パフォーマンスの問題が発生し、後半でリファクタリングが必要になった",
        try: "パフォーマンス測定を継続的に行い、早期検知に努める",
        goal: "レポートの納期を20%改善する",
      },
      {
        id: "sp1",
        title: "スプリント 1",
        createdAt: "2024-01-29T09:00:00.000Z",
        keep: "チーム内コミュニケーションが活発で、毎日のスタンドアップが効果的だった",
        problem: "テストの整備が進まず、バグが後半に集中してしまった",
        try: "次スプリントではTDDを導入して、テストファーストで開発を進める",
        goal: "バグ発生率50%削減を目指す",
      },
    ],
    []
  );

  const [records, setRecords] = useState<ReadonlyArray<SprintRecord>>(initial);

  const handleSaveNew = (data: SprintKpt) => {
    const nextIndex = records.length + 1;
    const newRecord: SprintRecord = {
      id: `sp${nextIndex}`,
      title: `スプリント ${nextIndex}`,
      createdAt: new Date().toISOString(), // ★ 登録時のタイムスタンプ
      keep: data.keep,
      problem: data.problem,
      try: data.try,
      goal: data.goal,
    };
    setRecords((prev) => [newRecord, ...prev]);
    setActiveTab("past");
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="スプリント記録"
        subtitle="チームのスプリント進捗や履歴を管理します"
      />

      <Tabs
        tabs={[
          { id: "new", label: "新規記録" },
          { id: "past", label: "過去の記録" },
        ]}
        value={activeTab}
        onChange={(v) => setActiveTab(v as "new" | "past")}
      />

      <div className="mt-6 space-y-6">
        {activeTab === "new" && <SprintForm onSave={handleSaveNew} />}
        {activeTab === "past" && <SprintHistory items={records} />}
      </div>
    </div>
  );
}
