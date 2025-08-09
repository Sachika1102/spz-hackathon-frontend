type Props = {
  title: string;
  value: string | number;
  delta?: number | null; // 差分。nullの場合は -- を表示
  deltaUnit?: string;
};

export default function StatsCard({ title, value, delta, deltaUnit }: Props) {
  const renderDelta = () => {
    if (delta === null) {
      return <span className="text-xs font-medium text-gray-500">--</span>;
    }

    if (typeof delta === "number") {
      const isPositive = delta >= 0;
      return (
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            isPositive
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {isPositive ? "+" : ""}
          {delta} {deltaUnit}
        </span>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-3xl font-semibold">{value}</div>
        {renderDelta()}
      </div>
    </div>
  );
}