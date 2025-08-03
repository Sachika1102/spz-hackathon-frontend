import "./globals.css";
import Header from "@/components/layout/Header"; // ここでヘッダーをインポート

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50">
        <Header /> {/* 全ページ共通のヘッダー */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
