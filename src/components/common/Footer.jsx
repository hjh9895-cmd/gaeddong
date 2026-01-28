import React from 'react';
import { Smile, MapPin, Phone } from 'lucide-react';

const Footer = ({ setCurrentPage }) => (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
                <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                    <Smile className="text-yellow-400" /> 개똥이네 어린이집
                </h3>
                <p className="mb-2">아이들이 흙을 만지며 행복하게 자라는 터전입니다.</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-3">Contact Info</h4>
                <p className="flex items-center gap-2 mb-2"><MapPin size={16} /> 경기도 의왕시 옥박골동길 20</p>
                <p className="flex items-center gap-2 mb-2"><Phone size={16} /> 031-424-0000</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-3">Quick Links</h4>
                <ul className="space-y-1">
                    <li><button onClick={() => setCurrentPage('admission')} className="hover:text-white">입소대기신청</button></li>
                    <li><button onClick={() => setCurrentPage('care')} className="hover:text-white">이달의 식단표</button></li>
                    <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
            &copy; 2026 Gaeddong-i-ne Daycare Center. All rights reserved.
        </div>
    </footer>
);

export default Footer;
