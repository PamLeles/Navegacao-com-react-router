import './Menu.css'
import React from "react";

const Menu = (props) => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <a to="/">Início</a>
                </li>
                <li>
                    <a to="/about">Sobre</a>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu;