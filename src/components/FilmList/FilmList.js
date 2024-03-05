import React from 'react';
import Film from '../Film/Film';
import './FilmList.css'

export default function FilmList({films, genre, onClick}) {
    return (
        <>
            <h2>{genre}</h2>
            <div className='film-list-wrapper'>
                {films.map((film) => {
                    return <Film film={film} onClick={() => onClick(film.id)}/>
                })}
            </div>
        </>
    )
}