import React from 'react';
import { Link } from 'react-router-dom';

export function BrowseGamesItem({gameId, gameImage, title, sport, skill, numPlayers,
players, location, startDatetime, endDatetime}) {
  return(

    <Link to={`/games/${gameId}`}>
      <div className='browseGameItem-container'>
        <img src={`${gameImage}`} className='browseGameItem-image'
          alt='sport'/>
        <div className='browseGameItem-info'>
          <h1>{title}</h1>
          <h1>{sport}</h1>
          <h1>{skill}</h1>
          <h1>{numPlayers}</h1>
          <h1>{location}</h1>
          <h1>{startDatetime}</h1>
          <h1>{endDatetime}</h1>
        </div>
      </div>
    </Link>
  );
}
