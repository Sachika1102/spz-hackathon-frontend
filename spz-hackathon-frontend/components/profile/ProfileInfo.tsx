// components/profile/ProfileInfo.tsx

interface ProfileInfoProps {
  onEdit: () => void;
}

export default function ProfileInfo({ onEdit }: ProfileInfoProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl w-[900px] h-[470px] mx-auto relative p-6">
      {/* 編集ボタン */}
      <button
        onClick={onEdit}
        className="absolute top-6 right-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="m18.5 2.5 a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z"></path>
        </svg>
        編集
      </button>

      <h2 className="font-bold text-xl mb-6">基本情報</h2>

      <div className="flex items-start gap-8">
        {/* プロフィール画像 */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
              alt="プロフィール画像"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement!.innerHTML =
                  '<div class="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">田</div>';
              }}
            />
          </div>
        </div>

        {/* 基本情報の2カラムレイアウト */}
        <div className="flex-1 grid grid-cols-2 gap-x-16 gap-y-6">
          <div>
            <p className="font-bold text-gray-600 mb-1">名前</p>
            <p>野月平 快士</p>
          </div>
          <div>
            <p className="font-bold text-gray-600 mb-1">メールアドレス</p>
            <p>k.notsukitaira.sys23@morijyobi.ac.jp</p>
          </div>
          <div>
            <p className="font-bold text-gray-600 mb-1">部署</p>
            <p>なし</p>
          </div>
          <div>
            <p className="font-bold text-gray-600 mb-1">役職</p>
            <p>学生</p>
          </div>
          <div>
            <p className="font-bold text-gray-600 mb-1">所在地</p>
            <p>岩手県</p>
          </div>
          <div>
            <p className="font-bold text-gray-600 mb-1">利用開始日</p>
            <p>2022-04-01</p>
          </div>
        </div>
      </div>

      {/* 自己紹介 */}
      <div className="mt-8">
        <p className="font-bold text-gray-600 mb-2">自己紹介</p>
        <p>
          フルスタック開発者として2年の経験があります。React、Node.js、データベース設計が得意です。
        </p>
      </div>

      {/* リンク */}
      <div className="flex gap-32 mt-6">
        <div>
          <p className="font-bold text-gray-600 mb-1">GitHub</p>
          <a
            href="https://github.com/notsukitaira"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/notsukitaira
          </a>
        </div>
        <div className="ml-16">
          <p className="font-bold text-gray-600 mb-1">LinkedIn</p>
          <a
            href="https://linkedin.com/in/notsukitaira"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://linkedin.com/in/notsukitaira
          </a>
        </div>
      </div>
    </div>
  );
}
