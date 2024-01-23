import { Component, useState, useRef, useEffect } from "react";
import "./styles/LeftNavigatePanel.css"

function LeftNavigatePanel() {
    const menuConfig = [
        {
            name: "Администратор",
            sections: [
                {
                    name: "Контакты",
                    href: ""
                },
                {
                    name: "Контрагенты",
                    href: "https://localhost:44416/Nui/AccountSection"
                },
                {
                    name: "Обращения",
                    href: ""
                },
                {
                    name: "Заказы",
                    href: ""
                }
            ]
        },
        {
            name: "Общее",
            sections: [
                {
                    name: "Обращения",
                    href: ""
                },
                {
                    name: "Заказы",
                    href: ""
                }
            ]
        }
    ];

    const [isFullMod, switchMode] = useState(false);
    const [selectedWorkspace, setWorkspace] = useState(menuConfig[0]);

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
                    <Workspace menuConfig={menuConfig} setWorkspace={setWorkspace} isFullMod={isFullMod} />
                </div>
                <div className={bodyClassName}>
                    <Menu selectedWorkspace={selectedWorkspace} isFullMod={isFullMod} />
                </div>
            </div>
        </>
    );
}

export default LeftNavigatePanel;

function Workspace({ menuConfig, setWorkspace, isFullMod }) {

    const [isOpen, setIsOpen] = useState(false);
    const [workspaceConfig, setWorkspaceConfig] = useState(menuConfig[0]);
    useEffect(() => {
        setWorkspace(workspaceConfig);
    });

    if (!isFullMod) return;


    let containerClassName = "workspace-container";
    if (isOpen)
        containerClassName += " workspace-active-container";

    const onClose = () => {
        setIsOpen(false);
    }
    return (
        <div className={containerClassName} >
            <div className="workspace-placeholder" onClick={() => setIsOpen((v) => !v)}>
                <label>{workspaceConfig.name}</label>
            </div>
            <WorkspaceMenu isOpen={isOpen} onClose={onClose} menuConfig={menuConfig} setWorkspaceConfig={setWorkspaceConfig} />
        </div>
    );
}
function WorkspaceMenu({ isOpen, onClose, menuConfig, setWorkspaceConfig }) {
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
    for (let i = 0; i < menuConfig.length; i++) {
        items.push(<WorkspaceItem
            key={i}
            itemConfig={menuConfig[i]}
            setWorkspaceConfig={setWorkspaceConfig}
            onClose={onClose}
        />);
    }

    return (
        <div ref={menuRef} className="workspace-menu">
            {items}
        </div>
    );
}

function WorkspaceItem({ itemConfig, setWorkspaceConfig, onClose }) {

    const onClick = () => {
        setWorkspaceConfig(itemConfig);
        onClose();
    }

    return (
        <>
            <div className="workspace-item" onClick={onClick}>
                <label onClick={onClick}>{itemConfig.name}</label>
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
        for (let i = 0; i < this.props.selectedWorkspace.sections.length; i++) {
            menu.push(<MenuItem
                key={i}
                itemConfig={this.props.selectedWorkspace.sections[i]}
                isFullMod={this.props.isFullMod}
            />);
        }
        return (
        <>
            {menu}
        </>
        );
    };
}

function MenuItem({ itemConfig, isFullMod }) {
    const menuItem = [];
    menuItem.push(<div key="0" className="menu-item-image" ></div >);

    if (isFullMod)
        menuItem.push(<div key="1" className="menu-item-content" > {itemConfig.name}</div >);

    return (
        <>
            <div className="menu-item-container" onClick={() => { if (itemConfig.href && itemConfig.href !== "") window.location = itemConfig.href; }}>
                {menuItem}
            </div>
        </>
    );
};