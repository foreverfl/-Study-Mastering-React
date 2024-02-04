# [학습자료] 리액트를 다루는 기술

## 설명

- '리액트를 다루는 기술'이란 책을 공부하고 정리한 내용입니다.

## 목차

1. 리액트 시작
2. JSX
3. 컴포넌트
4. 이벤트 핸들링
5. DOM에 이름 달기
6. 컴포넌트 반복
7. 컴포넌트의 라이프사이클 메서드
8. Hooks
9. 컴포넌트 스타일링
10. 일정 관리 앱 애플리케이션 만들기
11. 컴포넌트 성능 최적화
12. immer를 사용하여 더 쉽게 불변성 유지하기
13. 리액트 라우터로 SPA 개발하기
14. 외부 API를 연동하여 뉴스 뷰어 만들기
15. Context API
16. 리덕스 라이브러리 이해하기
17. 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기
18. 리덕스 미들웨어를 통한 비동기 작업 관리
19. 코드 스플리팅
20. 서버 사이드 렌더링
21. 백엔드 프로그래밍
22. mongoose를 이용한 mongoDB 연동 실습
23. JWT를 통한 회원 인증 시스템 구현하기
24. 프런트앤드 프로젝트: 시작 및 인증 구현
25. 프런트엔드 프로적트: 글쓰기 기능 구현하기
26. 프런트엔드 프로젝트: 포스트 조회 기능 구현하기
27. 프런트엔드 프로젝트: 수정/삭제 기능 구현 및 마무리

## 01. 리액트 시작

### React 특징

- Virtual Dom을 사용: 실제 DOM을 조작하는 것이 아니라 이를 추상화한 JavaScript 객체를 구성하여 사용
- 오로지 view만 담당하는 library

### 실행 명령어

- 현재 경로에 프로젝트 생성하기

```bash
yarn create react-app .
npm init react-app .
```

- 프로젝트 실행하기

```bash
yarn start
npm start
```

## 02. JSX

### JSX(JavaScript XML)

- 자바스크립트 확장 문법

### JSX의 장점

- 보기 쉽고 익숙함
- 활용도가 높음

### JSX 문법

- **감싸인 요소**: 컴포넌트 변화를 감지하기 위해서 DOM 트리 구조로 이루어져야함
- 자바스크립트 표현
- 조건부 연산자
- AND 연산자를 활용한 조건부 렌더링
- undefined를 렌더링하기 않기
- 인라인 스타일링
- class 대신 className
- 꼭 닫아야 하는 태그
- 주석

## 03. 컴포넌트

### 나중에 정리할거에요~~~ ㅠㅠ 졸려

## 04. 이벤트 핸들링

### 이벤트를 사용할 때 주의사항

- 이벤트 이름은 카멜 표기법으로 작성
- 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
- DOM 요소에만 이벤트를 설정 가능

## 05. DOM에 이름 달기

### ref를 사용해야하는 상황

- DOM을 직접적으로 건드려야 할 때(state만으로 해결이 불가능할 때)

### ref를 사용해야하는 상황 예시

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기

### ref를 사용하는 방법

1. 콜백 함수를 통한 ref 설정

```javascript
<input ref={(ref) => {this.input=ref}}>
```

2. createRef를 통한 Ref 설정

```javascript
class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}
```

## 06. 컴포넌트 반복

### key

- key는 컴포넌트 배열을 렌더링했을 때, 어떤 원소에 변동이 있었는지 알아내려고 사용함.
- 컴포넌트에 고유한 번호가 없다면 map 함수에 전달되는 콜백 함수의 인수인 index를 사용해야 함.

## 07. 컴포넌트의 라이프 사이클 메서드

### 라이프 사이클 메서드의 특징

- 클래스형 컴포넌트에서만 사용 가능.
- `<React.StrictMode>`로 App 컴포넌트를 감싸고 있기 때문에 constructor와 getDerivedStateFromProps 같은 라이프사이클 메서드가 개발 모드에서 두 번씩 호출됨. 특히 클래스 컴포넌트의 라이프사이클 메서드를 두 번 호출함으로써, 부수 효과(side effects)를 발생시키는 코드를 찾아낼 수 있게 함.

### 라이브 사이클 메서드의 종류

- **마운트**: DOM이 생성되고 웹 브라우저 상에 나타남.
- **업데이트**
  > - props가 바뀔 때.
  > - state가 바뀔 때.
  > - 부모 컴포넌트가 리렌더링 될 때.
  > - this.forceUpdate로 강제로 렌더링을 트리거할 때.
- **언마운트**: 컴포넌트를 DOM에서 제거.

### 라이프 사이클 메서드의 흐름

![life cycle method](/images/component_life_cycle.webp)

## 08. Hooks

### Hooks

- **useState**: useState는 컴포넌트의 상태를 함수 컴포넌트 내에서 관리할 수 있게 해줌.

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- **useEffect**: useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 해주는 Hook. 주로 사이드 이펙트(side effects)를 처리할 때 사용됨(데이터 fetching, 구독(subscriptions), 수동 DOM 조작 등).

```javascript
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- **useReducer**: useReducer는 복잡한 컴포넌트의 상태 로직을 다룰 때 useState보다 더 효율적인 Hook. 액션을 기반으로 상태를 업데이트하는 로직을 외부 함수(reducer)로 분리할 수 있음.

```javascript
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

- **useMemo**: useMemo는 메모이제이션(memoization)된 값을 반환하는 Hook. 성능 최적화를 위해 계산량이 많은 함수의 결과값을 재사용할 때 유용함.

```javascript
import React, { useState, useMemo } from "react";

const computeExpensiveValue = (a, b) => {
  // imagine this is an expensive operation
  return a + b;
};

function Example() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <div>
      <input value={a} onChange={(e) => setA(+e.target.value)} />
      <input value={b} onChange={(e) => setB(+e.target.value)} />
      <p>Result: {memoizedValue}</p>
    </div>
  );
}
```

- **useCallback**: useCallback은 메모이제이션된 콜백 함수를 반환. 특정 함수를 재생성하지 않고 재사용할 때 사용됨.

```javascript
import React, { useState, useCallback } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <button onClick={increment}>Increment {count}</button>;
}
```

- **useRef**: useRef는 컴포넌트에서 DOM을 직접 선택해야 할 때 사용함. 또한, 렌더링과 관련 없는 데이터를 저장하는 용도로도 사용됨.

```javascript
import React, { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## 09. 컴포넌트 스타일링

## 10. 일정 관리 앱 애플리케이션 만들기

## 11. 컴포넌트 성능 최적화

## 12. immer를 사용하여 더 쉽게 불변성 유지하기

## 13. 리액트 라우터로 SPA 개발하기

## 14. 외부 API를 연동하여 뉴스 뷰어 만들기

## 15. Context API

## 16. 리덕스 라이브러리 이해하기

## 17. 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

## 18. 리덕스 미들웨어를 통한 비동기 작업 관리

## 19. 코드 스플리팅

## 20. 서버 사이드 렌더링

## 21. 백엔드 프로그래밍

## 22. mongoose를 이용한 mongoDB 연동 실습

## 23. JWT를 통한 회원 인증 시스템 구현하기

## 24. 프런트앤드 프로젝트: 시작 및 인증 구현

## 25. 프런트엔드 프로적트: 글쓰기 기능 구현하기

## 26. 프런트엔드 프로젝트: 포스트 조회 기능 구현하기

## 27. 프런트엔드 프로젝트: 수정/삭제 기능 구현 및 마무리
