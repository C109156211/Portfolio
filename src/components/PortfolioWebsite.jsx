import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Target, Lightbulb, Search } from 'lucide-react';

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('background');
  const [showNavigation, setShowNavigation] = useState(false);

  // 監聽滾動位置來更新導航狀態
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['background', 'contribution', 'process', 'highlights'];
      const scrollPosition = window.scrollY + 200;
      const heroHeight = window.innerHeight;
      const backgroundSection = document.getElementById('background');

      // 控制導航顯示 - 當滾動到設計背景區塊時就顯示導航
      if (backgroundSection) {
        const backgroundTop = backgroundSection.offsetTop;
        // 當滾動到設計背景區塊的頂部時才顯示導航
        setShowNavigation(window.scrollY >= backgroundTop);
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const teamMembers = [
    { name: 'Max Wu', role: '產品經理希望形象網站結合商城功能', color: 'bg-emerald-500' },
    { name: 'Patricia Wu', role: '希望將B/C架構與異單區分', color: 'bg-rose-500' },
    { name: 'Brain Lin', role: '產品的 Spec 排版問題希望更加清楚', color: 'bg-pink-500' }
  ];

  const navItems = [
    { id: 'background', label: '設計背景' },
    { id: 'contribution', label: '貢獻' },
    { id: 'process', label: '設計過程' },
    { id: 'highlights', label: 'UI Highlights' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-300 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-800 to-transparent opacity-30 rounded-full transform translate-x-32 translate-y-32"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200 to-transparent opacity-20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="text-left mb-8">
            <span className="text-cyan-100 text-lg">Amelia Liao</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Naily Website & App Design
          </h1>
          <p className="text-lg md:text-xl mb-8 text-cyan-50 max-w-3xl mx-auto">
            提升企業品牌形象 × 優化使用者體驗 × 建立設計系統
          </p>
          <button 
            onClick={() => scrollToSection('background')}
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            瀏覽網站
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Main Content with Fixed Navigation */}
      <div className="relative">
        {/* Fixed Navigation Sidebar */}
        <nav className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 p-6 ml-8 transition-all duration-300 hidden md:block ${
          showNavigation ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <div className="w-full md:ml-64">
                  {/* Background Section */}
        <section id="background" className="py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">設計背景</h2>
                    <p className="text-lg text-gray-600">2025/01～至今</p>
                </div>

              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <div className="flex-1">
                  <span className="font-semibold text-sm uppercase tracking-wide" style={{color: '#BE1F48'}}>01 • Discover</span>
                  <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8">需求釐清與問題盤點</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#BE1F48'}}></div>
                      <p className="text-lg text-gray-700">實際與產品經理、各單位業務進行需求釐清與問題盤點</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700">確認使用者需求與功能目標</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="space-y-6">
                    {teamMembers.map((person, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className={`w-12 h-12 ${person.color} rounded-full flex items-center justify-center text-white font-bold`}>
                          {person.name[0]}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{person.name}</h4>
                          <p className="text-gray-600 text-sm">{person.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contribution Section */}
          <section id="contribution" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">我的貢獻</h2>
                <p className="text-lg text-gray-600">在此專案中的主要負責項目與成果</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 border border-pink-200">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#BE1F48'}}>
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">使用者需求分析</h3>
                  <p className="text-gray-700 leading-relaxed">
                    深入訪談業務單位，識別現有系統痛點，建立用戶需求地圖，確保設計方向符合實際業務需求。
                  </p>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 border border-rose-200">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#BE1F48'}}>
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">介面設計與原型開發</h3>
                  <p className="text-gray-700 leading-relaxed">
                    設計直觀的用戶介面，優化資訊架構，創建互動原型，提升整體用戶體驗。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section id="process" className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <div className="flex-1">
                  <span className="font-semibold text-sm uppercase tracking-wide" style={{color: '#BE1F48'}}>02 • Ideate</span>
                  <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Brainstorming</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700">與團隊一同針對全新官網的體驗進行腦力激盪</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700">將想法轉換為具體草圖畫面</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 h-80 flex items-center justify-center shadow-sm border border-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Lightbulb className="h-8 w-8 text-gray-500" />
                      </div>
                      <p className="text-gray-600 text-sm">設計流程草圖與構思</p>
                      <p className="text-xs text-gray-400 mt-2">GIGABYTE Home 專題設計 草稿圖</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UI Highlights Section */}
          <section id="highlights" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span style={{color: '#BE1F48'}}>UI</span> Highlights
                </h2>
                <p className="text-lg text-gray-600">主要介面設計亮點展示</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* GIGABYTE Home */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#BE1F48'}}>GIGABYTE Home</h3>
                  <p className="text-gray-600 mb-8">以流暢視覺呈現品牌主調，營造高科技形象，強化首頁第一印象</p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 h-96 flex items-center justify-center border border-gray-200">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">G</span>
                      </div>
                      <p className="text-gray-600">GIGABYTE Home</p>
                      <p className="text-sm text-gray-400 mt-2">主頁介面設計</p>
                    </div>
                  </div>
                </div>

                {/* Enterprise Home */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#BE1F48'}}>Enterprise Home</h3>
                  <p className="text-gray-600 mb-8">重新規劃首頁資訊區塊，整合 AI功能，熱門產品與成功案例，強化企業專業購體驗</p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 h-96 flex items-center justify-center border border-gray-200">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">E</span>
                      </div>
                      <p className="text-gray-600">Enterprise Home</p>
                      <p className="text-sm text-gray-400 mt-2">企業版介面設計</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 md:px-12 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">想了解更多設計細節？</h3>
              <p className="text-gray-300 mb-8">歡迎與我聯繫討論更多專案內容</p>
              <button className="inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300" style={{backgroundColor: '#BE1F48'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#A11B3F'} onMouseLeave={(e) => e.target.style.backgroundColor = '#BE1F48'}>
                聯繫我
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWebsite;