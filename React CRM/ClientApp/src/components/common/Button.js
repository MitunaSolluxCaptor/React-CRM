import "./styles/Button.css";

function Button({ buttonConfig }) {

    return (
        <button onClick={buttonConfig.onClick} className={buttonConfig.classes}>{buttonConfig.name}</button>
    );
}

export default Button;