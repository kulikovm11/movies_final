import css from './Header.module.css'

import LogoLight from './Logo-light.com.png';
import LogoDark from './Logo-dark.png';
import UserIcon from './UserLogo.png'

const Header = () => {





    return (
        <div className={css.Header}>
            <img src={LogoLight} alt="logo" className={css.logo}/>
            <a href="">Главная</a>
            <a href="">Категории</a>
            <a href="">Топ</a>
            <a href="">О нас</a>

            <div className={css.User_info}>
                <img src={UserIcon}  alt="UserIcon" className={css.user_logo}/>
                <button>Выйти</button>
            </div>



        </div>
    );
};

export {Header};