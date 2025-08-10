import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    desc: "",
    priority: "中"
  });

  const projects = [
    {
      title: "spz-hackathon-frontend",
      desc: "githubを使った分析アプリのフロントエンド",
      status: "進行中",
      statusColor: "bg-blue-100 text-blue-600",
      priority: "高",
      priorityColor: "bg-red-100 text-red-500",
      progress: 75,
      tasks: "12/16",
      deadline: "2025-08-10",
      members: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      ],
    },
    {
      title: "spz-hackathon-backend",
      desc: "githubを使った分析アプリのバックエンド",
      status: "計画中",
      statusColor: "bg-yellow-100 text-yellow-600",
      priority: "中",
      priorityColor: "bg-yellow-100 text-yellow-500",
      progress: 40,
      tasks: "3/12",
      deadline: "2025-08-10",
      members: [
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=60&h=60&fit=crop&crop=face",
      ],
    },
    {
      title: "cook-manegement",
      desc: "料理のレシピと材料を管理するアプリ",
      status: "完了",
      statusColor: "bg-green-100 text-green-600",
      priority: "低",
      priorityColor: "bg-green-100 text-green-500",
      progress: 100,
      tasks: "8/8",
      deadline: "2024-04-30",
      members: [
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=60&h=60&fit=crop&crop=face",
      ],
    },
  ];

  const handleCreateProject = () => {
    // ここで新しいプロジェクトを作成する処理を実装
    console.log("新しいプロジェクト:", newProject);
    setIsModalOpen(false);
    setNewProject({ title: "", desc: "", priority: "中" });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNewProject({ title: "", desc: "", priority: "中" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* ヘッダー */}
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-2xl font-bold">プロジェクト一覧</h1>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {projects.length}件
        </span>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          ＋ 新しいプロジェクト
        </button>
      </div>

      {/* カードレイアウト */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <span className={`px-2 py-1 rounded text-xs font-bold ${p.statusColor}`}>
                  {p.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-3">{p.desc}</p>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-0.5 rounded-2xl text-xs ml-[460px] font-bold ${p.priorityColor}`}>
                  {p.priority}
                </span>
              </div>
              {/* 進捗バー */}
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>進捗</span>
                  <span>{p.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-1">
                タスク: {p.tasks}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                期限: {p.deadline}
              </div>
              {/* メンバー画像 */}
              <div className="flex -space-x-2 mt-2">
                {p.members.map((m, idx) => (
                  <img
                    key={idx}
                    src={m}
                    alt="member"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
            {/* 詳細＋編集ボタン */}
            <div className="flex gap-2 mt-4">
              <button className="bg-blue-50 text-blue-600 flex-1 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                詳細を見る
              </button>
              <button className="bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
               </button>           
            </div>
          </div>
        ))}
      </div>

      {/* モーダル */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-[rgba(105,105,105,0.7)] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            {/* モーダルヘッダー */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">新しいプロジェクト</h2>
              <button 
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* フォーム */}
            <div className="space-y-4">
              {/* プロジェクト名 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  プロジェクト名
                </label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="プロジェクト名を入力"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 説明 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  説明
                </label>
                <textarea
                  value={newProject.desc}
                  onChange={(e) => setNewProject({...newProject, desc: e.target.value})}
                  placeholder="プロジェクトの説明を入力"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 優先度 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  優先度
                </label>
                <select
                  value={newProject.priority}
                  onChange={(e) => setNewProject({...newProject, priority: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="低">低</option>
                  <option value="中">中</option>
                  <option value="高">高</option>
                </select>
              </div>
            </div>

            {/* ボタン */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCancel}
                className="flex-1 rounded-lg transition-colors text-black hover:text-gray-500 w-[100px] ml-[240px]"
              >
                キャンセル
              </button>
              <button
                onClick={handleCreateProject}
                className=" bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-[80px] h-[40px]"
              >
                作成
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}