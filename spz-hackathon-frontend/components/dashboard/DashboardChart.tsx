"use client";

import LineChart from "@/components/ui/LineChart";

/**
 * ダッシュボード左側の折れ線グラフ
 * @param title グラフのタイトル
 * @param labels X軸のラベル
 * @param datasets グラフのデータセット
 */
export default function DashboardChart({
  title,
  labels,
  datasets,
}: {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      {/* グラフのタイトル */}
      <h2 className="text-lg font-bold mb-4">{title}</h2>

      {/* 折れ線グラフ（共通UI） */}
      <LineChart labels={labels} datasets={datasets} />
    </div>
  );
}
