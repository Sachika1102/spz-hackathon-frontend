"use client";

type Project = {
  id: number;
  name: string;
};

export default function ProjectDrawer({
  projects,
  onClose,
}: {
  projects: Project[];
  onClose: () => void;
}) {
  return (
    // 画面左側に固定表示されるドロワー
    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 z-50">
      {/* 閉じるボタン */}
      <button
        onClick={onClose}
        className="mb-4 text-gray-500 hover:text-gray-800"
      >
        ✕ 閉じる
      </button>

      {/* タイトル */}
      <h2 className="text-lg font-bold mb-4">プロジェクト一覧</h2>

      {/* プロジェクトリスト */}
      <ul className="space-y-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            {project.name}
          </li>
        ))}
      </ul>

      {/* Show more ボタン（プロジェクトが多い時に拡張用） */}
      <button className="mt-4 text-blue-600 hover:underline text-sm">
        Show more
      </button>
    </div>
  );
}
