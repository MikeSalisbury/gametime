import React from 'react';

export function BrowseGamesItem({title, sport, skill, numPlayers,
players, location, startDatetime, endDatetime}) {
  return(
    <div className='browseGameItem-info'>
      <h1>{title}</h1>
      <h1>{sport}</h1>
      <h1>{skill}</h1>
      <h1>{numPlayers}</h1>
      <h1>{location}</h1>
      <h1>{startDatetime}</h1>
      <h1>{endDatetime}</h1>
    </div>
  );
}
