import { AIInsight } from "@/types/analysis";

const toneClass = {
  success: "bg-green-50 text-green-700",
  info: "bg-blue-50 text-blue-700",
  warning: "bg-amber-50 text-amber-700",
  note: "bg-violet-50 text-violet-700",
} as const;

export default function AIAdviceSection({ items }: { items: AIInsight[] }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <h3 className="mb-4 text-lg font-semibold">AI分析とアドバイス</h3>
      <div className="grid gap-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl border shadow border-gray-200 p-4">
            <div
              className={`mb-2 inline-block rounded-md px-2 py-0.5 text-xs font-medium ${
                toneClass[it.tone ?? "info"]
              }`}
            >
              {it.title}
            </div>
            <p className="text-sm leading-6 text-gray-700">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
