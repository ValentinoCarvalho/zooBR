import './Notification.css'
import { useState } from 'react'

export const Notification = (props) => {

    function reloadPage (){
        window.location.reload()
    }
    return(
        <div className="notificationContainer">
            <div className='notificationComponent'>
                <div>
                    <h2 className='notificationTitle'>{props.title}</h2>
                    <p className='notificationText'>{props.text}</p>
                </div>
                <button id='closeNotificationBtn' onClick={() => {reloadPage()}}>Fechar</button>

            </div>
        </div>)
}