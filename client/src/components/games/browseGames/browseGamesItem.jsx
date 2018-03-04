import React from 'react';

export function BrowseGamesItem({title, sport, skill, numPlayers,
players, location, startDatetime, endDatetime}) {
  return(
    <div className='browseGameItem-info'>
      {title}
      {sport}
      {skill}
      {numPlayers}
      {players}
      {location}
      {startDatetime}
      {endDatetime}
    </div>
  );
}
