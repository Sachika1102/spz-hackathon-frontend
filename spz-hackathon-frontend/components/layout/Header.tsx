"use client";
import { useState } from "react";
import Link from "next/link";
import ProjectDrawer from "./ProjectDrawer";
import NotificationsDropdown from "./NotificationsDropdown";
import { useNotifications } from "@/hooks/useNotifications";
import ProjectData from "./ProjectData";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // 通知データ（フック化）
  const notifications = useNotifications();

  return (
    <header className="bg-white shadow px-4 py-2 flex items-center justify-between relative">
      {/* 左側：ハンバーガー + アプリ名 + ナビ */}
      <div className="flex items-center space-x-4">
        {/* ハンバーガーメニュー */}
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="p-2 hover:bg-gray-100 rounded"
          aria-label="プロジェクトを開く"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* アプリ名 */}
        <span className="font-bold text-lg text-gray-800">CommitScope</span>

        {/* ナビゲーション */}
        <nav className="flex space-x-4 text-gray-700">
          <Link href="/dashboard" className="hover:text-blue-600">
            ダッシュボード
          </Link>
          <Link href="/team" className="hover:text-blue-600">
            チーム
          </Link>
          <Link href="/sprint" className="hover:text-blue-600">
            スプリント
          </Link>
          <Link href="/profile" className="hover:text-blue-600">
            プロフィール
          </Link>
        </nav>
      </div>

      {/* 右側：通知 */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative p-2 hover:bg-gray-100 rounded-full"
            aria-label="通知を開く"
          >
            {/* ベルアイコン */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* 通知数バッジ */}
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>

          {/* 通知ドロップダウン */}
          {isNotificationsOpen && (
            <NotificationsDropdown notifications={notifications} />
          )}
        </div>
      </div>

      {/* ドロワー：プロジェクトデータ読み込み */}
      {isDrawerOpen && (
        <ProjectData>
          {(projects) => (
            <ProjectDrawer
              projects={projects}
              onClose={() => setIsDrawerOpen(false)}
            />
          )}
        </ProjectData>
      )}
    </header>
  );
}
