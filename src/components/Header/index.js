import React from "react";
import "./style.css"
import Logo from "../../assets/logo.png"
export default function Header() {
    return (
        <div className="header">
            <div class="logo">
                <img src={Logo} alt="logo" width={200} height={200}/>
            </div>
            <div className="busca">
                <input />
            </div>
            <div className="botao">
                <button> Login</button>
                <button>Cadastro</button>
            </div>
        </div>


    );
}