"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import TeamSettings from "./TeamSettings";

type Member = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: "online" | "offline";
  lastActive: string;
  commits: number;
  reviews: number;
};

export default function MemberList() {
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "田中 太郎",
      role: "チームリーダー",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      status: "online",
      lastActive: "2分前",
      commits: 156,
      reviews: 23,
    },
    {
      id: 2,
      name: "佐藤 花子",
      role: "フロントエンド開発者",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      status: "online",
      lastActive: "15分前",
      commits: 134,
      reviews: 18,
    },
    {
      id: 3,
      name: "鈴木 次郎",
      role: "バックエンド開発者",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      status: "offline",
      lastActive: "1時間前",
      commits: 98,
      reviews: 15,
    },
    {
      id: 4,
      name: "高橋 美咲",
      role: "デザイナー",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      status: "online",
      lastActive: "5分前",
      commits: 67,
      reviews: 8,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    avatar: "",
    status: "online" as const,
    lastActive: "たった今",
    commits: 0,
    reviews: 0,
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "オンライン";
      case "offline":
        return "オフライン";
      default:
        return "オフライン";
    }
  };

  const handleAddMember = () => {
    if (!newMember.name.trim() || !newMember.role.trim()) {
      alert("名前と役職を入力してください");
      return;
    }

    setMembers((prev) => [
      ...prev,
      {
        ...newMember,
        id: Date.now(),
        name: newMember.name.trim(),
        role: newMember.role.trim(),
        avatar:
          newMember.avatar.trim() ||
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      },
    ]);

    setNewMember({
      name: "",
      role: "",
      avatar: "",
      status: "online",
      lastActive: "たった今",
      commits: 0,
      reviews: 0,
    });
    setShowModal(false);
  };

  const renderMemberCard = (member: Member) => (
    <>
      {/* Header section */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(
                  member.status
                )} border-2 border-white rounded-full`}
              ></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              member.status === "online"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {getStatusText(member.status)}
          </span>
        </div>
      </div>

      {/* Stats section */}
      <div className="px-6 pb-4 pt-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">最終活動</span>
          <span className="text-sm font-medium text-gray-900">
            {member.lastActive}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">コミット数</span>
          <span className="text-sm font-medium text-gray-900">
            {member.commits}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">レビュー数</span>
          <span className="text-sm font-medium text-gray-900">
            {member.reviews}
          </span>
        </div>
      </div>

      {/* Bottom section with buttons */}
      <div className="px-6 pb-6 flex space-x-3">
        <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
          プロフィール
        </button>
        <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
    </>
  );

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50">
      {/* ヘッダーと追加ボタン */}
      <div className="flex justify-between items-center">
        <div className="flex">
          <h2 className="font-bold text-[20px] mr-4">チームメンバー</h2>
          <p className="w-12 h-7 bg-blue-200 text-blue-700 font-bold text-sm rounded-2xl flex items-center justify-center">
            {members.length}人
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          ＋ メンバーを追加
        </button>
      </div>

      {/* 上3人 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.slice(0, 3).map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden w-full"
          >
            {renderMemberCard(member)}
          </div>
        ))}
      </div>

      {/* 4人目以降（左寄せ＆同じサイズ） */}
      {members.length > 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {members.slice(3).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden w-full"
            >
              {renderMemberCard(member)}
            </div>
          ))}
        </div>
      )}

      {/* モーダル */}
      {showModal && (
        <div className="fixed inset-0 bg-[rgba(105,105,105,0.7)] flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4"
              aria-label="閉じる"
            >
              <X />
            </button>
            <h2 className="text-lg font-semibold mb-4">メンバーを招待</h2>

            <p className="text-sm text-gray-600">メールアドレス</p>
            <input
              type="text"
              value={newMember.name}
              onChange={(e) =>
                setNewMember({ ...newMember, name: e.target.value })
              }
              placeholder="example@company.com"
              className="w-full border rounded-lg px-3 py-2 mb-4"
            />



            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg text-gray-500 hover:text-black"
              >
                キャンセル
              </button>
              <button
                onClick={handleAddMember}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                招待を送信
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="fixed bottom-4 right-6 flex items-center space-x-2 text-sm text-gray-500">
        <span>Designed by</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-purple-500 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">R</span>
          </div>
          <span className="font-medium">Readdy</span>
        </div>
      </div>
      <TeamSettings></TeamSettings>
    </div>
    
  );
}
