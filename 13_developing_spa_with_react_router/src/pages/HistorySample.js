import React from 'react';
import { useNavigate } from 'react-router-dom';

function HistorySample() {
    const navigate = useNavigate();

    // 뒤로 가기
    const handleGoBack = () => {
        navigate(-1);
    };

    // 홈으로 이동
    const handleGoHome = () => {
        navigate('/');
    };

    // 페이지 이탈 시 확인 기능은 v6에서 직접적인 지원이 없으므로 생략하거나 다른 방법을 모색해야 함

    return (
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;