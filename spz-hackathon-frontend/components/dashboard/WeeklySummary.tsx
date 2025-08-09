export default function WeeklySummary({ text }: { text: string }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <h3 className="mb-3 text-lg font-semibold">今週の総評</h3>
      <div className="rounded-xl bg-indigo-50 p-4 text-sm leading-7 shadow text-indigo-900">
        {text}
      </div>
    </section>
  );
}
