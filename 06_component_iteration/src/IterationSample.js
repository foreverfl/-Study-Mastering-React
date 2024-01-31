import React, { useState } from 'react'

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '이 추하고도 아름다운 세계' },
        { id: 2, text: '나루토' },
        { id: 3, text: '미도리의 나날' },
        { id: 4, text: '마법소녀 마도카 마기카' },
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        // names 배열에 새로운 요소를 추가하기 위한 임시 배열
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }


    const nameList = names.map((name) => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;