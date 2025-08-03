// app/layout.tsx
import "./globals.css";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/layout/PageHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50">
        {/* 共通ヘッダー */}
        <Header />

        <main className="px-20 py-8">
          {/* ここにページごとのタイトルが入る */}
          {/* ページでtitle/subtitleを指定する場合、children側から渡す */}
          {children}
        </main>
      </body>
    </html>
  );
}
