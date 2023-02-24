
import {NavLink} from "react-router-dom";


import css from './Header.module.css'
import LogoLight from './Logo-light.com.png';
import LogoDark from './Logo-dark.png';
import UserIcon from './UserLogo.png'



const Header = ({onThemeToggle, isLight}) => {





    return (
        <div className={css.Header}>
            <img src={isLight? LogoDark : LogoLight} alt="logo" className={css.logo}/>
            <NavLink to={""}>Главная</NavLink>
            <NavLink to={"all_films"}>Фильмы</NavLink>
            <NavLink to={"top"}>Топ</NavLink>
            <NavLink to={"genres"}>Жанры</NavLink>


            <div className={css.User_info}>
                <img src={UserIcon}  alt="UserIcon" className={css.user_logo}/>
                <button>Выйти</button>
            </div>

            <button onClick={onThemeToggle} className={isLight? css.DarkBtn : css.LightBtn}>{isLight ? 'Light':'Dark'}</button>



        </div>
    );
};

export {Header};