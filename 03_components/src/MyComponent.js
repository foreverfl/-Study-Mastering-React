import PropTypes from 'prop-types'

const MyComponent = props => {
    const { name, favoriteNum, children } = props; // 비구조화 할당
    return (
        <>
            {/* 아무 값이 없으면 defaultProps가 사용됨 */}
            <div>안녕하세요, 제 이름은 {name}입니다.</div>
            {/* children은 부모에서 태그 사이의 값을 보여줌 */}
            <div>children 값은 {children}입니다.</div>
            <div>제가 좋아하는 숫자는 {favoriteNum}입니다.</div >
        </>
    )
};

// 해당 컴포넌트에 어떤 props가 필요한지 알려줌으로써 협업을 쉽게 해줌
MyComponent.defaultProps = {
    name: 'default name'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.number.isRequired

};

export default MyComponent