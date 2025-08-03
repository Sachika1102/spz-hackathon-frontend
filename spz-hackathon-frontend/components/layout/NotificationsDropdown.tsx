"use client"; // クライアントコンポーネントとして動作（クリック操作などで必要）

// 通知1件分の型定義
interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
}

// 通知リストを受け取って表示するドロップダウン
export default function NotificationsDropdown({
  notifications,
}: {
  notifications: Notification[];
}) {
  return (
    // ドロップダウン全体のコンテナ
    <div
      className="
        absolute right-0 mt-2 w-80 
        bg-white shadow-lg rounded-lg 
        border border-gray-200 z-50
      "
    >
      {/* ヘッダー部分（タイトル） */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700">通知</h3>
      </div>

      {/* 通知リスト（縦スクロール可能） */}
      <ul className="max-h-80 overflow-y-auto">
        {notifications.map((n) => (
          <li
            key={n.id}
            className="px-4 py-3 hover:bg-gray-50 border-b last:border-none"
          >
            {/* 通知タイトル */}
            <p className="text-sm font-medium text-gray-800">{n.title}</p>
            {/* 通知メッセージ（補足説明） */}
            <p className="text-xs text-gray-500">{n.message}</p>
            {/* 通知時間 */}
            <span className="text-xs text-gray-400">{n.time}</span>
          </li>
        ))}
      </ul>

      {/* フッター部分（全件リンク） */}
      <div className="p-3 text-center">
        <button className="text-blue-600 text-sm hover:underline">
          すべての通知を見る
        </button>
      </div>
    </div>
  );
}
