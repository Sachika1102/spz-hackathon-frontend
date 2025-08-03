"use client";
// クライアントコンポーネント指定（App Routerではユーザー操作やuseStateを使うなら必要）

import { useState } from "react";
import Link from "next/link";
import ProjectDrawer from "./ProjectDrawer"; // ハンバーガークリックで出すドロワー
import NotificationsDropdown from "./NotificationsDropdown"; // 通知のドロップダウン

export default function Header() {
  // サイドドロワーの開閉状態
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // 通知ドロップダウンの開閉状態
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // 仮のプロジェクトデータ（後でAPIから取得予定）
  const projects = [
    { id: 1, name: "プロジェクトA" },
    { id: 2, name: "プロジェクトB" },
    { id: 3, name: "プロジェクトC" },
  ];

  // 仮の通知データ（後でAPIから取得予定）
  const notifications = [
    {
      id: 1,
      title: "コミットが完了しました",
      message: "機能追加: ユーザー認証の実装",
      time: "5分前",
    },
    {
      id: 2,
      title: "レビュー依頼",
      message: "田中さんからレビュー依頼があります",
      time: "30分前",
    },
    {
      id: 3,
      title: "ビルドエラー",
      message: "developブランチでビルドエラーが発生しました",
      time: "1時間前",
    },
  ];

  return (
    // ヘッダーのコンテナ
    <header className="bg-white shadow px-4 py-2 flex items-center justify-between relative">
      {/* ---------------- 左側：ハンバーガー + アプリ名 + ナビゲーション ---------------- */}
      <div className="flex items-center space-x-4">
        {/* ハンバーガーボタン（クリックでドロワーを開閉） */}
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="p-2 hover:bg-gray-100 rounded"
        >
          {/* SVGで描いた3本線のアイコン */}
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

        {/* アプリ名（テキスト） */}
        <span className="font-bold text-lg text-gray-800">DevAnalytics</span>

        {/* ナビゲーションメニュー */}
        <nav className="flex space-x-4 text-gray-700">
          <Link href="/dashboard" className="hover:text-blue-600">
            ダッシュボード
          </Link>
          <Link href="/team" className="hover:text-blue-600">
            チーム
          </Link>
          <Link href="/profile" className="hover:text-blue-600">
            プロフィール
          </Link>
        </nav>
      </div>

      {/* ---------------- 右側：通知ボタン ---------------- */}
      <div className="flex items-center space-x-4">
        {/* 通知アイコンとドロップダウンを囲むdiv（relativeで基準位置にする） */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative p-2 hover:bg-gray-100 rounded-full"
          >
            {/* ベルのSVGアイコン */}
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
            {/* 通知バッジ（未読数表示） */}
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>
          {/* 通知ドロップダウンを開いたときのみ表示 */}
          {isNotificationsOpen && (
            <NotificationsDropdown notifications={notifications} />
          )}
        </div>
      </div>

      {/* ---------------- ハンバーガードロワー ---------------- */}
      {isDrawerOpen && (
        <ProjectDrawer
          projects={projects}
          onClose={() => setIsDrawerOpen(false)} // 閉じる処理を渡す
        />
      )}
    </header>
  );
}
