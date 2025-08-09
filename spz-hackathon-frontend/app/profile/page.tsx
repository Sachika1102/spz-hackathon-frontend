"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Tabs from "@/components/ui/Tab";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileForm from "@/components/profile/ProfileForm";
import SkillList from "@/components/profile/SkillList";
import AchievementStats from "@/components/profile/AchievementStats";
import ActivityHeatmap from "@/components/profile/ActivityHeatmap";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (data: any) => {
    console.log('保存データ:', data);
    setIsEditing(false);
    // ここでAPI呼び出しなどの保存処理
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* ページタイトルとサブタイトル */}
      <PageHeader
        title="プロフィール"
        subtitle="あなたの個人情報とスキルを管理"
      />

      {/* タブUI（共通コンポーネント） */}
      <Tabs
        tabs={[
          { id: "info", label: "個人情報" },
          { id: "skill", label: "スキル" },
          { id: "record", label: "実績" },
        ]}
        onChange={setActiveTab}
      />

      {/* タブごとの中身 */}
      <div className="mt-6">
        {activeTab === "info" && (
          isEditing ? (
            <ProfileForm onSave={handleSave} onCancel={handleCancel} />
          ) : (
            <ProfileInfo onEdit={handleEdit} />
          )
        )}
        {activeTab === "skill" && <SkillList />}
        {activeTab === "record" && (
          <div className="space-y-6">
            <AchievementStats />
            <ActivityHeatmap />
          </div>
        )}
      </div>
    </div>
  );
}