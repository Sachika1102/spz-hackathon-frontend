import React from "react";
import { data } from "../../lib/sampleData";

const colorScale = [
  "bg-gray-100",
  "bg-green-100",
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
];

export default function ActivityHeatmap() {
  return (
    <>
    <h1 className="font-bold text-[20px] ml-[135px]">月別活動</h1>
    <div className="p-4 bg-white rounded-xl shadow overflow-hidden w-full max-w-[840px] mx-auto">
      <div className="flex gap-1">
        {Array.from({ length: 12 }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-1 space-x-11 ml-[2px]">
            {Array.from({ length: 31 }).map((_, rowIndex) => {
              const dayIndex = colIndex * 31 + rowIndex;
              const value = data[dayIndex] ?? 0;
              return (
                <div
                  key={rowIndex}
                  className={`w-4 h-4 rounded-sm ${colorScale[value]}`}
                  title={`Day ${dayIndex + 1}: ${value}回`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex">
        <p className="text-gray-600 text-sm mt-2">過去1年間の活動</p>
        <div className="flex mt-2">
            <p className="text-gray-600 text-sm ml-[560px] mr-1">少ない</p>
            <div className="flex gap-1">
                {colorScale.map((color) => (
                <div
                    key={color}
                    className={`w-[10px] h-[10px] rounded-xs flex items-center justify-center text-xs font-medium mt-2 ${color}`}
                >
                </div>
                ))}
            </div>

            <p className="text-gray-600 text-sm ml-1">多い</p>
        </div>
      </div>
    </div>
    </>
  );
}