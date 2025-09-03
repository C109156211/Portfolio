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
              
              {/* Secondary Portfolio Image */}
              <div className="absolute -left-40 top-40 z-10">
                <div className="w-[60%] h-[80%]  rounded-lg transform  overflow-hidden">
                  <div>
                    <img src="public/images/首頁展示圖.png"  className="w-full h-full object-cover" />
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
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
                <div className="w-[100%] h-[100%] transform  overflow-hidden">
                  <img src="public/images/辨識展示圖.png"  className="w-full h-full object-cover" />
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
              <h2 className="text-5xl lg:text-4xl font-bold mb-8 leading-tight">
                Features
              </h2>
              <img src="public/images/辨識.png" alt="Features Background" className="w-[100%] h-[100%] object-cover" />
            </div>
            
            {/* Right side - Features Panel */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">🖐️ 使用者友善</h3>
                      <p className="text-white/80 text-sm">
                        提供直觀的拍攝指引，包含側拍示範圖片與範例框線，幫助使用者快速理解正確的操作方式。
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">🔗 流暢整合</h3>
                      <p className="text-white/80 text-sm">
                        針對每隻手指給予拍攝提示與專屬框線，引導使用者自然完成拍攝流程，不需額外學習即可上手。
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">🔒 安全可靠</h3>
                      <p className="text-white/80 text-sm">
                        透過精準的框線與指甲片大小指引，避免錯誤取景，確保 AI 模型獲得最準確的輸入資料，提升分析結果的可信度。
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
        <div className="absolute inset-0" style={{backgroundColor: 'black'}}>
          <div className="absolute inset-0 bg-black/70" style={{display: 'none'}}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">

          
          <div className="text-center">
            <div className='w-100'>
              <img src="public/images/naily logo.png" alt="Colors Background" className="w-[6%] h-[6%] object-cover mb-[8rem]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-100 mx-auto">
              {/* Primary Color Card */}
              <div 
                className=" p-8 bg-cover bg-center bg-no-repeat" 
                style={{
                  backgroundImage: 'url("public/backgrounds/Color Palette Section bg.png")',
                  height: '120%',
                  width: '100%'
                }}
              >
                <img src="public/images/Ellipse 159.png" alt="Colors Background" className="object-cover mb-[8rem]" />
                <p className="text-white font-semibold drop-shadow-lg">主色 #BE1F48</p>
              </div>
              
              {/* Secondary Color Card */}
              <div 
                className=" p-8 bg-cover bg-center bg-no-repeat" 
                style={{
                  backgroundImage: 'url("public/backgrounds/Color Palette Section bg.png")',
                  height: '120%',
                  width: '100%'
                }}
              >
                <img src="public/images/Ellipse 160.png" alt="Colors Background" className="object-cover mb-[8rem]" />
                <p className="text-white font-semibold drop-shadow-lg">次色 #005B96</p>
              </div>
              
              {/* Grayscale Card */}
              <div 
                className=" p-8 bg-cover bg-center bg-no-repeat" 
                style={{
                  backgroundImage: 'url("public/backgrounds/Color Palette Section bg.png")',
                  height: '120%',
                  width: '100%'
                }}
              >
                <img src="public/images/Ellipse 161.png" alt="Colors Background" className="object-cover mb-[8rem]" />
                <p className="text-white font-semibold drop-shadow-lg">灰階</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. RWD */}
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
              <h2 className="text-5xl lg:text-3xl font-bold mb-8 leading-tight">
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
            <div className="w-[120%] transform  overflow-hidden">
                  <img src="public/images/RWD.jpg"  className="w-full h-full object-cover" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0" style={{backgroundColor: 'black'}}>
          <img 
            src="public/backgrounds/Tech Website in Black Orange Blue Cool Corporate Style1.png" 
            alt="Contact Background" 
            className="w-full h-full object-cover transform scale-[3] origin-center" sizes='100%'
          />
          {/* <div className="absolute inset-0 bg-black/60" style={{display: 'none'}}></div> */}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Background */}
            <div></div>
            
            {/* Right side - Contact Info */}
            <div className="text-white">
              <h2 className="text-5xl lg:text-3xl font-bold mb-12 leading-tight">
                聯絡資訊
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-lg opacity-80">0978-530-896</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-lg opacity-80">cccc1030026ogmail.com</p>
                </div>
                
                {/* <div>
                  <h3 className="text-xl font-semibold mb-2">Social</h3>
                  <div className="flex gap-4 mt-2">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-blue-900 font-bold text-sm">f</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-blue-900 font-bold text-sm">📷</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioWebsite;