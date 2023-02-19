import css from './HomePageStyle.module.css'

import image from './images/spiderPage.jpg'

const Home = () => {
    return (
        <div className={css.Container}>

            <div className='pt1'>

            <div className={css.Frame}>



                <div className={css.TxtIntroduce}>
                    <h3>Вы любите кинематограф также как мы? Постоянно следите за выходом новинок?<br/> Не проходит ни одного вечера, чтобы вы не посмотрели пару-тройку фильмов? <br/>Тогда вы пришли точно по адресу!</h3>

                </div>

                <div>

                    <div className={css.imagination}>
                    <img src={image} alt=""/>
                    </div>

                    <div className={css.ellipse}></div>

                </div>


            </div>

            </div>

            <div className={css.Pt2}>

                <div className={css.Left}>
                    <div className={css.a}></div>
                    <div className={css.b}></div>
                    <div className={css.c}></div>
                    <div className={css.d}></div>
                    <div className={css.e}></div>
                </div>

                <div className={css.Middle}></div>

                <div className={css.Right}>
                    <div className={css.f}></div>
                    <div className={css.g}></div>
                    <div className={css.h}></div>
                    <div className={css.i}></div>
                    <div className={css.j}></div>
                </div>

            </div>


        </div>
    );
};

export {Home};