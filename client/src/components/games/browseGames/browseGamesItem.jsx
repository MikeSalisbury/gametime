import React from 'react';
import { Link } from 'react-router-dom';

export function BrowseGamesItem({gameId, gameImage, title, sport, skill, numPlayers,
players, location, startDatetime, endDatetime}) {
  let gamePlayers;
  if(players) {
    gamePlayers = players.map(player => player.firstName + ' ' + player.lastName);
  } else {
    gamePlayers = [];
  }

  startDatetime = new Date(startDatetime).toString();
  endDatetime = new Date(endDatetime).toString();
  let startDate = startDatetime.slice(0, 17);
  let startTime = startDatetime.slice(17, 21);
  let endDate = endDatetime.slice(0, 17);
  let endTime = endDatetime.slice(17, 21);
    return(

      <Link to={`/games/${gameId}`}>
        <div className='browseGameItem-container'>
          <img src={`${gameImage}`} className='browseGameItem-image'
            alt='sport'/>
          <div className='browseGameItem-info'>
            <h1 className='browseGameItem-title'>{title}</h1>
            <div className='browseGameItem-details'>
              <h1 className='browseGameItem-sport'>Sport: {sport}</h1>
              <h1 className='browseGameItem-skill'>{skill} Level</h1>
              <h1 className='browseGameItem-numPlayers'> {gamePlayers.length} / {numPlayers} Players</h1>
              <h1 className='browseGameItem-location'>Location: {location}</h1>
              <h3 className='browseGameItem-startDatetime'>Start: {startDate + startTime} PST</h3>
              <h3 className='browseGameItem-endDatetime'>End: {endDate + endTime} PST</h3>
            </div>
          </div>
        </div>
      </Link>
    );

}
