import "./CreateOrder.css"
import arrow from "./assets/Arrow 14.svg"

function CreateOrder() {
    return (
        <section className="createOrder">
            <div className="order">
                <p className="createOrderTitle">Оформить заказ</p>
                <p>Обсудите все детали заказа по телефону или сами укажите все подробности онлайн</p>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Номер телефона"/>
                <div className="checkoutOrder">
                    <input type="checkbox"/>
                    <label>Тест-день! Получить скидку -30%?</label>
                </div>
                <div className="checkoutOrder">
                    <input type="checkbox"/>
                    <label>Согласен с условиями сотрудничества</label>
                </div>
                <div className="orderButtons">
                    <button>Заказать по телефону</button>
                    <p>ИЛИ</p>
                    <button>Онлайн заказ</button>
                </div>
            </div>
            <div className="questions">
                <p>Часто задаваемые вопросы</p>
                <div>
                    <a href="">Как осуществляется доставка правильного питания?</a>
                    <img src={arrow} alt=""/>
                </div>
                <div>
                    <a href="">Можно ли менять время доставки\место?</a>
                    <img src={arrow} alt=""/>
                </div>
                <div>
                    <a href="">Как и в чем приезжает еда?</a>
                    <img src={arrow} alt=""/>
                </div>
                <div>
                    <a href="">Когда Вы готовите?</a>
                    <img src={arrow} alt=""/>
                </div>
                <div>
                    <a href="">Какие продукты Вы используете?</a>
                    <img src={arrow} alt=""/>
                </div>
                <div>
                    <a href="">Я буду есть одно и то же?</a>
                    <img src={arrow} alt=""/>
                </div>
                <div>
                    <a href="">У меня аллергия и непереносимость определенных продуктов</a>
                    <img src={arrow} alt=""/>
                </div>
                <div>
                    <a href="">В какой очередности все есть?</a>
                    <img src={arrow} alt=""/>
                </div>
                <div>
                    <a href="">Можно ли замораживать программу?</a>
                    <img src={arrow} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default CreateOrder;