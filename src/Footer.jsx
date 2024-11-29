import logo from './assets/Website_banner 4.png';
import instagram from './assets/Mask Group(3).png';
import telegram from './assets/Mask Group(1).png';
import facebook from './assets/Mask Group.png';
import whatsapp from './assets/Mask Group(2).png';
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className="left">
                <a href="">Програмы питания</a>
                <a href="">О нас</a>
                <a href="">Бизнес-ланчи</a>
                <a href="">Gastro Shop</a>
                <a href="">Блог</a>
            </div>
            <div className="middle">
                <img src={logo} alt=""/>
                <p>сервис здорового питания</p>
            </div>
            <div className="right">
                <a href="">Условия сотрудничества</a>
                <a href="">FAQ</a>
                <div>
                    <img src={instagram} alt=""/>
                    <img src={telegram} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={whatsapp} alt=""/>
                </div>
                <p>+38 (068) 949 - 49 - 19</p>
            </div>
        </footer>
    )
}

export default Footer;