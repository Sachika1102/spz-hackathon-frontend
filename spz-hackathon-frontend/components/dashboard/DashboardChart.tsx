"use client";

import { useRef } from "react";
import LineChart from "@/components/ui/LineChart";
import ExportPNGButton from "@/components/ui/ExportPNGButton";

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
  // 画像化する対象のラッパ
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={boxRef}
      className="bg-white p-6 rounded-lg shadow border border-gray-200"
    >
      {/* タイトル + PNG保存ボタン */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">{title}</h2>

        {/* ボタン自身は出力に含めない */}
        <ExportPNGButton
          targetRef={boxRef as React.RefObject<HTMLElement>}
          filename={`${title}.png`}
          label="PNGで保存"
        />
      </div>

      {/* 折れ線グラフ（共通UI） */}
      <LineChart labels={labels} datasets={datasets} />
    </section>
  );
}
