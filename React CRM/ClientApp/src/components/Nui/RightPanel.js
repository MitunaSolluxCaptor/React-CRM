import { useEffect, useRef, useState } from "react";
import "./styles/RightPanel.css"

function RightPanel() {

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    }
    return (
        <div className="right-container">
            <div className="profile-container" onClick={() => setIsOpen((v) => !v) }>
                <div className="profile-photo">
                        
                </div>
            </div>
            <ProfileMenu isOpen={isOpen} onClose={ onClose } />
        </div>
    );
}

export default RightPanel;

function ProfileMenu({ isOpen, onClose }) {

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


    const onExitClick = async (e) => {

       const options = {
            method: 'GET',
            headers: new Headers()
        };

        const result = await fetch("api/account", options);

        if (result.ok) {
            localStorage.setItem("IsAuthenticated", false);
            window.location = "https://localhost:44416/";
        }
    }

    return (
        <div ref={menuRef} className="profile-menu">
            <div className="user-name">Username</div>
            <div className="clicable">Настройки</div>
            <div className="clicable" onClick={onExitClick}>Выйти</div>
        </div>
    );
}