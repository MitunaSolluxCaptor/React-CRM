import React, { useRef } from 'react';
import './styles/Global.css';
import './styles/LoginPage.css';


function LoginPanel(props) {

    const login = useRef(null);
    const password = useRef(null);

    const submit = async () => {
        const curLoggin = login.current.state.val;
        const curPassword = password.current.state.val;

        if (curLoggin === "") {
            login.current.setState({ invalidMessage: "Необходимо указать значение" });
            password.current.setState({ invalidMessage: "" });
        } else if (curPassword === "") {
            login.current.setState({ invalidMessage: "" });
            password.current.setState({ invalidMessage: "Необходимо указать значение" });
        }
        else {
            login.current.setState({ invalidMessage: "" });
            password.current.setState({ invalidMessage: "" });

            const headers = new Headers();
            headers.set("Content-Type", "application/json");

            const body = JSON.stringify(btoa(curLoggin + "/" + curPassword));

            const options = {
                method: 'POST',
                headers: headers,
                body: body
            };

            const result = await fetch("api/account", options);
            if (result.ok) {
                const answ = await result.text();
                if (answ === "") {
                    localStorage.setItem("IsAuthenticated", true);
                    window.location = "https://localhost:44416/";
                } else {
                    alert(answ);
                }
            }
        }
    }

    return (
        <div className="authorizate-panel">
            <div id="Logo" className="logo"></div>
            <Input valLable="Логин" ref={login} />
            <Input type="password" valLable="Пароль" ref={password} />
            <div>
                <button className="button" onClick={submit}>{props.buttonLabel}</button>
            </div>
        </div>
    );
}
LoginPanel.defaultProps = { buttonLabel: "ВОЙТИ" };

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: "", invalidMessage: "" };
    }
    onChange = (e) => {
        var _val = e.target.value;
        this.setState({ val: _val });
        this.setState({ invalidMessage: "" });
    }
    render() {
        return (
            <div className="vertical-input">
                <input type={this.props.type} className="input" placeholder={this.props.valLable} onChange={this.onChange} value={this.state.val}></input>
                <span className="validate-error">{this.state.invalidMessage}</span>
            </div >
        );
    };
}
Input.defaultProps = { type: "Text", valLable: ""};

export default LoginPanel;