// app/dashboard/page.tsx
import PageHeader from "@/components/layout/PageHeader";

export default function DashboardPage() {
  return (
    <>
      {/* ページごとのタイトル・サブタイトルを渡す */}
      <PageHeader
        title="ダッシュボード"
        subtitle="あなたの開発活動とチーム貢献を分析しています"
      />

      {/* ページの中身 */}
      <div>
        <p>ここにダッシュボードの内容を表示します。</p>
      </div>
    </>
  );
}
