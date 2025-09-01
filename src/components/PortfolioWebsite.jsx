import React from 'react';

const PortfolioWebsite = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Header/Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0" style={{backgroundColor: 'black'}}>
          <img 
            src="public/backgrounds/Tech Website in Black Orange Blue Cool Corporate Style (4).png" 
            alt="Hero Background" 
            className="absolute -translate-x-1/5 -translate-y-1/4 scale-[2]"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="absolute inset-0 bg-black/40" style={{display: 'none'}}></div>
        </div>
        
        {/* Background decorative elements */}
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-40 right-40 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/10 rounded-full"></div>
        </div> */}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-white">
              <div className="mb-4">
                <span className="text-lg opacity-90">Amelia Liao</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Naily
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Website & App Design
              </p>
            </div>
            
            {/* Right side - Portfolio Images */}
            <div className="relative">
              {/* Main Portfolio Image */}
              <div className="relative z-20 left-40">
                <div className="w-[70%] h-[80%] bg-white rounded-3xl shadow-2xl transform  overflow-hidden">
                  <div>
                    <div className="text-center text-gray-500">
                      <img src="public/images/筆電.png" alt="Portfolio Main Image" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Portfolio Image */}
              <div className="absolute -left-40 top-80 z-10">
                <div className="w-[70%] h-[80%]  rounded-lg transform -rotate-12 overflow-hidden">
                  <div>
                    <img src="public/images/手機 首頁.png"  className="w-full h-full object-cover" />
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
        {/* Background: big teal circle + soft glows */}
      <div className="absolute inset-0 bg-[#0b0b0b] overflow-hidden">
        {/* 主圓：藍綠漸層，只有左半露出 */}
        <div
          className="
            absolute top-1/2 -left-1/3 -translate-y-1/2
            w-[1200px] h-[1200px] rounded-full 
            bg-[radial-gradient(closest-side,rgba(78,200,212,0.8),rgba(78,200,212,0.45)_55%,rgba(136,108,180,0.28)_72%,transparent_78%)]

            will-change-transform
          "
        />

        {/* 輔助光暈（左下紫） */}
        <div
          className="
            absolute left-[28%] bottom-[200px]
            w-[700px] h-[700px] rounded-full blur-3xl opacity-70
            bg-[radial-gradient(closest-side,rgba(168,85,247,0.45),transparent_70%)]
          "
        />

        {/* 輔助光暈（右下青） */}
        <div
          className="
            absolute right-[200px] bottom-[-120px]
            w-[520px] h-[520px] rounded-full blur-3xl opacity-60
            bg-[radial-gradient(closest-side,rgba(45,212,191,0.35),transparent_72%)]
          "
        />
      </div>

        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Chinese Text */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                日秀美學 Naily
              </h2>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                革命性AI客製化指甲貼專家
              </p>
              <div className="text-lg leading-relaxed opacity-80 space-y-4">
                <p>
                  結合傳統工藝與現代科技，為每位顧客打造完美貼合的指甲貼。
                </p>
                <p>
                  突破傳統美甲限制，運用先進AI技術精準測量，採用頂級環保材質，
                  專業工藝製作，數千種設計選擇，支援個人圖案上傳。
                </p>
              </div>
            </div>
            
            {/* Right side - Portfolio Images */}
            <div className="relative">
              {/* Main Portfolio Image */}
              <div className="relative">
                <div className="w-[100%] h-[100%] rounded-3xl shadow-2xl transform  overflow-hidden">
                  <img src="public/images/介紹.png"  className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -left-50 top-80 z-10 z-10">
                <div className="w-[70%] h-[60%] rounded-3xl transform  overflow-hidden">
                  <img src="public/images/手機 介紹.png"  className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0" style={{backgroundColor: 'black'}}>
          <img 
            src="public/backgrounds/Tech Website in Black Orange Blue Cool Corporate Style (2).png" 
            alt="Features Background" 
            className="w-full h-full object-cover"
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
              <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Features
              </h2>
            </div>
            
            {/* Right side - Features Panel */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">User-friendly</h3>
                      <p className="text-white/80 text-sm">
                        Write here a key feature of the app or software that is being advertised here.
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Seamless integration</h3>
                      <p className="text-white/80 text-sm">
                        Write here a key feature of the app or software that is being advertised here.
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Secure & safe</h3>
                      <p className="text-white/80 text-sm">
                        Write here a key feature of the app or software that is being advertised here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Color Palette Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70" style={{display: 'none'}}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">

          
          <div className="text-center">
            <div className='w-100'>
            <img src="public/images/naily_icon.jpg" alt="Colors Background" className="w-[6%] h-[6%] object-cover rounded-[1.5rem] mb-[8rem]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
              {/* Primary Color Card */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <div className="w-64 h-64 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mx-auto mb-4"></div>
                <p className="text-white font-semibold">主色 #BE1F48</p>
              </div>
              
              {/* Secondary Color Card */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white font-semibold">次色 #005B96</p>
              </div>
              
              {/* Grayscale Card */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-600 rounded-full mx-auto mb-4"></div>
                <p className="text-white font-semibold">灰階</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the Makers Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0" style={{backgroundColor: 'black'}}>
          <img 
            src="/public/backgrounds/Tech Website in Black Orange Blue Cool Corporate Style (1).png" 
            alt="Team Background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="absolute inset-0 bg-black/50" style={{display: 'none'}}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-white">
              <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                響應式設計
              </h2>
              <p className="text-lg leading-relaxed opacity-80 max-w-lg">
                ☻ 提升手機直橫式的操作流暢度
              </p>
              <p className="text-lg leading-relaxed opacity-80 max-w-lg">
                ☻ 依據不同螢幕尺寸，調整適合的版面配置
              </p>
            </div>
            
            {/* Right side - Laptop Mockup */}
            <div className="relative">
              <div className="relative z-20">
                <div className="w-80 h-48 bg-gray-800 rounded-lg shadow-2xl transform rotate-6">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-green-200 rounded-lg p-2">
                    <div className="w-full h-full bg-white rounded shadow-inner"></div>
                  </div>
                </div>
                <div className="w-80 h-4 bg-gray-700 rounded-b-lg shadow-lg"></div>
              </div>
              
              {/* Hand with Image */}
              <div className="absolute -right-10 top-10 z-10">
                <div className="w-32 h-24 bg-white rounded-lg shadow-lg transform -rotate-12">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-2">
                    <div className="w-full h-full bg-white rounded shadow-inner"></div>
                  </div>
                </div>
              </div>
              
              {/* Tip Text */}
              <div className="absolute bottom-0 left-0 text-white/60 text-sm">
                Tip: Drag and drop your image over the mockup.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/backgrounds/contact-bg.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="absolute inset-0 bg-black/60" style={{display: 'none'}}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Background */}
            <div></div>
            
            {/* Right side - Contact Info */}
            <div className="text-white">
              <h2 className="text-5xl lg:text-7xl font-bold mb-12 leading-tight">
                Contact
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-lg opacity-80">(123) 456 7890</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-lg opacity-80">hello@reallygreatsite.com</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Social</h3>
                  <div className="flex gap-4 mt-2">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-blue-900 font-bold text-sm">f</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-blue-900 font-bold text-sm">📷</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioWebsite;