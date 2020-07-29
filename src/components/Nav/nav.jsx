import React from 'react';
import style from "./nav.scss";

const Nav = () => {
    return(
        <>
            <div className="container">
                <nav className={style.nav}>
                    <div className={style.month}>
                        January
                    </div>
                    <div className={style.month}>
                        February
                    </div>
                    <div className={style.month}>
                        March
                    </div>
                    <div className={style.month}>
                        April
                    </div>
                    <div className={style.month}>
                        May
                    </div>
                    <div className={style.month}>
                        Jull
                    </div>
                    <div className={style.month}>
                        July
                    </div>
                    <div className={style.month}>
                        August
                    </div>
                    <div className={style.month}>
                        September
                    </div>
                    <div className={style.month}>
                        October
                    </div>
                    <div className={style.month}>
                        November
                    </div>
                    <div className={style.month}>
                        December
                    </div>
                </nav>
            </div>

        </>

    )
};
export default Nav;