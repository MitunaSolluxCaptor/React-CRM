import { useEffect, useRef } from "react";

function Menu({ menuConfig }) {

    const menuRef = useRef(null);
    const isOpen = menuConfig.isOpen;
    const onClose = menuConfig.onClose;
    const setChose = menuConfig.setChose;

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

    let menu = [];
    for (let i = 0; i < menuConfig.items.length; i++) {
        menu.push(<MenuItem
            key={i}
            className={menuConfig.className}
            itemConfig={menuConfig.items[i]}
            onClose={onClose}
            setChose={setChose}
        />);
    }
    return (
        <>
            {menu}
        </>
    );
}

export default Menu;

function MenuItem({ itemConfig, onClose, setChose }) {
    const onClick = () => {
        setChose(itemConfig);
        onClose();
    }
    return (
        <div onClick={onClick}>
            {itemConfig.menuItem}
        </div>
    );
};