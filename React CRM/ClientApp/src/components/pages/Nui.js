import LeftNavigatePanel from "../Nui/LeftNavigatePanel";
import MainFrame from "../Nui/MainFrame";
import RightPanel from "../Nui/RightPanel";

function Nui() {
    if (!JSON.parse(localStorage.getItem("IsAuthenticated"))) {
        window.location = "https://localhost:44416/login";
    } else {
        return (
            <div className="main">
                <RightPanel />
                <div className="main-frame">
                    <LeftNavigatePanel />
                    <MainFrame />
                </div>
            </div>
        );
    }
}
export default Nui