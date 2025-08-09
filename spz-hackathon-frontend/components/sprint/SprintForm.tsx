"use client";

import { useState } from "react";
import type { SprintKpt } from "@/types/sprint";

type Props = {
  onSave: (data: SprintKpt) => void;
};

export default function SprintForm({ onSave }: Props) {
  const [keep, setKeep] = useState("");
  const [problem, setProblem] = useState("");
  const [tryText, setTryText] = useState("");
  const [goal, setGoal] = useState("");

  const canSave =
    keep.trim() || problem.trim() || tryText.trim() || goal.trim();

  const handleSave = () => {
    onSave({
      keep: keep.trim(),
      problem: problem.trim(),
      try: tryText.trim(),
      goal: goal.trim(),
    });
    // 送信後クリア
    setKeep("");
    setProblem("");
    setTryText("");
    setGoal("");
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <h3 className="mb-4 text-lg font-semibold">新しいスプリント記録</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Keep（続けること）
          </label>
          <textarea
            value={keep}
            onChange={(e) => setKeep(e.target.value)}
            placeholder="今スプリントで良かったことや続けたいことを記録してください"
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Problem（問題点）
          </label>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="今スプリントで発生した問題や課題を記録してください"
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Try（挑戦すること）
          </label>
          <textarea
            value={tryText}
            onChange={(e) => setTryText(e.target.value)}
            placeholder="次スプリントで試したいことや改善案を記録してください"
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Goal（目標）
          </label>
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="次スプリントで達成したい具体的な目標を記録してください"
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={!canSave}
            className={`px-5 py-2 rounded-md text-white font-medium ${
              canSave
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            記録を保存
          </button>
        </div>
      </div>
    </section>
  );
}
