import React, { useState } from 'react';
import { Menu, X, UserPlus, Phone } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { id: 'about', label: '어린이집 소개' },
        { id: 'program', label: '우리 아이 하루' },
        { id: 'care', label: '건강과 안전' },
        { id: 'admission', label: '입소 안내' },
    ];

    const handleNavClick = (id) => {
        setCurrentPage(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* 로고 영역 */}
                    <div
                        className="flex-shrink-0 flex items-center cursor-pointer gap-3"
                        onClick={() => handleNavClick('home')}
                    >
                        {/* 로고 이미지 */}
                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                            <img src="/assets/images/logo.png" alt="개똥이네 로고" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-800 leading-none">개똥이네</span>
                            <span className="text-xs text-gray-500 font-medium mt-1">공동육아 어린이집</span>
                        </div>
                    </div>

                    {/* 데스크탑 메뉴 */}
                    <nav className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`text-base font-medium transition-colors duration-200 ${currentPage === item.id
                                    ? 'text-green-600 border-b-2 border-green-600'
                                    : 'text-gray-600 hover:text-green-500'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* 상담 버튼 (데스크탑) */}
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={() => setCurrentPage('admission')}
                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold shadow-md transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            <UserPlus size={18} />
                            입소 상담
                        </button>
                    </div>

                    {/* 모바일 햄버거 버튼 */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 모바일 드로어 메뉴 */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${currentPage === item.id
                                    ? 'bg-green-50 text-green-700'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="pt-4 border-t border-gray-100 mt-2">
                            <button
                                onClick={() => handleNavClick('admission')}
                                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold shadow-sm flex justify-center items-center gap-2"
                            >
                                <Phone size={18} />
                                상담 문의하기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
