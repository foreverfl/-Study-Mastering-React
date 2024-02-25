import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
    // useSelector 훅을 사용하여 Redux 스토어의 상태 조회
    const number = useSelector(state => state.counter.number);

    // useDispatch 훅을 사용하여 dispatch 함수를 가져옴
    const dispatch = useDispatch();

    // useCallback 훅을 사용하여 컴포넌트의 리렌더링 시 재생성되는 함수를 방지
    const onIncrease = useCallback(() => {
        dispatch(increase());
    }, [dispatch]);

    const onDecrease = useCallback(() => {
        dispatch(decrease());
    }, [dispatch]);

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

export default CounterContainer;