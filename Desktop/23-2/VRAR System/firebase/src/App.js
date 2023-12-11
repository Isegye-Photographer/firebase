import React, { useState, useEffect } from 'react';
import './App.css';
import { storage } from "./firebase";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const downloadImage = async () => {
      try {
        // Firebase Storage -> 이미지 다운로드
        const imageRef = storage.ref('Assets/Photo/CanvasScreenShot.png');
        const url = await imageRef.getDownloadURL();

        setImageUrl(url);
      } catch (error) {
        console.error('이미지 다운로드 에러:', error.message);
      }
    };

    downloadImage();
  }, []); 

  // 이미지를 다운로드 함수
  const handleDownloadImage = () => {
    // 이미지 URL이 존재하는지 확인
    if (imageUrl) {
      // 새로운 a 태그를 생성하여 다운로드 링크로 사용
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'downloaded_image.png';
      document.body.appendChild(link);

      // 클릭 이벤트를 발생시켜 다운로드 수행
      link.click();

      // 사용이 끝난 a 태그 제거
      document.body.removeChild(link);
    }
  };

  return (
    <div className="app-container">
      {/* 이세계포토부스 로고 */}
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + '/포토부스.png'} alt="로고 이미지" />
      </div>

      {/* 네컷사진 */}
      <div className="image-container">
        {/* 이미지가 로드되었을 때만 이미지를 표시 */}
        {imageUrl && <img src={imageUrl} alt="주요 사진" />}
      </div>

      {/* 다운로드 버튼 2개 */}
      <div className="button-group">
        <button className="download-button" onClick={handleDownloadImage}>
          <strong>사진 다운로드</strong>
        </button>
      </div>
    </div>
  );
}

export default App;
