import Left from "./Left";
import "./Main.css";
import RightBottom from "./RightBottom";
import RightMiddle from "./RightMiddle";
import RightTop from "./RightTop";

const Main = () => {
    return (
        <div className="main">
            <div className="left">
                <Left />
            </div>
            <div className="right">
                <RightTop />
                <RightMiddle />
                <RightBottom />
            </div>
        </div>
    );
};

export default Main;