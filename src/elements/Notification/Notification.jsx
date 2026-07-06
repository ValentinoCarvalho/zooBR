import './Notification.css'
import { useState } from 'react'

export const Notification = (props) => {
    return(
        <div className="notificationContainer">
            <div className='notificationComponent'>
                <div>
                    <h2 className='notificationTitle'>{props.title}</h2>
                    <p className='notificationText'>{props.text}</p>
                </div>
                <button id='closeNotificationBtn'>Fechar</button>

            </div>
        </div>)
}