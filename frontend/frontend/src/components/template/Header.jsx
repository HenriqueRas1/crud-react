import './Header.css'
import React from 'react'


export default props => 
    <header className="header d-none d-sm-flex flex-column">
        <h1 classname="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.tittle}
        </h1>
        <p className="lead text-muted">{props.subtittle}</p>
        </header>