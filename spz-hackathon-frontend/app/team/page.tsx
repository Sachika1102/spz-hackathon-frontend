// app/team/page.tsx
"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import MemberList from "@/components/team/MemberList";
import ProjectList from "@/components/team/ProjectList";
import TeamSettings from "@/components/team/TeamSettings";
import Tabs from "@/components/ui/Tabs";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("member");

  return (
    <>
      {/* ページごとのタイトル・サブタイトル */}
      <PageHeader
        title="チーム"
        subtitle="あなたのチーム情報とメンバーを管理"
      />

      {/* タブUI（共通コンポーネント） */}
      <Tabs
        tabs={[
          { id: "member", label: "メンバー" },
          { id: "project", label: "プロジェクト" },
          { id: "setting", label: "設定" },
        ]}
        onChange={setActiveTab}
      />

      {/* ページの中身 */}
      <div>
        {activeTab === "member" && <MemberList />}
        {activeTab === "project" && <ProjectList />}
        {activeTab === "setting" && <TeamSettings />}
      </div>
    </>
  );
}
