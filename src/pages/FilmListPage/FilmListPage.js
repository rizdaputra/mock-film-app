import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import FilmList from '../../components/FilmList/FilmList';
import { getFilms } from '../../api/filmsApi';

//assuming sections comes from another algorithm and call it genre. 
const genres = ["Action", "Movies", "For You", "Comedy"]

const FilmListPage = () => {
    const [films, setFilms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      async function fetchFilms() {
        // to add loading flow
        const filmList = await getFilms();
  
        setFilms(filmList)
      }
      
      fetchFilms();
    }, [])

    const goToFilmDetails = (id) => {
        // not using the id here since the mock api does not support but it should be per id
        navigate("/films/"+id)
    }

    //using same films for each genres
    return genres.map((genre, idx) => {
            return <div key={idx}>
              <FilmList genre={genre} films={films} onClick={goToFilmDetails}/>
            </div>
          })
}

export default FilmListPage
