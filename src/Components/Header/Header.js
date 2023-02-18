
import {NavLink} from "react-router-dom";


import css from './Header.module.css'
import LogoLight from './Logo-light.com.png';
import LogoDark from './Logo-dark.png';
import UserIcon from './UserLogo.png'



const Header = () => {





    return (
        <div className={css.Header}>
            <img src={LogoLight} alt="logo" className={css.logo}/>
            <NavLink to={""}>Главная</NavLink>
            <NavLink to={"category_search"}>Категории</NavLink>
            <NavLink to={"top"}>Топ</NavLink>
            <NavLink to={"about"}>О нас</NavLink>


            <div className={css.User_info}>
                <img src={UserIcon}  alt="UserIcon" className={css.user_logo}/>
                <button>Выйти</button>
            </div>

            <button>Light Mode</button>



        </div>
    );
};

export {Header};