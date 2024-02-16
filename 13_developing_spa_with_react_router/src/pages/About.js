import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

const About = () => {
    const location = useLocation(); // React Router V6
    console.log(location);

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략함
    })
    console.log(query);

    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값음 문자열임

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
            {showDetail && <p>detail 값을 true로 설정하셨네요?</p>}
        </div>
    );
};

export default About;
