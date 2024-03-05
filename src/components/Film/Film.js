import React, { useState } from 'react';
import './Film.css'

export default function Film({film, onClick}) {

    return (
        <img src={film.preview} className='film-item' onClick={onClick}/>
    )
}