import React from 'react';
import style from './main.scss'
import {getList} from '../../API/api.js'


const header = () => {
    const onSubmitHandle = (e) => {
        debugger
        e.preventDefault();
        getList();
    };

    return(
        <header>
            <div className={style.container}>

                <button className={style.get_btn} onClick={()=>{onSubmitHandle(event)}}>get list!</button>

            </div>
        </header>

    )
};
export default header;