import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {

    // 해당 컴포넌트가 지정된 Context의 현재 값을 this.context를 통해 접근 가능하게 됨
    // 이 설정은 클래스 레벨에서 적용되며 모든 인스턴스가 공유가 가능하게 됨
    static contextType = ColorContext;

    // this.context를 활용에 컨텍스트에 접근 후에 actions 객체에서 함수를 호출
    handleSetColor = color => {
        this.context.actions.setColor(color);
    };

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}

                            // 좌클릭
                            onClick={() => this.handleSetColor(color)}

                            // 우클릭
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        );
    }
}

export default SelectColors;
