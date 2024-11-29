import { useState } from 'react';
import './RadialMenu.css';
import chat from "./assets/chat.svg"
import close from "./assets/closemenu.svg"
import hz1 from "./assets/Mask Group.png"
import hz2 from "./assets/Mask Group(1).png"
import hz3 from "./assets/Mask Group(2).png"
import hz4 from "./assets/Mask Group(3).png"




const RadialMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для открытия меню

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            {/* Центральная кнопка */}
            <button className="central-button" onClick={toggleMenu}>
                {isOpen ? <img src={close} alt=""/> : <img src={chat} alt=""/>}
            </button>

            {/* Окружающие кнопки */}
            <div className={`radial-buttons ${isOpen ? 'open' : ''}`}>
                <button className="radial-button"
                        style={{transform: 'rotate(315deg) translate(-60px, 60px) rotate(45deg)'}}>
                    <img src={hz1} alt=""/>
                </button>
                <button className="radial-button"
                        style={{transform: 'rotate(0deg) translate(-60px, 60px) rotate(0deg)'}}>
                    <img src={hz2} alt=""/>
                </button>
                <button className="radial-button"
                        style={{transform: 'rotate(40deg) translate(-60px, 60px) rotate(-40deg)'}}>
                    <img src={hz3} alt=""/>
                </button>
                <button className="radial-button"
                        style={{transform: 'rotate(80deg) translate(-60px, 60px) rotate(-80deg)'}}>
                    <img src={hz4} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default RadialMenu;