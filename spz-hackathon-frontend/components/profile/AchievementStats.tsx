import React from 'react';
import { GitCommit, Eye, Settings, Calendar } from 'lucide-react';

export default function StatsCards() {
  const stats = [
    {
      icon: GitCommit,
      label: '総コミット数',
      value: '1,234',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Eye,
      label: '総レビュー数',
      value: '89',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Settings,
      label: '修正バグ数',
      value: '45',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Calendar,
      label: '開発期間',
      value: '2年',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <>
    <h1 className='font-bold text-[20px] ml-[135px]'>実績統計</h1>
    <div className="flex gap-4 p-4 bg-gray-50 justify-center">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 min-w-[200px] h-[100px] hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center gap-4 mt-2 ml-5">
              {/* アイコン */}
              <div className={`w-10 h-10 rounded-md ${stat.bgColor} flex items-center justify-center`}>
                <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
              </div>

              {/* テキスト部分 */}
              <div className="flex-1">
                <div className="text-gray-600 text-xs font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {stat.value}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}