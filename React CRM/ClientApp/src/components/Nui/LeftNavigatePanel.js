import { Component, useState } from "react";
import "./styles/LeftNavigatePanel.css"

function LeftNavigatePanel() {
    const [mod, switchMode] = useState(false);
    
    return (
        <>
            <div className="left-navigate-container">
                <div className="navigate-menu-header">
                    <button className="switch-menu-mod" onClick={() => switchMode((m) => !m)}>Colapse</button>
                </div>
                <div className="navigate-menu-body">
                    <Menu buttonCount="5" />
                </div>
            </div>
        </>
    );
}
export default LeftNavigatePanel;

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        let menu = [];
        for (let i = 0; i < this.props.buttonCount; i++) {
            menu.push(<div key={i}>menu</div>);
        }
        return (
        <>
            {menu}
        </>
        );
    };
}