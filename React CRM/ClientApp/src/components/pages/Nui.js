import LeftNavigatePanel from "../Nui/LeftNavigatePanel";
import RightPanel from "../Nui/RightPanel";

function Nui() {
    if (!JSON.parse(localStorage.getItem("IsAuthenticated"))) {
        window.location = "https://localhost:44416/login";
    } else {
        return (
            <>
                <RightPanel />
                <div className="main-frame">
                    <LeftNavigatePanel />
                    123
                    <button onClick={function () {
                        localStorage.setItem("IsAuthenticated", false);
                        window.location = "https://localhost:44416/login";
                        }}>Выйти</button>
                </div>
            </>
        );
    }
}
export default Nui