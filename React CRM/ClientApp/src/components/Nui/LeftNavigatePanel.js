import { Component, useState, useRef, useEffect } from "react";
import "./styles/LeftNavigatePanel.css"

function LeftNavigatePanel() {
    const [isFullMod, switchMode] = useState(false);
    let containerClassName = "short-left-navigate-container navigate-container";
    let buttonClassName = "switch-menu-mod";
    let bodyClassName = "navigate-menu-body";
    if (isFullMod) {
        containerClassName = "left-navigate-container navigate-container";
        buttonClassName += " reverse";
        bodyClassName +=" navigate-menu-body-short";
    } 
    return (
        <>
            <div className={containerClassName}  >
                <div className="navigate-menu-header">
                    <div className="navigate-menu-toolbar">
                        <div>
                            <button className={buttonClassName} onClick={() => switchMode((m) => !m)}></button>
                        </div>
                    </div>
                    <Workspace isFullMod={isFullMod} />
                </div>
                <div className={bodyClassName}>
                    <Menu buttonCount="5" isFullMod={isFullMod} />
                </div>
            </div>
        </>
    );
}

export default LeftNavigatePanel;

function Workspace({ isFullMod }) {

    const [isOpen, setIsOpen] = useState(false);

    if (!isFullMod) return;

    let placeholderLabel = "holder";

    let menu = [];
    for (let i = 0; i < 5; i++) {
        menu.push(<WorkspaceItem />);
    }

    let containerClassName = "workspace-container";
    if (isOpen)
        containerClassName += " workspace-active-container";

    const onClose = () => {
        setIsOpen(false);
    }
    return (
        <div className={containerClassName} >
            <div className="workspace-placeholder" onClick={() => setIsOpen((v) => !v)}>
                <label>{placeholderLabel}</label>
            </div>
            <WorkspaceMenu isOpen={isOpen} onClose={onClose} />
        </div>
    );
}
function WorkspaceMenu({ isOpen, onClose }) {
    const menuRef = useRef(null);
    useEffect(() => {
        if (!isOpen) return;

        const handleClick = (e) => {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target))
                onClose();
        };

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [isOpen, onClose]);
    if (!isOpen) return null;

    let items = [];
    for (let i = 0; i < 5; i++) {
        items.push(<WorkspaceItem key={i} itemTitle={"Some Workspace " + (i + 1)} />);
    }

    return (
        <div ref={menuRef} className="workspace-menu">
            {items}
        </div>
    );
}

function WorkspaceItem(props) {
    return (
        <>
            <div className="workspace-item">
                <label>{props.itemTitle}</label>
            </div>
        </>
    );
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    render() {
        let menu = [];
        for (let i = 0; i < this.props.buttonCount; i++) {
            menu.push(<MenuItem key={i} itemKey={i} isFullMod={this.props.isFullMod} />);
        }
        return (
        <>
            {menu}
        </>
        );
    };
}

function MenuItem(props) {
    let content = "";
    if (props.isFullMod)
        content = "Menu item " + (props.itemKey + 1);

    if(props)
        return (
            <>
                <div className="menu-item-container">
                    <div className="menu-item-image"></div>
                    <div className="menu-item-content">{content}</div>
                </div>
            </>
        );
};