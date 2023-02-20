import css from './HomePageStyle.module.css'

import image from './images/spiderPage.jpg'
import dc from './images/DC.png'
import marvel from './images/marvel.png'
import wb from './images/WB.png'
import N from './images/N.png'
import hbo from './images/hbo.png'
import hasbro from './images/hasbro.png'
import fox from './images/20th.png'
import legendary from './images/legendary.png'
import pixar from './images/pixar.png'
import brobot from './images/badrobot.png'



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
                    <div className={css.a}><img src={marvel} alt="marvel"/></div>
                    <div className={css.b}><img src={hbo} alt="hbo"/></div>
                    <div className={css.c}><img src={fox} alt="fox"/></div>
                    <div className={css.d}><img src={N} alt="N"/></div>
                    <div className={css.e}><img src={hasbro} alt="hasbro"/></div>
                </div>

                <div className={css.Middle}><h2>Здесь каждый сможет найти что-то интересное для себя.</h2></div>

                <div className={css.Right}>
                    <div className={css.f}><img src={legendary} alt="legendary"/></div>
                    <div className={css.g}><img src={wb} alt="wb"/></div>
                    <div className={css.h}><img src={brobot} alt="brobot"/></div>
                    <div className={css.i}><img src={pixar} alt="pixar"/></div>
                    <div className={css.j}><img src={dc} alt="dc"/></div>
                </div>

            </div>


        </div>
    );
};

export {Home};