import './App.css'

function App() {
  const name = '리액트';
  const undefiend_example = undefined;
  return (
    <>
      <>
        <h1>01. 감싸인 요소</h1>
        <h2>리액트, 안녕!</h2>
        <hr></hr>
      </>

      <>
        <h1>02. 자바스크립트 표현</h1>
        <h2>{name}, 안녕!</h2>
        <hr></hr>
      </>

      <>
        <h1>03. 조건부 연산자</h1>
        {name === '리액트' ? (
          <h2>리액트입니다.</h2>
        ) : (
          <h2>리액트가 아니에요.</h2>
        )
        }
        <hr></hr>
      </>

      <>
        <h1>04. AND 연산자를 활용한 조건부 렌더링</h1>
        {name === '리액트' && <h2>리액트입니다.</h2>}
        <hr></hr>
      </>

      <>
        <h1>05. undefined를 렌더링하기 않기</h1>
        <div>{undefiend_example || 'undefined입니다.'}</div>
        <hr></hr>
      </>

      <>
        <h1>06. 인라인 스타일링</h1>
        <div style={{
          backgroundColor: 'black',
          color: 'aqua',
          fontSize: '48px',
          fontWeight: 'bold',
          padding: 16
        }}>
          {name}
        </div>
        <hr></hr>
      </>

      <>
        <h1>07. class 대신 className</h1>
        <div className="react">
          {name}
        </div>
        <hr></hr>
      </>

      <>
        <h1>08. 꼭 닫아야 하는 태그</h1>
        <input></input>
        <hr></hr>
      </>

      <>
        {/* 주석입니다. */}
        <h1>09. 주석</h1>
        <h2>리액트, 안녕!</h2>
        <hr></hr>
      </>
    </>
  );
}

export default App;
