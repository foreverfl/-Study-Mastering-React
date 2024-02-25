import { createAction, handleActions } from "redux-actions";

// 액션 타입
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

// 액션 함수
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert 가 호출 될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, input => input);

export const remove = createAction(REMOVE, input => input);

// 초기 상태
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false,
        },
    ],
};

// 리듀서 함수
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => ({
            ...state,
            input, // payload를 input으로 바로 비구조화 할당
        }),
        [INSERT]: (state, { payload: todo }) => ({
            ...state,
            todos: state.todos.concat(todo), // payload를 todo 객체로 바로 비구조화 할당
        }),
        [TOGGLE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo // payload를 id로 바로 비구조화 할당
            ),
        }),
        [REMOVE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id), // payload를 id로 바로 비구조화 할당
        }),
    },
    initialState
);

export default todos;
