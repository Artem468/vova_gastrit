import "./Header.css"
import logo from "./assets/Website_banner 4.png"
import fish from "./assets/fish_1.svg"
import carrot from "./assets/carrot.png"
import bottle from "./assets/bottle.svg"
import meat from "./assets/meat.svg"
import table from "./assets/table.svg"
import bg from "./assets/bg.png"
import img1 from "./assets/DSC03710 1.png"
import img2 from "./assets/1Z5A5988.png"
import img3 from "./assets/DSC08926.png"
import img4 from "./assets/кирилл_фартук 1.png"
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"

function Header() {
    return (
        <header>
            <div className="bgHeader"><img src={bg} alt="logo"/></div>

            <div className="headerItem">
                <nav>
                    <div className="circleLogo">
                        <img src={logo} alt="logo"/>
                        <p>healthy ration</p>
                    </div>
                    <a href="">Программы питания</a>
                    <a href="">Бизнес ланчи</a>
                    <a href="">Gastro shop</a>
                    <a href="">О нас</a>
                    <a href="">Блог</a>
                </nav>
                <div>
                    <p>+38 (068) 949 - 49 -19</p>
                </div>
            </div>
            <div className="headerLanguages">
                <button>RU</button>
                <button>UA</button>
                <button>EN</button>
            </div>
            <div className="leftSide">
                <button>
                    <p>Ккал</p>
                    <span>Говно</span>
                </button>
                <button>
                    <img src={fish} alt=''/>
                    <span>Fish</span>
                </button>
                <button>
                    <img src={carrot} alt=''/>
                    <span>Carrot</span>
                </button>
                <button>
                    <img src={bottle} alt=''/>
                    <span>Bottle</span>
                </button>
                <button>
                    <img src={meat} alt=''/>
                    <span>Meat</span>
                </button>
                <button>
                    <div>
                        <p>5</p>
                        <img src={table} alt=''/>
                    </div>
                    <span>Table</span>
                </button>
            </div>
            <section>
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="HeaderSwiper"
                    slidesPerView={1}
                    spaceBetween={50}>
                    <SwiperSlide>
                        <div className="headerSwiperItem">
                            <div className="headerSwiperItemText">
                                <p>Detox программа – <span>вкусное очищение</span> организма</p>
                                <p>8 бутылочек <span>натуральных</span> смузи и фрешей.</p>
                                <div>
                                    <button>Заказать</button>
                                    <div>
                                        <p>Пробный день всего:</p>
                                        <span>427 грн</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={img1} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="headerSwiperItem">
                            <div className="headerSwiperItemText">
                                <p>Detox программа – <span>вкусное очищение</span> организма</p>
                                <p>8 бутылочек <span>натуральных</span> смузи и фрешей.</p>
                                <div>
                                    <button>Заказать</button>
                                    <div>
                                        <p>Пробный день всего:</p>
                                        <span>427 грн</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={img2} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="headerSwiperItem">
                            <div className="headerSwiperItemText">
                                <p>Detox программа – <span>вкусное очищение</span> организма</p>
                                <p>8 бутылочек <span>натуральных</span> смузи и фрешей.</p>
                                <div>
                                    <button>Заказать</button>
                                    <div>
                                        <p>Пробный день всего:</p>
                                        <span>427 грн</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={img3} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="headerSwiperItem">
                            <div className="headerSwiperItemText">
                                <p>Detox программа – <span>вкусное очищение</span> организма</p>
                                <p>8 бутылочек <span>натуральных</span> смузи и фрешей.</p>
                                <div>
                                    <button>Заказать</button>
                                    <div>
                                        <p>Пробный день всего:</p>
                                        <span>427 грн</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={img4} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </header>
    )
}

export default Header;