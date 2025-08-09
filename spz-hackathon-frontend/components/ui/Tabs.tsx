"use client";
import { useState } from "react";

/**
 * ピル型タブコンポーネント（制御/非制御どちらも対応）
 */
type TabItem = { id: string; label: string };

type TabsProps = {
  tabs: TabItem[];
  /** 制御モード: 選択中のタブID（省略時は非制御モード） */
  value?: string;
  /** 非制御モードの初期タブID（デフォルトは先頭） */
  defaultTab?: string;
  onChange?: (id: string) => void;
  className?: string;
};

export default function Tabs({
  tabs,
  value,
  defaultTab = tabs[0]?.id ?? "",
  onChange,
  className,
}: TabsProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultTab);
  const active = isControlled ? (value as string) : internal;

  const handleClick = (id: string) => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={`inline-flex items-center rounded-full border border-gray-300 bg-white p-1 shadow-sm ${
        className ?? ""
      }`}
    >
      {tabs.map((tab, i) => {
        const selected = active === tab.id;
        // 文字数でパディングを変える（従来仕様踏襲）
        const paddingX = tab.label.length <= 3 ? "px-10" : "px-5";
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            onClick={() => handleClick(tab.id)}
            className={`${paddingX} py-2 rounded-full text-sm font-medium transition-colors focus:outline-none  ${
              selected
                ? "bg-blue-500 text-white shadow"
                : "text-gray-700 hover:bg-gray-100"
            } ${i > 0 ? "ml-1" : ""}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
