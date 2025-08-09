"use client";

export type NotificationItem = {
  id: number;
  title: string;
  message: string;
  time: string;
};

export function useNotifications(): NotificationItem[] {
  return [
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
}
