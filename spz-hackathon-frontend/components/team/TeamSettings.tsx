// チーム設定（通知・権限管理など）
"use client";

import { useState } from "react";

export default function TeamSettings() {
    const [teamName, setTeamName] = useState("開発チーム");
    const [teamDescription, setTeamDescription] = useState("新しいプロダクトの開発を行うチームです");

    // 通知スイッチの状態（4種類）
    const [emailNotification, setEmailNotification] = useState(true);
    const [pushNotification, setPushNotification] = useState(false);
    const [commitNotification, setCommitNotification] = useState(true);
    const [reviewNotification, setReviewNotification] = useState(false);

    // スイッチUIを関数化
    const NotificationToggle = ({ isOn, setIsOn }: { isOn: boolean; setIsOn: (v: boolean) => void }) => (
        <button
            onClick={() => setIsOn(!isOn)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                isOn ? "bg-blue-500" : "bg-gray-100"
            }`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    isOn ? "translate-x-6" : "translate-x-0"
                }`}
            />
        </button>
    );

    return (
        <div>
            <h2 className="font-bold text-lg mt-[50px]">チーム設定</h2>
            <div className="flex">
                {/* 左側：基本情報 */}
                <div className="w-[600px] h-[250px] border border-gray-200 p-4 rounded-lg bg-white">
                    <h2 className="font-bold text-xl">基本情報</h2>

                    {/* チーム名入力 */}
                    <div className="mb-4">
                        <p className="mb-1 mt-5">チーム名</p>
                        <input
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            className="border border-gray-300 rounded-lg w-[500px] p-2"
                        />
                    </div>

                    {/* チーム説明入力 */}
                    <div>
                        <p className="mb-1">チーム説明</p>
                        <input
                            type="text"
                            value={teamDescription}
                            onChange={(e) => setTeamDescription(e.target.value)}
                            className="border border-gray-300 rounded-lg w-[500px] p-2"
                        />
                    </div>
                </div>

                {/* 右側：通知設定 */}
                <div className="w-[600px] h-[250px] border border-gray-200 p-4 rounded-lg bg-white ml-[10px]">
                    <h2 className="font-bold text-xl">通知設定</h2>

                    {/* メール通知 */}
                    <div className="mt-2 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold">メール通知</p>
                            <p className="text-sm text-gray-500">重要な更新をメールで受信</p>
                        </div>
                        <NotificationToggle isOn={emailNotification} setIsOn={setEmailNotification} />
                    </div>

                    {/* プッシュ通知 */}
                    <div className="mt-2 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold">プッシュ通知</p>
                            <p className="text-sm text-gray-500">ブラウザでリアルタイム通知</p>
                        </div>
                        <NotificationToggle isOn={pushNotification} setIsOn={setPushNotification} />
                    </div>

                    {/* コミット通知 */}
                    <div className="mt-2 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold">コミット通知</p>
                            <p className="text-sm text-gray-500">新しいコミットを通知</p>
                        </div>
                        <NotificationToggle isOn={commitNotification} setIsOn={setCommitNotification} />
                    </div>

                    {/* レビュー通知 */}
                    <div className="mt-2 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold">レビュー通知</p>
                            <p className="text-sm text-gray-500">コードレビューの更新を通知</p>
                        </div>
                        <NotificationToggle isOn={reviewNotification} setIsOn={setReviewNotification} />
                    </div>
                </div>
            </div>
            {/* チーム統計 */}
            <div className="w-[1105px] bg-white border border-gray-200 rounded-lg h-[150px] mt-5">
                <h2 className="font-bold text-xl mt-6 ml-6">チーム統計</h2>
                <div className="flex justify-around">
                    <div>
                        <p className="text-blue-500 font-bold text-[30px] text-center">4</p>
                        <p className="text-gray-500">アクティブメンバー</p>
                    </div>
                    <div>
                        <p className="text-green-700 font-bold text-[30px] text-center">3</p>
                        <p className="text-gray-500">進行中プロジェクト</p>
                    </div>
                    <div>
                        <p className="text-violet-600 font-bold text-[30px] text-center">156</p>
                        <p className="text-gray-500">今月のコミット数</p>
                    </div>
                </div>
            </div>

            {/* 危険な操作 */}
            <div className="w-[1105px] bg-white border border-gray-200 rounded-lg h-[250px] mt-5">
                <h2 className="font-bold text-xl mt-6 ml-6">危険な操作</h2>
                <div className="bg-red-100 border border-red-400 h-[130px] rounded-xl w-[1000px] ml-7 mt-5">
                    <p className="text-red-900 font-bold mt-4 ml-4">チームを削除</p>
                    <p className="text-[13px] text-red-700 ml-4 mt-3">
                        この操作は取り消すことができません。すべてのデータが永久に削除されます。
                    </p>
                    <button className="bg-red-500 text-white rounded-lg w-[100px] h-[35px] mt-3 ml-4">
                        チームを削除
                    </button>
                </div>
            </div>
            <button className="bg-blue-500 text-white rounded-lg w-[100px] h-[35px] mt-3 ml-[1005px]">
                設定を保存
            </button>
        </div>
    );
}
