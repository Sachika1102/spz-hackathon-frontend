"use client";
import { useState } from "react";
import { Trash2, X } from "lucide-react";

type Skill = {
  id: number;
  name: string;
  level: string;
  color: string;
  percent: number;
};

type SkillCategory = {
  id: number;
  category: string;
  skills: Skill[];
};

export default function SkillList() {
  // 初期カテゴリー＆スキルを豊富に設定
  const [categories, setCategories] = useState<SkillCategory[]>([
    {
      id: 1,
      category: "プログラミング",
      skills: [
        { id: 1, name: "JavaScript", level: "上級", color: "bg-green-500", percent: 90 },
        { id: 2, name: "Python", level: "中級", color: "bg-yellow-500", percent: 70 },
        { id: 3, name: "TypeScript", level: "中級", color: "bg-yellow-500", percent: 75 },
      ],
    },
    {
      id: 2,
      category: "フロントエンド",
      skills: [
        { id: 4, name: "React", level: "上級", color: "bg-green-500", percent: 85 },
      ],
    },
    {
      id: 3,
      category: "バックエンド",
      skills: [
        { id: 5, name: "Node.js", level: "上級", color: "bg-green-500", percent: 80 },
      ],
    },
    {
      id: 4,
      category: "データベース",
      skills: [
        { id: 6, name: "PostgreSQL", level: "中級", color: "bg-yellow-500", percent: 65 },
      ],
    },
    {
      id: 5,
      category: "インフラ",
      skills: [
        { id: 7, name: "Docker", level: "中級", color: "bg-yellow-500", percent: 60 },
      ],
    },
    {
      id: 6,
      category: "クラウド",
      skills: [
        { id: 8, name: "AWS", level: "初級", color: "bg-red-500", percent: 70 },
      ],
    },
  ]);

  // モーダル表示管理
  const [showModal, setShowModal] = useState(false);
  // 新規スキル入力値管理
  const [newSkill, setNewSkill] = useState({
    name: "",
    category: "プログラミング",
    percent: 50,
  });

  // スキル削除処理
  const handleDelete = (categoryId: number, skillId: number) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, skills: cat.skills.filter((s) => s.id !== skillId) }
          : cat
      )
    );
  };

  // 新規スキル追加処理
  const handleAddSkill = () => {
    if (!newSkill.name.trim()) {
      alert("スキル名を入力してください");
      return;
    }

    setCategories((prev) =>
      prev.map((cat) =>
        cat.category === newSkill.category
          ? {
              ...cat,
              skills: [
                ...cat.skills,
                {
                  id: Date.now(),
                  name: newSkill.name.trim(),
                  level:
                    newSkill.percent >= 80
                      ? "上級"
                      : newSkill.percent >= 50
                      ? "中級"
                      : "初級",
                  color:
                    newSkill.percent >= 80
                      ? "bg-green-500"
                      : newSkill.percent >= 50
                      ? "bg-yellow-500"
                      : "bg-red-500",
                  percent: newSkill.percent,
                },
              ],
            }
          : cat
      )
    );
    // 入力フォームリセット＆モーダル閉じる
    setNewSkill({ name: "", category: "プログラミング", percent: 50 });
    setShowModal(false);
  };

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50">
      {/* ヘッダーと追加ボタン */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">スキル一覧</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          ＋ スキルを追加
        </button>
      </div>

      {/* カテゴリーごとのスキル表示 */}
      {categories.map((category) => (
        <div key={category.id} className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold mb-4">{category.category}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-gray-50 rounded-xl p-4 flex flex-col space-y-2 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-white text-xs px-2 py-1 rounded-full ${
                        skill.level === "上級"
                          ? "bg-green-500"
                          : skill.level === "中級"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {skill.level}
                    </span>
                    <button onClick={() => handleDelete(category.id, skill.id)}>
                      <Trash2 size={16} className="text-red-500 hover:text-red-700" />
                    </button>
                  </div>
                </div>

                {/* プログレスバー */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${skill.color} h-2 rounded-full`}
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>

                <div className="text-sm text-gray-500 text-right">
                  {skill.percent}%
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* スキル追加モーダル */}
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
            <h2 className="text-lg font-semibold mb-4">新しいスキルを追加</h2>

            <label className="block mb-2 text-sm">スキル名</label>
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              placeholder="例: React"
              className="w-full border rounded-lg px-3 py-2 mb-4"
            />

            <label className="block mb-2 text-sm">カテゴリ</label>
            <select
              value={newSkill.category}
              onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 mb-4"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>

            <label className="block mb-2 text-sm">レベル: {newSkill.percent}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={newSkill.percent}
              onChange={(e) =>
                setNewSkill({ ...newSkill, percent: Number(e.target.value) })
              }
              className="w-full mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg text-gray-500 hover:text-black"
              >
                キャンセル
              </button>
              <button
                onClick={handleAddSkill}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white  hover:bg-blue-600"
              >
                追加
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
