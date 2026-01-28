import React from 'react';
import { Star } from 'lucide-react';

const Admission = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-green-800">입소 상담 문의</h2>
                <p className="text-gray-600 mt-2">개똥이네의 문은 언제나 활짝 열려있습니다.</p>
            </div>

            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-sm">
                <img src="/assets/images/KakaoTalk_20260118_171255460_19.jpg" className="w-full h-full object-cover" />
            </div>

            {/* 모집 요강 Box */}
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h3 className="font-bold text-lg text-orange-800 mb-3 flex items-center gap-2">
                    <Star size={18} /> 2026학년도 원아 모집 안내
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-1">
                    <li><strong>모집 대상:</strong> 만 0세 ~ 만 5세 (각 반 00명)</li>
                    <li><strong>신청 기간:</strong> 상시 모집 (대기 신청 순)</li>
                    <li><strong>문의 전화:</strong> 02-1234-5678</li>
                </ul>
                <div className="mt-4 flex gap-3">
                    <button className="flex-1 bg-white text-orange-600 font-bold py-3 rounded-xl border border-orange-200 shadow-sm hover:bg-orange-100 transition">
                        아이사랑 포털 바로가기
                    </button>
                </div>
            </div>

            {/* 상담 폼 */}
            <form className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-200 space-y-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">보호자 성함</label>
                    <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition" placeholder="홍길동" />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">연락처</label>
                    <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition" placeholder="010-0000-0000" />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">자녀 연령</label>
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition">
                        <option>선택해주세요</option>
                        <option>만 0세</option>
                        <option>만 1세</option>
                        <option>만 2세</option>
                        <option>만 3세</option>
                        <option>만 4~5세</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">문의 내용</label>
                    <textarea rows="4" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition" placeholder="궁금하신 점을 자유롭게 남겨주세요."></textarea>
                </div>
                <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition transform active:scale-95">
                    상담 신청하기
                </button>
            </form>
        </div>
    );
};

export default Admission;
