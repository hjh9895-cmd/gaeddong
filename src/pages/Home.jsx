import React from 'react';
import { UserPlus, Utensils, Calendar, MapPin, ChevronRight, Smile, Instagram } from 'lucide-react';

const Home = ({ setCurrentPage }) => {
    return (
        <div className="space-y-12 pb-12">
            {/* Hero Section - Trendy Bento Grid */}
            <section className="max-w-7xl mx-auto px-4 pt-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

                    {/* 1. Main Text Block (Large) */}
                    <div className="col-span-1 md:col-span-6 md:row-span-2 bg-green-50 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-200 rounded-full blur-3xl -ml-12 -mb-12 opacity-50 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 bg-white rounded-full text-green-700 font-bold text-sm mb-6 shadow-sm border border-green-100">
                                🌱 2026학년도 원아 모집 중
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                                자연과 함께 <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                                    숨쉬는 아이들
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                                흙을 만지고, 바람을 느끼며, 스스로 자라나는 힘을 기릅니다.
                                개똥이네는 아이들의 웃음소리가 끊이지 않는 공동육아 터전입니다.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 relative z-10 mt-8">
                            <button
                                onClick={() => setCurrentPage('admission')}
                                className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                            >
                                입소 상담하기 <ChevronRight size={18} />
                            </button>
                            <button
                                onClick={() => setCurrentPage('about')}
                                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center gap-2"
                            >
                                둘러보기
                            </button>
                        </div>
                    </div>

                    {/* 2. Visual Media Block (Video/Image Placeholder) */}
                    <div className="col-span-1 md:col-span-6 md:row-span-1 bg-gray-200 rounded-3xl overflow-hidden relative group">
                        <img
                            src="/assets/images/hero.png"
                            alt="Happy Children"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                            <p className="text-white font-bold text-xl">매일 숲으로 가는 어린이집</p>
                        </div>
                        <button className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* 3. Stat/Info Block 1: Meal */}
                    <div
                        onClick={() => setCurrentPage('care')}
                        className="col-span-1 md:col-span-3 md:row-span-1 bg-orange-50 rounded-3xl p-6 flex flex-col justify-between cursor-pointer hover:bg-orange-100 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm mb-4 group-hover:rotate-12 transition-transform">
                            <Utensils size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">오늘의 식단</h3>
                            <p className="text-sm text-gray-500 mt-1">유기농 먹거리 확인하기</p>
                        </div>
                        <div className="mt-auto flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-orange-200 flex items-center justify-center text-orange-400">
                                <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* 4. Stat/Info Block 2: Daily Life */}
                    <div
                        onClick={() => setCurrentPage('program')}
                        className="col-span-1 md:col-span-3 md:row-span-1 bg-blue-50 rounded-3xl p-6 flex flex-col justify-between cursor-pointer hover:bg-blue-100 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm mb-4 group-hover:-rotate-12 transition-transform">
                            <Smile size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">하루 일과</h3>
                            <p className="text-sm text-gray-500 mt-1">놀이가 배움이 되는 곳</p>
                        </div>
                        <div className="mt-auto flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center text-blue-400">
                                <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Quick Menu */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: <UserPlus className="text-blue-500" />, label: "입소안내", bg: "bg-blue-50", action: 'admission' },
                        { icon: <Utensils className="text-orange-500" />, label: "오늘의 식단", bg: "bg-orange-50", action: 'care' },
                        { icon: <Calendar className="text-green-500" />, label: "월간 일정", bg: "bg-green-50", action: 'program' },
                        { icon: <MapPin className="text-purple-500" />, label: "오시는 길", bg: "bg-purple-50", action: 'about' },
                    ].map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(item.action)}
                            className={`${item.bg} p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-transform transform hover:-translate-y-1`}
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                {item.icon}
                            </div>
                            <span className="font-bold text-gray-700">{item.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Notice Section */}
            <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 공지사항 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">새소식</h2>
                        <button className="text-sm text-gray-500 hover:text-green-600 flex items-center">더보기 <ChevronRight size={14} /></button>
                    </div>
                    <ul className="space-y-4">
                        {[1, 2, 3].map((num) => (
                            <li key={num} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                                <span className="block text-gray-800 font-medium truncate">2026년도 신입 원아 모집 안내드립니다.</span>
                                <span className="text-xs text-gray-400">2026.01.23</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Instagram Feed */}
                <a
                    href="https://www.instagram.com/gaeddong.coop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                    {/* Instagram gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                    <div className="flex justify-between items-end mb-6 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                                <Instagram className="text-white" size={20} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Instagram</h2>
                                <p className="text-xs text-gray-500">@gaeddong.coop</p>
                            </div>
                        </div>
                        <button className="text-sm text-gray-500 group-hover:text-pink-600 flex items-center gap-1 transition-colors">
                            팔로우 <ChevronRight size={14} />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 relative z-10">
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                            <img src="/assets/images/KakaoTalk_20260115_145310694.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Instagram post" />
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                            <img src="/assets/images/KakaoTalk_20260115_145310694_08.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Instagram post" />
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                            <img src="/assets/images/KakaoTalk_20260115_145310694_19.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Instagram post" />
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                            <img src="/assets/images/KakaoTalk_20260118_171126891_06.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Instagram post" />
                        </div>
                    </div>
                </a>
            </section>
        </div>
    );
};

export default Home;
