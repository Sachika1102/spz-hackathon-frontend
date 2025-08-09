type Props = {
  title: string;
  value: string | number;
  delta?: number; // %変化。マイナスは自動で赤
};

export default function StatsCard({ title, value, delta }: Props) {
  const isPositive = typeof delta === "number" ? delta >= 0 : null;

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <div className="text-sm text-gray-500">{title}</div>

      <div className="mt-2 flex items-end justify-between">
        <div className="text-3xl font-semibold">{value}</div>
        {typeof delta === "number" && (
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              isPositive
                ? "bg-green-50 text-green-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {isPositive ? "+" : ""}
            {delta}%
          </span>
        )}
      </div>
    </div>
  );
}
