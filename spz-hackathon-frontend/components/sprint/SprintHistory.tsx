"use client";

import type { SprintRecord } from "@/types/sprint";

type Props = { items: ReadonlyArray<SprintRecord> };

export default function SprintHistory({ items }: Props) {
  if (!items.length) {
    return (
      <section className="text-center text-gray-500">
        まだスプリント記録がありません
      </section>
    );
  }

  return (
    <section className="space-y-4">
      {items.map((s) => (
        <article
          key={s.id}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <header className="mb-3 flex items-center justify-between">
            <h4 className="font-semibold text-gray-900">{s.title}</h4>
            <span className="text-sm text-gray-500">
              {formatDate(s.createdAt)}
            </span>
          </header>

          <div className="grid gap-3 sm:grid-cols-2">
            <Block title="Keep" tone="keep" text={s.keep} />
            <Block title="Problem" tone="problem" text={s.problem} />
            <Block title="Try" tone="try" text={s.try} />
            <Block title="Goal" tone="goal" text={s.goal} />
          </div>
        </article>
      ))}
    </section>
  );
}

function Block({
  title,
  text,
  tone,
}: {
  title: string;
  text: string;
  tone: "keep" | "problem" | "try" | "goal";
}) {
  const toneClasses = {
    keep: "bg-green-50 text-green-700 border-green-200",
    problem: "bg-rose-50 text-rose-700 border-rose-200",
    try: "bg-blue-50 text-blue-700 border-blue-200",
    goal: "bg-violet-50 text-violet-700 border-violet-200",
  } as const;

  return (
    <div className={`rounded-md border p-3 ${toneClasses[tone]}`}>
      <div className="mb-1 text-sm font-semibold">{title}</div>
      <p className="text-sm leading-6">{text || "（未入力）"}</p>
    </div>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;
}
