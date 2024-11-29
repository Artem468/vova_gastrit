import "./Schedule.css"
import img1 from "./assets/eco.svg"
import img2 from "./assets/Group 213.svg"
import img3 from "./assets/time.svg"
import img4 from "./assets/night.svg"
import img5 from "./assets/Group 215.svg"
import img6 from "./assets/Group 214.svg"


function Schedule() {
    return (
        <section className="Schedule">
            <div className="ScheduleUp">
                <div>
                    <img src={img1} alt=""/>
                    <p>Бережём природу. Эко-тара и проборы.</p>
                </div>
                <div>
                    <img src={img2} alt=""/>
                    <p>28 дней без повторения, более 300 блюд!</p>
                </div>
                <div>
                    <img src={img3} alt=""/>
                    <p>Бесплатно заменяем блюда и ингредиенты.</p>
                </div>
                <div>
                    <img src={img4} alt=""/>
                    <p>Готовим ночью, упаковываем и отправляем Вам!</p>
                </div>
                <div>
                    <img src={img5} alt=""/>
                    <p>Ежедневная удобная и бесплатная доставка с 6:00 до 10:00</p>
                </div>
                <div>
                    <img src={img6} alt=""/>
                    <p>Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!</p>
                </div>
            </div>

            <div className="eatPrograms">
                <div className="eatProgramsSelector">
                    <button className="active">Программы питания</button>
                    <button>Специальные программы</button>
                </div>
                <div className="eatProgramsCategories">
                    <div>
                        <p>EXPRESS FIT</p>
                        <p>800 ккал</p>
                    </div>
                    <div>
                        <p>SLIM</p>
                        <p>1000 ккал</p>
                    </div>
                    <div>
                        <p>FITNESS</p>
                        <p>1300 ккал</p>
                    </div>
                    <div>
                        <p>BALANCE</p>
                        <p>1600 ккал</p>
                    </div>
                    <div>
                        <p>BALANCE +</p>
                        <p>1800 ккал</p>
                    </div>
                    <div>
                        <p>STRONG</p>
                        <p>2000 ккал</p>
                    </div>
                    <div>
                        <p>MAXI FIT</p>
                        <p>2400 ккал</p>
                    </div>
                </div>
                <div className="fitnessProgram">
                    <div className="fitness">
                        <div>
                            <p>Fitness</p>
                            <p>1300 калл</p>
                        </div>
                        <p>Программа здорового питания Express Fit. Идеально для: похудения в кратчайшие сроки,
                            повышения энергии и сил, снижения веса при сидячем образе жизни.</p>
                    </div>

                    <div className="days">
                        <p>ПН</p>
                        <p>ВТ</p>
                        <p>СР</p>
                        <p>ЧТ</p>
                        <p>ПТ</p>
                        <p>СБ</p>
                        <p>ВС</p>
                    </div>
                    <div className="prices">
                        <div>
                            <p>Тестовый день</p>
                            <p>510 грн</p>
                            <p>357 грн</p>
                        </div>
                        <div>
                            <p>1 день</p>
                            <p>510 грн</p>
                        </div>
                        <div>
                            <p>от 7 дней</p>
                            <p>510 грн</p>
                            <p>490 грн</p>
                        </div>
                        <div>
                            <p>от 14 дней</p>
                            <p>510 грн</p>
                            <p>470 грн</p>
                        </div>
                        <div>
                            <p>от 30 дней</p>
                            <p>510 грн</p>
                            <p>445 грн</p>
                        </div>
                        <div>
                            <p>Завтрак и ужин</p>
                            <p>-15%</p>
                            <p>433 грн</p>
                        </div>
                        <div className="buy">
                            <button>Заказать</button>
                        </div>
                    </div>

                    <div className="schedule">
                        <div>
                            <div>
                            <p>Завтрак</p>
                                <p>7:00 - 9:00</p>
                            </div>
                            <div>
                                <p>- Фриттата с сыром и кабачками</p>
                            </div>
                            <div>
                                <p>170гр</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>2-й завтрак</p>
                                <p>10:00 - 12:00</p>
                            </div>
                            <div>
                                <p>- Фриттата с сыром и кабачками</p>
                                <p>- Полезное печенье из сухофруктов и орехов</p>
                            </div>
                            <div>
                                <p>200гр</p>
                                <p>2 шт</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Обед</p>
                                <p>13:00 - 15:00</p>
                            </div>
                            <div>
                                <p>- Люля-кебаб из индейки</p>
                                <p>- Летний салат с маслинами и сыром</p>
                            </div>
                            <div>
                                <p>100гр</p>
                                <p>100гр</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Полдник</p>
                                <p>16:00 - 17:30</p>
                            </div>
                            <div>
                                <p>- Творожное суфле с какао и вишей</p>
                            </div>
                            <div>
                                <p>100гр</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Ужин</p>
                                <p>19:00 - 20:00</p>
                            </div>
                            <div>
                                <p>- Рыбный терен</p>
                                <p>- Овощи гриль</p>
                            </div>
                            <div>
                                <p>100гр</p>
                                <p>150гр</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Schedule;