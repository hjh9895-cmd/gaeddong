import React from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-green-800">원장님 인사말</h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                <div className="flex flex-col md:flex-row gap-8 items-center mt-8 text-left bg-green-50 p-8 rounded-3xl">
                    <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center text-gray-500 font-bold overflow-hidden border-4 border-yellow-200 shadow-lg">
                        <img src="/assets/images/KakaoTalk_20260124_150936337.jpg" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-800">"아이들의 웃음소리가 가장 큰 배움입니다"</h3>
                        <p className="text-gray-600 leading-relaxed">
                            안녕하세요. 개똥이네 어린이집 원장입니다. <br />
                            우리 아이들이 경쟁보다는 협동을, 지식보다는 지혜를 배우며 자라나길 바랍니다.
                            자연 속에서 흙냄새를 맡으며 건강하게 자라는 아이들의 모습을 지켜봐주세요.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center text-green-800">선생님 소개</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: '겨울', role: '만 4세반', img: "/assets/images/KakaoTalk_20260124_150936337_19_(1).jpg" },
                        { name: '미나리', role: '맛단지', img: "/assets/images/KakaoTalk_20260124_150959017_13.jpg" },
                        { name: '무지개', role: '만 7세반', img: "/assets/images/KakaoTalk_20260124_150936337_22_(1).jpg" },
                        { name: '꼼지', role: '만 3세반', img: "/assets/images/KakaoTalk_20260124_150936337_01_(1).jpg" },
                        { name: '나리', role: '보조교사', img: "/assets/images/KakaoTalk_20260115_145310694_19.jpg" },
                        { name: '보리', role: '보조교사', img: "/assets/images/KakaoTalk_20260118_171126891_06.jpg" },
                        { name: '별님', role: '연장반', img: "/assets/images/KakaoTalk_20260116_134251164_04.jpg" },
                    ].map((teacher, i) => (
                        <div key={i} className="text-center group">
                            <div className="aspect-[3/4] bg-gray-200 rounded-2xl mb-4 flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition overflow-hidden">
                                <img src={teacher.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={teacher.name} />
                            </div>
                            <h4 className="font-bold text-lg">{teacher.name} 선생님</h4>
                            <p className="text-sm text-green-600">{teacher.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center text-green-800">오시는 길</h2>
                <a
                    href="https://naver.me/GT6GKiWn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-[300px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-500 font-bold text-lg border-2 border-dashed border-gray-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition duration-300 group cursor-pointer relative overflow-hidden"
                >
                    <MapPin size={48} className="mb-2 text-gray-400 group-hover:text-green-600 transition-transform group-hover:scale-110 duration-300" />
                    <span className="relative z-10">네이버 지도에서 보기</span>
                    <span className="text-sm font-normal text-gray-400 mt-1 relative z-10 group-hover:text-green-600">클릭하시면 지도로 이동합니다</span>
                </a>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <MapPin className="text-green-600 flex-shrink-0 mt-1" />
                    <div>
                        <span className="font-bold block">주소</span>
                        <span className="text-gray-600">경기도 의왕시 옥박골동길 20</span>
                        <p className="text-sm text-gray-400 mt-2">* 주차 공간이 협소하오니 대중교통 이용을 부탁드립니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
