import React from 'react';
import { Smile } from 'lucide-react';

const Program = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-green-800">우리 아이 하루</h2>
                <p className="text-gray-600 mt-2">아이들의 리듬에 맞춘 편안하고 즐거운 일과입니다.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-yellow-100">
                    <h3 className="text-xl font-bold text-yellow-600 mb-6 flex items-center gap-2">
                        <Smile size={24} /> 하루 일과표
                    </h3>
                    <ul className="space-y-0 relative border-l-2 border-yellow-200 ml-3 pl-6">
                        {[
                            { time: '09:00', act: '등원 및 자유놀이' },
                            { time: '10:00', act: '오전 간식 및 나들이 준비' },
                            { time: '10:30', act: '바깥 놀이 (숲 체험, 산책)' },
                            { time: '12:00', act: '점심 식사 및 양치하기' },
                            { time: '13:00', act: '낮잠 및 휴식' },
                            { time: '15:00', act: '오후 간식 및 정리정돈' },
                            { time: '16:00', act: '특별활동 및 하원' },
                        ].map((item, idx) => (
                            <li key={idx} className="mb-8 last:mb-0 relative">
                                <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-yellow-400 border-2 border-white shadow-sm top-1"></div>
                                <span className="text-green-700 font-bold block mb-1">{item.time}</span>
                                <span className="text-gray-700">{item.act}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-3xl h-full">
                        <h3 className="text-xl font-bold text-green-800 mb-4">특별 활동</h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4">
                                <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                                    <img src="/assets/images/KakaoTalk_20260116_134251164_04.jpg" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold">매주 숲 체험</h4>
                                    <p className="text-sm text-gray-600 mt-1">인근 숲에서 자연물을 관찰하고 놉니다.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4">
                                <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                                    <img src="/assets/images/KakaoTalk_20260116_152234850_07.jpg" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold">텃밭 가꾸기</h4>
                                    <p className="text-sm text-gray-600 mt-1">직접 기른 채소를 수확하여 요리합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;
