import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import styled from "styled-components";

function TeamGames() {
  const [games, setGames] = useState([]);
  let { id } = useParams();
  const fetchGames = async () => {
    const getData = await fetch(`https://www.balldontlie.io/api/v1/games?seasons[]=2012&team_ids[]=${id}`);
    const gameData = await getData.json();
    setGames(gameData.data);
  }

  useEffect(() => {
    fetchGames(id.data);
  }, [id.data]);

  return (
    <Wrapper>
      <h2 className="tablehead">2012 Season Games</h2>
      <Table>
        <thead>
          <tr>
            <th>Home</th>
            <th>Score</th>
            <th>Visitor</th>
            <th>Date</th>
          </tr>
        </thead>
          {games.map((object) =>{
            return (
            <tbody>
              <tr key={object.id}>
                <td>{object.home_team.full_name}</td>
                <td>{object.home_team_score} to {object.visitor_team_score}</td>
                <td>{object.visitor_team.full_name}</td>
                <td>{object.date}</td>
              </tr>
            </tbody>
            )
          })}
      </Table>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export default TeamGames;