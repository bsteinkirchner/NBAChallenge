import React, { useState, useEffect } from 'react';

function TeamGames() {
  const [games, setGames] = useState([]);
  const fetchGames = async () => {
    const getData = await fetch(`https://www.balldontlie.io/api/v1/games?seasons[]=2012&team_ids[]=1`);
    const gameData = await getData.json();
    setGames(gameData.data);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
      <div>
        <h1>2012 season</h1>
          {games.map((object) => {
              return (
                <div key={object.id}>
                  <h1></h1>
                  <h2>{object.home_team.full_name} vs. {object.visitor_team.full_name}</h2>
                  <h3></h3>
                  <p>{object.date}</p>
                </div>
              );
          })}

      </div>
    )
  }
 
  export default TeamGames;