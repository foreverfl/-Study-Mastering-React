# [학습자료] 리액트를 다루는 기술

## 설명

- '리액트를 다루는 기술'이란 책을 공부하고 정리한 내용입니다. 웹 서핑 및 ChatGPT4를 통해 자료를 보완했습니다.

## 목차

1. [리액트 시작](#01-리액트-시작)
2. [JSX](#02-jsx)
3. [컴포넌트](#03-컴포넌트)
4. [이벤트 핸들링](#04-이벤트-핸들링)
5. [DOM에 이름 달기](#05-dom에-이름-달기)
6. [컴포넌트 반복](#06-컴포넌트-반복)
7. [컴포넌트의 라이프사이클 메서드](#07-컴포넌트의-라이프-사이클-메서드)
8. [Hooks](#08-hooks)
9. [컴포넌트 스타일링](#09-컴포넌트-스타일링)
10. [일정 관리 앱 애플리케이션 만들기](#10-일정-관리-앱-애플리케이션-만들기)
11. [컴포넌트 성능 최적화](#11-컴포넌트-성능-최적화)
12. [immer를 사용하여 더 쉽게 불변성 유지하기](#12-immer를-사용하여-더-쉽게-불변성-유지하기)
13. [리액트 라우터로 SPA 개발하기](#13-리액트-라우터로-spa-개발하기)
14. [외부 API를 연동하여 뉴스 뷰어 만들기](#14-외부-api를-연동하여-뉴스-뷰어-만들기)
15. [Context API](#15-context-api)
16. [리덕스 라이브러리 이해하기](#16-리덕스-라이브러리-이해하기)
17. [리덕스를 사용하여 리액트 애플리케이션 상태 관리하기](#17-리덕스를-사용하여-리액트-애플리케이션-상태-관리하기)
18. [리덕스 미들웨어를 통한 비동기 작업 관리](#18-리덕스-미들웨어를-통한-비동기-작업-관리)
19. [코드 스플리팅](#19-코드-스플리팅)
20. [서버 사이드 렌더링](#20-서버-사이드-렌더링)
21. [백엔드 프로그래밍](#21-백엔드-프로그래밍)
22. [mongoose를 이용한 mongoDB 연동 실습](#22-mongoose를-이용한-mongodb-연동-실습)
23. [JWT를 통한 회원 인증 시스템 구현하기](#23-jwt를-통한-회원-인증-시스템-구현하기)
24. [프런트앤드 프로젝트: 시작 및 인증 구현](#24-프런트앤드-프로젝트-시작-및-인증-구현)
25. [프런트엔드 프로적트: 글쓰기 기능 구현하기](#25-프런트엔드-프로적트-글쓰기-기능-구현하기)
26. [프런트엔드 프로젝트: 포스트 조회 기능 구현하기](#26-프런트엔드-프로젝트-포스트-조회-기능-구현하기)
27. [프런트엔드 프로젝트: 수정/삭제 기능 구현 및 마무리](#27-프런트엔드-프로젝트-수정삭제-기능-구현-및-마무리)

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

### 함수형 컴포넌트(Functional Components)와 클래스형 컴포넌트(Class Components)

1. 정의 및 선언 방식의 차이

- **함수형 컴포넌트**: JavaScript 함수를 사용하여 컴포넌트를 정의. ES6의 화살표 함수를 사용하여 간결하게 표현할 수 있음. Props를 함수의 매개변수로 받아 React 요소를 반환.

```javascript
const FunctionalComponent = (props) => {
  return <div>{props.children}</div>;
};
```

- **클래스형 컴포넌트**: React.Component를 상속받는 클래스를 사용하여 컴포넌트를 정의. render 메소드 안에서 JSX를 반환. Props와 상태(state)를 다루는 방법이 포함되어 있음.

```javascript
class ClassComponent extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
```

2. 상태(State) 관리

- **함수형 컴포넌트**: 이전에는 상태를 가질 수 없었지만, React Hooks(useState, useReducer 등)의 도입으로 상태 관리가 가능해짐.

- **클래스형 컴포넌트**: `this.state`를 사용하여 컴포넌트의 상태를 관리합니다. 상태 변경 시에는 `this.setState()` 메서드를 사용.

3. 라이프사이클 메서드

- **함수형 컴포넌트**: 이전에는 라이프사이클 메서드를 사용할 수 없었지만, useEffect Hook을 통해 컴포넌트의 생명주기를 효과적으로 관리할 수 있게 되었음.

- **클래스형 컴포넌트**: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 등의 라이프사이클 메서드를 사용하여 컴포넌트의 생명주기 이벤트를 관리.

4. 성능

- **함수형 컴포넌트**: 보통 클래스형 컴포넌트보다 메모리 자원을 덜 사용하며, 성능상의 이점이 있을 수 있음. 코드의 양이 적고, 간결하기 때문에 로딩 시간이 단축될 수 있음.

- **클래스형 컴포넌트**: 함수형 컴포넌트에 비해 약간 더 많은 메모리를 사용할 수 있으며, 복잡한 애플리케이션에서는 성능 차이가 나타날 수 있음.

5. 사용 추세

- **함수형 컴포넌트**: React 팀과 커뮤니티는 함수형 컴포넌트와 Hooks를 사용하는 것을 권장. 더 간결하고, 재사용성이 높으며, 코드의 가독성이 좋기 때문.

- **클래스형 컴포넌트**: 여전히 유효하고 사용할 수 있지만, 새로운 기능이나 업데이트는 함수형 컴포넌트와 Hooks에 초점을 맞추고 있음.

### Props

1. 개념

- React에서 Props는 "properties"의 줄임말로, 컴포넌트 간에 데이터를 전달하는 방법. Props는 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용되며, 자식 컴포넌트에서는 이를 읽기 전용 데이터로 사용할 수 있음. 이는 컴포넌트의 재사용성을 높이고, 코드의 유지 관리를 용이하게 함.

2. Props 관리 방식

- **부모-자식 컴포넌트 간의 단방향 데이터 흐름**: Props는 항상 상위 컴포넌트에서 하위 컴포넌트로 전달되며, 이는 React의 단방향 데이터 흐름을 따름. 이러한 방식은 데이터의 흐름을 예측 가능하게 만들고 디버깅을 용이하게 함.

- **읽기 전용성**: Props는 자식 컴포넌트에서 읽기 전용으로 사용됨. 자식 컴포넌트는 받은 props를 직접 수정할 수 없으며, 데이터를 수정하고자 할 때는 부모 컴포넌트에서 상태를 변경하고 변경된 상태를 props로 다시 내려보내야 함.

- **컴포넌트 재사용성 증대**: Props를 사용함으로써 컴포넌트는 다양한 상황에서 재사용될 수 있음. 동일한 컴포넌트에 다른 데이터를 props로 전달함으로써 다양한 결과를 얻을 수 있음.

3. 사용 방식

- 기본 Props 전달

  > - 부모 컴포넌트

```javascript
function ParentComponent() {
  return <ChildComponent name="John Doe" />;
}
```

> - 자식 컴포넌트

```javascript
function ChildComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

- 객체로 Props 전달
  > - 부모 컴포넌트

```javascript
function ParentComponent() {
  const person = { name: "John Doe", age: 30 };
  return <ChildComponent person={person} />;
}
```

> - 자식 컴포넌트

```javascript
function ChildComponent(props) {
  return (
    <div>
      <h1>Name: {props.person.name}</h1>
      <h2>Age: {props.person.age}</h2>
    </div>
  );
}
```

- Props를 사용한 이벤트 핸들러 전달
  > - 부모 컴포넌트

```javascript
function ParentComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <ChildComponent onClick={handleClick} />;
}
```

> - 자식 컴포넌트

```javascript
function ChildComponent(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}
```

- Props를 통한 children 전달
  > - 부모 컴포넌트

```javascript
function ParentComponent() {
  return (
    <ChildComponent>
      <p>This is a child content</p>
    </ChildComponent>
  );
}
```

> - 자식 컴포넌트

```javascript
function ChildComponent(props) {
  return <div>{props.children}</div>;
}
```

- 구조 분해 할당을 사용한 Props

> - 자식 컴포넌트

```javascript
function ChildComponent({ name, age }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  );
}
```

### PropTypes

- **기본 사용법**: 다음 예제는 MyComponent 컴포넌트에 name prop이 문자열로 전달되어야 함을 명시.

```javascript
import PropTypes from "prop-types";

function MyComponent({ name }) {
  return <div>Hello, {name}</div>;
}

MyComponent.propTypes = {
  name: PropTypes.string,
};
```

- **필수 props 지정**: isRequired를 사용하여 prop이 필수적으로 전달되어야 함을 명시할 수 있음.

```javascript
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
```

- **다양한 타입 체크**: PropTypes는 다양한 자료형에 대한 타입 체크를 지원.

```javascript
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
  config: PropTypes.object,
  onClick: PropTypes.func,
  favoriteNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.oneOf(["active", "inactive"]),
};
```

- **객체의 형태를 지정하기**: PropTypes.shape를 사용하여 객체의 특정 형태를 지정할 수 있음.

```javascript
MyComponent.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  }),
};
```

- **배열 내부의 타입 지정**: PropTypes.arrayOf를 사용하여 배열 내부 요소의 타입을 지정할 수 있음.

```javascript
MyComponent.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    })
  ),
};
```

- 사용 시 주의사항
  > - PropTypes는 개발 모드에서만 동작하며, 프로덕션 빌드에서는 타입 체크를 위한 코드가 제거됨. 이는 성능에 영향을 주지 않도록 설계됨.
  > - 타입이 일치하지 않을 경우, 콘솔에 경고 메시지가 출력됨. 이는 개발 과정에서 문제를 사전에 발견하고 수정할 수 있게 도와줌.

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

### useState

- 개념

  > - useState는 컴포넌트의 상태를 함수 컴포넌트 내에서 관리할 수 있게 해줌.

- 예제 코드

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

### useEffect

- 개념

  > - useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 해주는 Hook. 주로 사이드 이펙트(side effects)를 처리할 때 사용됨(데이터 fetching, 구독(subscriptions), 수동 DOM 조작 등).

- 예제 코드

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

### useReducer

- 개념

  > - useReducer는 복잡한 컴포넌트의 상태 로직을 다룰 때 useState보다 더 효율적인 Hook. 액션을 기반으로 상태를 업데이트하는 로직을 외부 함수(reducer)로 분리할 수 있음.

- 구성 요소

  > - state: useReducer를 사용할 때의 현재 상태.
  > - dispatch: 액션을 발생시키는 함수로, reducer 함수에 액션을 전달하여 상태를 업데이트함. 액션은 보통 type 속성을 가지며, 필요에 따라 추가 데이터를 포함할 수 있음.

- 예제 코드

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

### useMemo

- 개념

  > - useMemo는 메모이제이션(memoization)된 값을 반환하는 Hook. 성능 최적화를 위해 계산량이 많은 함수의 결과값을 재사용할 때 유용함.

- 예제 코드

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
      {/* setA() 안에 '+' 기호는 단항 플러스 연산자로 피연산자를 숫자로 변환하기 위하여 사용됨 */}
      <input value={a} onChange={(e) => setA(+e.target.value)} />
      <input value={b} onChange={(e) => setB(+e.target.value)} />
      <p>Result: {memoizedValue}</p>
    </div>
  );
}
```

### useCallback

- 개념

  > - useCallback은 React의 Hook 중 하나로, 함수를 메모이제이션하는 데 사용됨. 즉, 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 대신, useCallback을 사용하여 함수를 재사용할 수 있음. 이는 특히 해당 함수를 props로 하위 컴포넌트에 전달할 때 성능 최적화에 유용함.

- 파라미터

  > - **Callback 함수**: 메모이제이션할 함수.
  > - **의존성 배열(Dependency array)**: 이 배열 내의 요소가 변경될 때만 함수가 업데이트됨. 배열이 비어있으면 컴포넌트가 마운트될 때 단 한 번만 함수가 생성되며, 그 후로는 재생성되지 않음.

- 예제 코드

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

### useRef

- 개념

> - useRef는 컴포넌트에서 DOM을 직접 선택해야 할 때 사용함. 또한, 렌더링과 관련 없는 데이터를 저장하는 용도로도 사용됨.

- 예제

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

### SASS

- SASS는 원래의 Sass 문법으로, CSS와는 다른 들여쓰기와 줄바꿈을 사용하여 계층을 나타냄. 중괄호 {}와 세미콜론 ;을 사용하지 않음.
- 이 문법은 간결하며, CSS를 보다 선언적인 방식으로 작성할 수 있게 해줌.

```css
#main
  color: blue
  font-size: 0.3em
  p
    margin: 0 auto
```

### SCSS

- SCSS는 CSS와 거의 동일한 문법을 가지고 있으며, CSS의 상위 집합. 즉, 모든 유효한 CSS는 SCSS 문법으로도 유효함.
- SCSS는 중괄호 {}와 세미콜론 ;을 사용하여 스타일을 정의. 이로 인해 기존 CSS와의 호환성이 높고, CSS를 SCSS로 전환하기 쉬움.

```css
#main {
  color: blue;
  font-size: 0.3em;
  p {
    margin: 0 auto;
  }
}
```

### SASS/SCSS 차이점

- **문법 스타일**: SASS는 들여쓰기를 기반으로 한 문법을 사용하여 더 간결. 반면, SCSS는 CSS와 거의 같은 문법을 사용하여 보다 친숙하고, 기존 CSS를 쉽게 전환할 수 있음.
- **호환성**: SCSS는 CSS의 상위 집합이기 때문에 모든 유효한 CSS 스타일시트는 그대로 SCSS로 사용할 수 있음. SASS 문법은 이와 다르게 특별한 규칙(들여쓰기, 줄바꿈 등)을 따름.
- **사용성**: 개인의 선호도나 프로젝트의 요구에 따라 SASS와 SCSS 중 선택할 수 있음. SCSS는 CSS 작성자에게 더 친숙할 수 있으며, SASS는 더 간결한 코드를 선호하는 개발자에게 매력적일 수 있음.

### CSS Module

#### 개념

- CSS Module은 CSS를 모듈화하여 사용할 수 있게 해주는 기술. 이는 JavaScript 모듈 시스템을 사용하여 CSS 클래스 이름과 선택자를 로컬 스코프로 한정시키고, 충돌을 방지하는 방식으로 작동함. CSS Module의 주요 목적은 스타일시트의 클래스 이름이 전역 범위에서 작동하는 CSS의 한계를 극복하고, 컴포넌트 기반 개발에서 스타일의 캡슐화를 강화하는 것.

#### CSS Module의 작동 원리

- **로컬 스코핑**: CSS Module을 사용하면, 각 CSS 클래스 이름이 고유하게 변환되어, 다른 파일의 클래스 이름과 충돌하지 않음. 예를 들어, .button 클래스가 여러 CSS 파일에 정의되어 있어도, 각각 다른 고유 이름으로 컴파일되어 충돌을 방지함.
- **자동화된 클래스 이름 생성**: 빌드 과정에서 CSS 클래스 이름이 고유한 값으로 변환되며, 이 값은 일반적으로 파일 이름과 원래 클래스 이름을 기반으로 생성됨. 예를 들어, Button.module.css 파일의 .error 클래스는 Button_error_1a2b3c와 같이 컴파일 될 수 있음.

#### CSS Module 사용 이점

- **스타일 충돌 방지**: CSS Module을 사용하면 전역 스코프에서 발생할 수 있는 클래스 이름 충돌을 방지할 수 있음. 이는 특히 대규모 프로젝트나 여러 개발자가 협업하는 환경에서 유용함.
- **컴포넌트 기반 개발 지원**: React, Vue와 같은 컴포넌트 기반 프레임워크와 잘 어울리며, 각 컴포넌트에 대한 스타일을 캡슐화하여 모듈화할 수 있음.
- **명시적인 종속성 관리**: CSS Module은 JavaScript import 문을 통해 CSS 파일을 명시적으로 불러옴으로써, 스타일의 종속성을 명확하게 관리할 수 있게 해줌.

### 라이브러리

#### SASS (Syntactically Awesome Style Sheets)

- SASS는 CSS의 한계를 극복하기 위해 설계된 프리프로세서(preprocessor) 언어. CSS에 변수, 중첩 규칙, 믹스인(mixins), 함수 등 프로그래밍 언어의 기능을 추가하여, 스타일시트의 재사용성을 높이고, 유지 보수를 용이하게 함. SASS는 두 가지 문법 형식을 지원함.
- **변수 사용**: 색상, 폰트, 기타 값을 재사용하기 위한 변수를 선언할 수 있음.
- **믹스인 사용**: 코드 블록을 정의하고 재사용하여 중복을 줄일 수 있음.
- **중첩 규칙**: 선택자를 부모-자식 관계로 중첩하여 코드의 가독성을 높일 수 있음.
- **함수**: 컬러 조작, 리스트 조작 등의 작업을 위한 함수를 제공함.

#### Open-Color

- Open-Color는 색상 팔레트를 제공하는 SCSS 및 CSS 라이브러리. 디자인과 개발 과정에서 일관된 색상 체계를 사용할 수 있도록 다양한 색상의 세트를 제공. Open-Color는 주로 UI 디자인에 사용되며, 쉽게 접근할 수 있는 변수를 통해 개발자와 디자이너가 쉽게 색상을 적용할 수 있도록 해줌.
- **접근성**: 색상은 접근성을 고려하여 구성되어 있어, 시각적으로 구분하기 쉬움.
- **사용 용이성**: SCSS 변수 또는 CSS 커스텀 프로퍼티로 제공되므로, 프로젝트에 쉽게 통합할 수 있음.

#### Include-Media

- Include-Media는 반응형 디자인을 구현할 때 사용하는 SCSS 믹스인 라이브러리입니다. 복잡한 미디어 쿼리를 간단한 문법으로 작성할 수 있게 해주며, 가독성 높은 코드로 반응형 디자인을 쉽게 구현할 수 있도록 도와줌.
- **간결한 문법**: 미디어 쿼리의 조건을 간단한 표현으로 작성할 수 있음.
- **커스터마이징**: 프로젝트의 요구 사항에 맞게 미디어 쿼리의 브레이크포인트를 쉽게 설정할 수 있음.
- **재사용성**: 반복적인 미디어 쿼리의 사용을 줄이고, 유지 보수를 용이하게 함.

#### Classnames

- classnames는 JavaScript에서 조건부로 클래스 이름을 결합하기 위한 유용한 라이브러리. React와 같은 컴포넌트 기반 라이브러리나 프레임워크에서 동적 클래스 이름을 다룰 때 특히 유용함. 이 라이브러리를 사용하면 복잡한 조건문 없이도 간결하고 읽기 쉬운 방식으로 클래스 이름을 결정할 수 있음.

- classnames 함수는 여러 인자를 받을 수 있으며, 각 인자는 문자열, 객체, 또는 배열이 될 수 있음. 객체를 사용할 경우, 키는 클래스 이름을 나타내며, 값이 true일 때 해당 클래스가 결과에 포함됨.

```javascript
import React from "react";
import classNames from "classnames";

function Button({ primary, children }) {
  // primary prop에 따라 버튼 스타일 결정
  const buttonClass = classNames({
    btn: true, // 기본 클래스, 항상 포함
    "btn-primary": primary, // primary가 true일 때만 포함
    "btn-secondary": !primary, // primary가 false일 때만 포함
  });

  return <button className={buttonClass}>{children}</button>;
}

export default Button;
```

## 10. 일정 관리 앱 애플리케이션 만들기

### props

#### 개념

- React에서 props는 properties의 줄임말로, 컴포넌트 간에 데이터를 전달하는 방법. props는 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용되며, 주로 컴포넌트의 재사용성을 높이고, 유지 보수를 용이하게 하는 데 기여함. props는 읽기 전용이며, 컴포넌트 내에서는 수정할 수 없음.

#### 작동방식

- 부모 컴포넌트에서 자식 컴포넌트로 props를 전달.
- 자식 컴포넌트는 전달받은 props를 사용하여 렌더링하거나 다른 로직을 처리.
- props는 객체 형태로 전달되며, 자식 컴포넌트에서는 이 객체의 속성을 통해 전달받은 데이터에 접근할 수 있음.

#### 예제

- App.js

```javascript
import React from "react";
import Greeting from "./Greeting";

const App = () => {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
};

export default App;
```

- Gretting.js

```javascript
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

### 라이브러리

#### react-icons

- React 프로젝트에서 사용할 수 있는 아이콘 라이브러리. 이 라이브러리는 Font Awesome, Material Design Icons, Typicons, GitHub Octicons 등과 같은 여러 인기 있는 아이콘 세트를 포함하고 있음. react-icons를 사용하면, 이러한 다양한 아이콘 세트에서 필요한 아이콘을 쉽게 찾아 React 컴포넌트로 가져와서 사용할 수 있음.
- **다양한 아이콘 세트 지원**: Font Awesome, Material Icons, Ionicons 등 여러 인기 있는 아이콘 라이브러리에서 아이콘을 사용할 수 있음.
- **SVG 기반**: 모든 아이콘은 SVG 형식으로 제공되므로, 크기 조정이 자유롭고, 화질 저하 없이 깨끗한 이미지를 유지할 수 있음.
- **트리 쉐이킹(Tree Shaking) 지원**: 필요한 아이콘만 번들(bundle)에 포함되므로, 애플리케이션의 최종 파일 크기를 줄일 수 있음.

```javascript
import { FaCoffee } from "react-icons/fa";

const MyComponent = () => {
  return <FaCoffee />;
};
```

## 11. 컴포넌트 성능 최적화

### 크롬 개발자 콘솔에서 Performance 녹화로 성능 체크

1. **크롬 개발자 도구 열기**: 원하는 페이지에서 우클릭 후 '검사'를 선택하거나, 단축키 (Windows/Linux의 경우 Ctrl+Shift+I, macOS의 경우 Cmd+Opt+I)를 사용해 개발자 도구를 오픈.
2. **Performance 탭으로 이동**: 상단 탭에서 'Performance'를 선택.
3. **녹화 시작**: 녹화 버튼(작은 원 모양)을 클릭하여 성능 데이터의 녹화를 시작. 페이지를 새로고침하거나 특정 동작을 수행하여 분석하고자 하는 작업을 실행.
4. **녹화 중지**: 분석할 동작이 끝나면, 녹화 중지 버튼(녹화 시작 버튼 옆의 사각형 모양)을 클릭.
5. **성능 데이터 분석**: 녹화가 완료되면 타임라인, 프레임 레이트, 자바스크립트 실행 시간 등 다양한 성능 지표를 확인할 수 있음. 이를 통해 성능 병목을 식별하고 최적화할 수 있음.

### export default React.memo()

- React.memo는 컴포넌트의 리렌더링 성능을 최적화하기 위한 고차 컴포넌트(Higher Order Component, HOC). React.memo로 감싼 컴포넌트는 props 변경이 없으면 리렌더링되지 않음. 즉, 동일한 props로는 이전에 렌더링된 결과를 재사용함. 이 방식은 특히 리스트와 같이 데이터가 변경되지 않는 많은 수의 컴포넌트를 렌더링해야 할 때 유용함.

- `export default React.memo(MyComponent);`로 컴포넌트를 내보내면, 이 컴포넌트를 사용하는 곳에서는 메모이제이션이 적용된 버전의 컴포넌트를 받게 됨. 이는 컴포넌트의 불필요한 리렌더링을 방지하여 애플리케이션의 성능을 개선할 수 있음.

- 예제

```javascript
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

## 12. immer를 사용하여 더 쉽게 불변성 유지하기

### 불변성(Immutability)

- React에서 불변성(Immutability)은 데이터가 변경될 때 기존의 데이터를 수정하지 않고, 새로운 데이터를 생성하여 사용하는 개념. 불변성을 지키는 것은 React의 재렌더링 성능 최적화에 중요한 역할을 함. React는 컴포넌트의 상태(state)나 속성(props)이 변경되었는지 확인하기 위해 이전 상태와 비교하는데, 불변성을 유지하면 이 비교 과정을 효율적으로 만들 수 있음.

- 불변성을 지키지 않는 예

```javascript
const myArray = [1, 2, 3];
myArray.push(4); // myArray를 직접 변경
```

- 불변성을 지키는 예

```javascript
const myArray = [1, 2, 3];
const newArray = [...myArray, 4]; // 새 배열을 생성하여 변경
```

- 불변성이 중요한 이유

> - **변경 감지 용이성**: React와 같은 라이브러리나 프레임워크에서는 컴포넌트의 상태가 변경되었을 때, 이를 감지하고 해당 컴포넌트를 다시 렌더링. 객체의 불변성을 유지하면, 단순한 비교(얕은 비교)로 객체의 변경 여부를 판단할 수 있음. 즉, 객체의 참조가 변경되었다는 것은 내용이 변경되었다는 명확한 신호가 됨. 반면에 객체 내부를 직접 변경하면, 변경 사항을 감지하기 위해 객체의 깊은 비교(객체 내부까지 비교)를 해야 하며, 이는 성능 저하를 초래할 수 있음.

> - **순수 함수와의 호환성**: 순수 함수는 동일한 입력에 대해 항상 동일한 출력을 반환하며, 외부 상태를 변경하지 않고 부작용(side effects)이 없는 함수. 불변성을 유지하면 함수가 외부 상태를 변경하지 않으므로 순수 함수의 조건을 만족시킴. 이는 코드의 예측 가능성과 재사용성을 높여줌.

> - **프로그램의 안정성 향상**: 데이터를 직접 변경하지 않고 새로운 객체를 생성함으로써, 원본 데이터가 의도치 않게 변경되는 것을 방지할 수 있음. 이는 특히 여러 컴포넌트에서 같은 데이터를 참조할 때 중요함. 하나의 컴포넌트에서 데이터를 변경하면, 그 변경 사항이 다른 컴포넌트에도 영향을 미치게 되어 버그가 발생할 수 있음. 불변성을 유지함으로써 이러한 문제를 방지할 수 있음.

### 라이브러리

#### immer

- **개념**: Immer는 JavaScript의 불변성을 쉽게 관리할 수 있도록 도와주는 라이브러리. React 개발에서 상태 관리를 할 때 불변성을 유지하는 것이 중요하지만, 복잡한 상태 객체나 배열을 직접 수정하지 않고 새로운 상태를 생성하는 것은 번거로울 수 있음. 이때 Immer를 사용하면 기존의 변경 가능한 방식으로 코드를 작성하되, 내부적으로는 불변성을 유지한 새로운 상태를 생성해줌.

- **특징**

  > - **간결한 코드**: 복잡한 상태 업데이트 로직을 보다 간결하게 작성할 수 있음. Immer를 사용하면 불변성을 직접 관리하는 복잡한 코드 없이 상태를 업데이트할 수 있음.
  > - **성능 최적화**: Immer는 내부적으로 변경 사항을 추적하여 필요한 부분만 업데이트. 이는 큰 데이터 구조를 다룰 때도 성능을 유지하는 데 도움이 됨.
  > - **사용 용이성**: Immer는 사용하기 쉬우며, 기존의 JavaScript 지식을 그대로 활용할 수 있어 학습 곡선이 낮음.

- **예제 코드**

```javascript
import produce from "immer";

const initialState = { name: "John", age: 25 };

const nextState = produce(initialState, (draftState) => {
  draftState.age = 26;
});
```

## 13. 리액트 라우터로 SPA 개발하기

useLocation 훅: 이 훅은 현재 브라우저의 위치(location) 객체를 반환합니다. 위치 객체에는 현재 URL의 경로(pathname), 검색 쿼리(search), 해시(hash) 등의 정보가 포함되어 있습니다. useLocation을 사용하면 컴포넌트 내에서 URL의 변경을 감지하고, URL의 특정 부분에 따라 다른 작업을 수행할 수 있습니다.

useNavigate 훅: useNavigate는 프로그래밍 방식으로 다른 경로로의 이동을 처리할 수 있는 함수를 반환합니다. 이 함수를 사용하여 사용자를 다른 페이지로 리디렉션하거나, 브라우저의 이전/다음 페이지로 이동하는 등의 네비게이션 작업을 수행할 수 있습니다. useNavigate 함수는 경로를 인자로 받아 해당 경로로 이동시키며, 추가 옵션을 통해 이동 방식을 더 세밀하게 제어할 수 있습니다.

### 라이브러리

#### react-router-dom

- 개념

  > - react-router-dom은 React 애플리케이션에서 클라이언트 사이드 라우팅을 구현하기 위한 표준 라이브러리입니다. 이 라이브러리를 사용하면, 싱글 페이지 애플리케이션(SPA)에서 다양한 뷰를 쉽게 조작하고, URL에 따라 컴포넌트를 렌더링하거나 데이터를 변경하는 등의 작업을 할 수 있습니다. react-router-dom은 웹 브라우저 환경에 특화된 라우팅 기능을 제공합니다.

- 주요 컴포넌트 및 기능

  > - **`<BrowserRouter>`**: HTML5의 history API를 사용하여 UI를 URL과 동기화하는 라우터. 대부분의 웹 애플리케이션에서 사용됨.
  > - **`<Route>`**: 특정 URL에 매치될 때만 UI를 렌더링하는 컴포넌트. path prop으로 어떤 경로에서 컴포넌트를 렌더링할지 지정.
  > - **`<Switch>`**: 여러 `<Route>` 컴포넌트 중에서 가장 먼저 매치되는 경로의 컴포넌트만 렌더링. React Router v5까지 사용되었으며, v6부터는 `<Routes>` 컴포넌트로 대체되었음.
  > - **`<Link>`**: 클릭 시 다른 주소로 이동할 수 있는 링크를 생성. `<a>` 태그와 비슷하지만, 페이지를 새로고침하지 않고 라우터 내에서 뷰를 변경.
  > - **`<NavLink>`**: `<Link>`와 유사하지만, 현재 경로와 매치될 때 스타일이나 클래스를 추가할 수 있는 컴포넌트.
  > - **useHistory, useLocation, useParams, useRouteMatch 등의 Hooks**: 라우터의 상태에 접근하거나 조작할 수 있는 React Hooks. React Router v5에서 도입되었으며, v6에서는 일부 API가 변경되었음.

- React Router v6의 변경점

  > - **`<Routes>` 컴포넌트 도입**: `<Switch>` 컴포넌트는 `<Routes>`로 대체되었음. `<Routes>`는 내부의 `<Route>` 컴포넌트들 사이에서 더 나은 매칭 로직을 제공.
  > - **element prop의 사용**: v6에서는 `<Route>` 컴포넌트가 component 또는 render prop 대신 element prop을 사용하여 렌더링할 컴포넌트를 지정. element prop에는 JSX가 직접 전달됨.
  > - **Nested Routes**: v6에서는 경로의 중첩을 더 쉽게 구현할 수 있도록 `<Route>` 컴포넌트의 중첩을 통해 자식 라우트를 정의할 수 있음.

- React Router v6에서 주로 사용하는 Hook

> - **useLocation**: URL의 위치(경로, 쿼리 문자열 등)에 대한 정보를 제공.

```javascript
const location = useLocation();
console.log(location.pathname); // 현재 경로명을 출력
```

> - **useNavigate**: 프로그래매틱하게 다른 경로로 이동할 수 있게 해줌.

```javascript
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return <button onClick={goToHome}>홈으로 가기</button>;
};
```

> - **useParams**: URL 파라미터(동적 세그먼트)에 접근할 수 있게 해줌. 예를 들어, /user/:id 경로에서 id 값을 가져올 수 있음.

```javascript
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // /user/123 경로에서 '123'을 id로 가져옴
  return <div>사용자 프로필 ID: {id}</div>;
};
```

> - **useRoutes**: 라우트 구성을 기반으로 라우트 요소를 동적으로 생성. 보통 대규모 애플리케이션에서 라우트를 외부 파일로 분리할 때 유용함.

```javascript
import { useRoutes } from "react-router-dom";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
];

const App = () => {
  const element = useRoutes(routes);
  return <div>{element}</div>;
};
```

### qs

- 개념

  > - qs 라이브러리는 Node.js 환경에서 쿼리 스트링을 파싱하고 문자열화하기 위한 유틸리티. 쿼리 스트링은 URL의 일부로, 클라이언트에서 서버로 데이터를 전송할 때 사용되는 키-값 쌍의 집합. qs 라이브러리는 복잡한 객체 구조를 쿼리 스트링으로 변환하거나, 쿼리 스트링을 객체로 파싱하는 기능을 제공. 이는 웹 개발에서 데이터를 전송하거나 받을 때 유용하게 사용됨.

- 주요 기능

  > - 파싱: URL의 쿼리 스트링 부분을 객체로 변환.
  > - 문자열화: 객체를 쿼리 스트링 형태로 변환.
  > - 처리 옵션: 배열, 중첩 객체 등 복잡한 데이터 구조를 처리할 수 있는 다양한 옵션을 제공.

- 예제 코드: 쿼리 스트링 파싱

```javascript
const qs = require("qs");

const query = "name=John Doe&age=23";
const parsed = qs.parse(query);

console.log(parsed);
// 출력: { name: 'John Doe', age: '23' }
```

- 예제 코드: 객체를 쿼리 스트링으로 변환

```javascript
const qs = require("qs");

const obj = { name: "John Doe", age: 23 };
const stringified = qs.stringify(obj);

console.log(stringified);
// 출력: 'name=John+Doe&age=23'
```

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
