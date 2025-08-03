// app/page.tsx
import PageHeader from "@/components/layout/PageHeader";

export default function Home() {
  return (
    <div>
      {/* ページタイトルとサブタイトル */}
      <PageHeader
        title="テストページ"
        subtitle="ここはTailwindとコンポーネント確認用のページです"
      />

      {/* ページごとの中身はここに追加 */}
      <div className="space-y-4">
        <p className="text-gray-700">
          ここに各ページの内容を書いていきます。レイアウトの共通部分は既に整っています。
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          サンプルボタン
        </button>
      </div>
    </div>
  );
}
