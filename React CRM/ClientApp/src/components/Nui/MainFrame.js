import { Outlet } from "react-router-dom";
import "./styles/MainFrame.css";

function MainFrame() {
    return (
        <div className="home-page">
            <Outlet />
        </div>
    );
}

export default MainFrame;