import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state, // 현재 상태의 복사본을 생성,. immutability를 유지하기 위함.
        [action.name]: action.value // name을 키로, value를 값으로 사용하여 해당 필드를 업데이트
    };
}

const InfoReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;

    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>

            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default InfoReducer;
