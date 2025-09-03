import React from 'react';
import { Link } from 'react-router-dom';
import japanHomeBg from '../assets/backgrounds/日語首頁bg.png';
import japanP2Bg from '../assets/backgrounds/日語p2 bg.png';
import p3Bg from '../assets/backgrounds/p3 bg.png';
import japanHomeImg from '../assets/images/日語 首頁.png';
import japanBubbleImg from '../assets/images/日語 泡泡.png';
import japanElevatorImg from '../assets/images/日語電梯.png';

const Japan = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首頁
          </Link>
        </div>
      </nav>
      
      {/* 1. Header/Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0" style={{backgroundColor: 'black'}}>
          <img 
            src={japanHomeBg} 
            alt="Hero Background" 
            className="absolute -translate-x-1/5 -translate-y-1/4 scale-[2]"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="absolute inset-0 bg-black/40" style={{display: 'none'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-white">
              <div className="mb-4">
                <span className="text-lg opacity-90">Amelia Liao</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                日語智彙王
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Japanese Learning App
              </p>
            </div>
            
            {/* Right side - Portfolio Images */}
            <div className="relative">
              <div className="relative left-70">
                <div className="w-[100%] h-[100%] rounded-lg transform overflow-hidden">
                  <div>
                    <img src={japanHomeImg} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About/Description Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background with Circular Gradient */}
        <div className="absolute inset-0 bg-[#0b0b0b] overflow-hidden">
          <img src={japanP2Bg} alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Chinese Text */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-4xl font-bold mb-6 leading-tight">
                背景介紹
              </h2>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                互動式日語學習應用程式
              </p>
              <div className="text-lg leading-relaxed opacity-80 space-y-4">
                <p>透過<span className="font-bold text-orange-400">遊戲化</span>的方式學習日語，我們設計了多種精美場景，每個場景都搭配獨特的遊戲玩法，讓學習充滿趣味性。玩家在挑戰過程中，可以透過完成任務來蒐集榮譽獎盃，激發成就感與學習動力。我們希望藉由這種<span className="font-bold text-orange-400">沉浸式互動學習</span>，讓語言學習<span className="font-bold text-orange-400">不再枯燥</span>，而是成為一段充滿樂趣與成長的旅程！</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0" style={{backgroundColor: '#0f1819'}}> 
          <img 
            src={p3Bg} 
            alt="Features Background" 
            className="w-[200%] h-[200%] object-cover"
              onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="absolute inset-0 bg-black/60" style={{display: 'none'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-white">
              <h2 className="text-5xl lg:text-4xl font-bold mb-2 leading-tight">
                設計細節
              </h2>
              <h4 className="text-5xl lg:text-xl mb-8 leading-tight">
                Features
              </h4>

              <h2 className="text-5xl lg:text-lg font-bold mb-2 leading-tight">
              單字泡泡挑戰
              </h2>
              <h4 className="text-5xl lg:text-base mb-8 leading-tight">
              使用者透過點選泡泡中對應的文字，完成單字拼寫。系統會依照答對的<br/>數量與完成速度給予成就獎勵，並將完成的單字收集成卡片，供日後複<br/>習與背誦使用。
              </h4>
            </div>
            
            {/* Right side - Features Panel */}
            <div className="relative">
              <img src={japanBubbleImg} alt="Features Background" className="scale-[1.5] w-[100%] h-[100%] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology Stack Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0" style={{backgroundColor: '#0f1819'}}> 
          <img 
            src={p3Bg} 
            alt="Features Background" 
            className="w-[200%] h-[200%] object-cover"
              onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="absolute inset-0 bg-black/60" style={{display: 'none'}}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left side - Text */}
            <div className="text-white w-full lg:w-[70%]">
              <h2 className="text-5xl lg:text-4xl font-bold mb-2 leading-tight">
                設計細節
              </h2>
              <h4 className="text-5xl lg:text-xl mb-8 leading-tight">
                Features
              </h4>

              <h2 className="text-5xl lg:text-lg font-bold mb-2 leading-tight">
                直覺操作 & 模擬電梯按鈕
              </h2>
              <h4 className="text-5xl lg:text-base mb-8 leading-tight">
                透過模擬電梯按鈕並清楚標示導航位置，讓使用者有如實際操作電梯般的體驗，進一步提升遊玩感受。
              </h4>
            </div>
            <img src={japanElevatorImg} alt="Features Background" className="scale-[1.5] w-full max-w-[420px] lg:max-w-[540px] h-auto object-contain mx-auto" />
            {/* Right side - Features Panel */}
            <div className="text-white w-full lg:w-[80%] self-end justify-self-end text-right">
              <h2 className="text-5xl lg:text-lg font-bold mb-2 leading-tight">
                像素風遊戲設計
              </h2>
              <h4 className="text-5xl lg:text-base mb-8 leading-tight">
                依據不同店面風格生成像素化背景圖，並調整商品資訊的呈現位置；以清晰易讀為核心，同時將剩餘數量巧妙地置於右上角，兼具活潑與實用性。
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Japan;