import React from 'react';

const FloatingButton = () => {
    return (
        <a
            href="https://open.kakao.com/o/sbTJKB1h"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#FEE500] text-[#191919] font-bold py-4 px-6 rounded-full shadow-xl hover:bg-[#Fdd835] hover:scale-105 transition-all flex items-center gap-2 border-0 animate-bounce"
        >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 3C6.477 3 2 6.916 2 11.75c0 3.328 2.13 6.25 5.303 7.766-.24.877-.866 3.184-.897 3.33-.047.218.077.43.284.43.042 0 .083-.01.122-.03.548-.28 3.82-2.583 4.46-3.003.56.082 1.135.126 1.728.126 5.523 0 10-3.916 10-8.75S17.523 3 12 3z" />
            </svg>
            문의하기
        </a>
    );
};

export default FloatingButton;
