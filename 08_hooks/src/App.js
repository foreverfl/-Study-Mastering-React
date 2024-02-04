import React from 'react';
import Counter from './Counter';
import Info from './Info';
import CounterReducer from './CounterReducer';
import InfoReducer from './InfoReducer';
import Average from './Average';

const App = () => {
  return (
    <div>
      <h1>01. useState / useEffect</h1>
      <Counter />
      <Info />
      <hr></hr>
      <h1>02. useState</h1>
      <CounterReducer />
      <InfoReducer />
      <hr></hr>
      <h1>03. useMemo, useCallback, useRef</h1>
      <Average />
      <hr></hr>
      <h1>04. Custom Hook</h1>
      <hr></hr>
    </div>

  )

}


export default App;
