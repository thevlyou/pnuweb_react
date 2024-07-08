import "./Hello.css"
import MyCom from './MyCom.js'

function Hello() {
    const name = 'PNU';

    return (
        <>
            <div className="hellodiv">{name}님 안녕하세요!</div>
            <div>
                <MyCom />
            </div>
        </>
    );
}

export default Hello;