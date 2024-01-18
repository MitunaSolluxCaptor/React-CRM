import { useState } from "react";
import Menu from "../common/Menu";
import "./styles/SectionHeader.css"

function SectionHeader() {
    const menuConfig = {
        className: "section-action-item-container",
        items: [{
            menuItem: <div className="section-action-item">123321</div>,
            menuItemName: "123321"
        },
        {
            menuItem: <div className="section-action-item">321123</div>,
            menuItemName: "321123"
        }]
    };
    const [isOpen, setIsOpen] = useState(false);
    const [itemConfig, setItemConfig] = useState(menuConfig.items[0]);

    const onClose = () => {
        setIsOpen(false);
    }
    menuConfig.isOpen = isOpen;
    menuConfig.onClose = onClose;
    menuConfig.setChose = setItemConfig;

    return (
        <div className="header-container">
            <div className="right-header-section">
                <label className="section-caption">Контрагенты</label>
                <div className="action-container">
                    <button className="button add-button">Добавить контрагент</button>
                    <div className="section-action-caption" onClick={() => setIsOpen((v) => !v)}>
                        <label>name</label>
                    </div>
                    <Menu menuConfig={menuConfig} />
                </div>
            </div>
            <div className="middle-header-section"></div>
            <div className="left-header-section"></div>
        </div>
    );
}

export default SectionHeader;