"use client";
import { useState } from "react";

/**
 * ピル型タブコンポーネント
 */
export default function Tabs({
  tabs,
  onChange,
  defaultTab = tabs[0].id,
}: {
  tabs: { id: string; label: string }[];
  onChange?: (id: string) => void;
  defaultTab?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleClick = (id: string) => {
    setActiveTab(id);
    onChange?.(id);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-gray-300 bg-white p-1 shadow-sm">
      {tabs.map((tab) => {
        // 文字数でパディングを変える
        const paddingX = tab.label.length <= 3 ? "px-10" : "px-5"; // 3文字以下なら広めに

        return (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`${paddingX} py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-blue-500 text-white shadow"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
