export default function ProgressBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      {/* ラベル：固定幅にして右寄せ */}
      <span className="w-24 text-sm text-gray-700 text-right">{label}</span>

      {/* バー部分：flex-1で残り幅いっぱいに伸ばす */}
      <div className="flex-1 bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${color}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>

      {/* 数値（%） */}
      <span className="w-10 text-sm text-gray-700 text-right">{value}%</span>
    </div>
  );
}
