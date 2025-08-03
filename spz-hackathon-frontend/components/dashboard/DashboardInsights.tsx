"use client";

/**
 * ダッシュボード右側の作業傾向＆スキル評価
 * @param title パネルのタイトル
 * @param workDistribution 作業分布データ
 * @param skillRatings スキル評価データ
 */
export default function DashboardInsights({
  title,
  workDistribution,
  skillRatings,
}: {
  title: string;
  workDistribution: { label: string; value: number; color: string }[];
  skillRatings: { label: string; value: number; color: string }[];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      {/* パネルタイトル */}
      <h2 className="text-lg font-bold mb-4">{title}</h2>

      {/* 作業分布 */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">作業分布</h3>
        {workDistribution.map((item, idx) => (
          <div key={idx} className="flex items-center mb-2">
            <span className="w-24 text-sm">{item.label}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: `${item.value}%` }}
              />
            </div>
            <span className="w-12 text-right text-sm">{item.value}%</span>
          </div>
        ))}
      </div>

      {/* スキル評価 */}
      <div>
        <h3 className="font-semibold mb-2">スキル評価</h3>
        {skillRatings.map((item, idx) => (
          <div key={idx} className="flex items-center mb-2">
            <span className="w-24 text-sm">{item.label}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: `${item.value}%` }}
              />
            </div>
            <span className="w-12 text-right text-sm">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
