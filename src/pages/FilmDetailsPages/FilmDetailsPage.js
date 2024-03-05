import React, { useState, useEffect } from 'react';
import { getFilmbyId } from '../../api/filmsApi';
import { getEpisodes } from '../../api/episodesApi';
import './FilmDetailsPage.css'

const FilmDetailsPage = () => {
    const [film, setFilm] = useState({});
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
      async function fetchInitialData() {
        // to add loading flow
        const [currentFilm, currentEpisodes] = await Promise.all([getFilmbyId(), getEpisodes()]);
  
        setFilm(currentFilm);
        setEpisodes(currentEpisodes);
      }
      
      fetchInitialData();
    }, [])

    //TODO make episodes list as own component
    return <div>
        <a href="/films" className='back-link'>Back to Films List</a>
        <img src={film.preview} className='film-details-preview-image' alt={film.title}/>
        <p className='film-title'>{film.title}</p>    
        <p>{film.subtitle}</p>
        <p className='episode-list-heading'>Episodes List: </p>
        {episodes.map((episode) => {
           return <div className='episode-list-wrapper'>
                <div className='episode-image-wrapper'>
                    <img src={episode.preview} alt={episode.title}/>
                </div>
                <div>
                    <h4>{episode.title}</h4>
                    <p>{episode.subtitle}</p>
                    <p>{episode.duration}</p>
                </div>
            </div>
        })}
    </div>
}

export default FilmDetailsPage
