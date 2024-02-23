import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 기존의 리듀서를 하나로 처리
const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
