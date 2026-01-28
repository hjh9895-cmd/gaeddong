import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

const Care = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-green-800 mb-2">건강한 먹거리</h2>
                <p className="text-gray-600">친환경 유기농 식자재를 사용하여 아이들의 건강을 책임집니다.</p>
            </div>

            {/* 식단표 카드 */}
            <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-green-600 text-white p-4 text-center font-bold">
                    2026년 1월 식단표
                </div>
                <div className="p-6">
                    {/* 데스크탑: 달력 그리드 / 모바일: 리스트 (반응형 구현을 위해 flex/grid 혼용) */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {['월', '화', '수', '목', '금'].map((day, idx) => (
                            <div key={idx} className="border border-gray-100 rounded-xl p-4 hover:border-green-300 transition">
                                <span className="block text-center font-bold text-green-700 mb-2 bg-green-50 rounded-full py-1">{day}요일</span>
                                <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center text-xs text-gray-400 overflow-hidden">
                                    <img src="/assets/images/KakaoTalk_20260124_151245704_02.jpg" className="w-full h-full object-cover" />
                                </div>
                                <ul className="text-sm text-gray-600 space-y-1 text-center">
                                    <li>현미밥</li>
                                    <li>된장국</li>
                                    <li>시금치나물</li>
                                    <li>두부조림</li>
                                    <li className="text-orange-500 font-medium text-xs mt-2 pt-2 border-t border-dashed">간식: 제철과일</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 안전 관리 */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><ShieldCheck size={24} /></div>
                        <h3 className="text-xl font-bold">안전 관리 시스템</h3>
                    </div>
                    <p className="text-gray-600 mb-4">정기적인 소독과 CCTV 운영으로 안전한 보육 환경을 조성합니다.</p>
                    <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm overflow-hidden">
                        <img src="/assets/images/KakaoTalk_20260118_171126891_11.jpg" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-red-100 text-red-600 rounded-full"><Heart size={24} /></div>
                        <h3 className="text-xl font-bold">응급 처치</h3>
                    </div>
                    <p className="text-gray-600 mb-4">전 교직원 심폐소생술 교육 이수 및 비상 약품을 상시 구비하고 있습니다.</p>
                    <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm overflow-hidden">
                        <img src="/assets/images/KakaoTalk_20260124_150959017_18.jpg" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;
