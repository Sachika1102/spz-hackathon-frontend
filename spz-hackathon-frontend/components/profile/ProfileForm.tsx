import { useState, useRef, ChangeEvent } from 'react';
import { User, Edit } from 'lucide-react';

interface ProfileFormProps {
  onSave: (data: any, imageFile: File | null) => void;
  onCancel: () => void;
  initialData?: {
    name: string;
    email: string;
    department: string;
    position: string;
    location: string;
    joinDate: string;
    bio: string;
    github: string;
    linkedin: string;
  };
}

export default function ProfileForm({ onSave, onCancel, initialData }: ProfileFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '野月平 快士',
    email: initialData?.email || 'k.notsukitaira.sys23@morijyobi.ac.jp',
    department: initialData?.department || 'なし',
    position: initialData?.position || '学生',
    location: initialData?.location || '岩手県',
    joinDate: initialData?.joinDate || '2022-04-01',
    bio: initialData?.bio || 'フルスタック開発者として2年の経験があります。React、Node.js、データベース設計が得意です。',
    github: initialData?.github || 'https://github.com/notsukitaira',
    linkedin: initialData?.linkedin || 'https://linkedin.com/in/notsukitaira',
  });

  // 初期画像は指定のUnsplash画像URL
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face'
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleClickChangePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    onSave(formData, imageFile);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Edit Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">基本情報</h1>
          {/* キャンセルボタンを右上に配置 */}
          <button
            onClick={onCancel}
            className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Edit size={20} />
            キャンセル
          </button>

          <div className="flex items-start gap-6 mb-8 pt-8">
            {/* Profile Photo */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="プロフィール画像プレビュー"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={40} className="text-blue-600" />
                )}
              </div>
              <button
                type="button"
                onClick={handleClickChangePhoto}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                写真を変更
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* Basic Info Form */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">名前</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">部署</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">役職</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">所在地</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2">利用開始日</label>
                <div className="text-gray-900 py-2 px-3 rounded-lg">{formData.joinDate}</div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">自己紹介</label>
            <textarea
              value={formData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="自己紹介を入力してください..."
            />
          </div>

          {/* Social Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://github.com/username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={onCancel}
              className="px-6 py-2 text-gray-700 rounded-lg transition-colors font-medium mr-4 hover:text-black"
            >
              キャンセル
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
