import React from "react";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    const handleIncrease = () => {
        increaseAsync(); // 이벤트 객체를 전달하지 않도록 수정
    };

    const handleDecrease = () => {
        decreaseAsync(); // 이벤트 객체를 전달하지 않도록 수정
    };

    return (
        <Counter number={number} onIncrease={handleIncrease} onDecrease={handleDecrease} />
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);