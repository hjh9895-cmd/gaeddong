import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingButton from './components/FloatingButton';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Care from './pages/Care';
import Admission from './pages/Admission';

/**
 * 개똥이네 어린이집 공식 홈페이지
 * * [설계 주안점]
 * 1. 반응형 레이아웃 (Mobile First & Desktop Adaptive)
 * 2. 로고의 다채로운 색감을 UI 포인트 컬러로 활용 (Yellow, Green, Warm Gray)
 */

const App = () => {
  // 상태 관리: 현재 페이지
  const [currentPage, setCurrentPage] = useState('home');

  // 스크롤 시 상단이동을 위한 Effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'program' && <Program />}
        {currentPage === 'care' && <Care />}
        {currentPage === 'admission' && <Admission />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      <FloatingButton />
    </div>
  );
};

export default App;
