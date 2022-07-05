import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
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
        <Head>2012 season</Head>
          {games.map((object) => {
              return (
                <Container key={object.id}>
                  <Top><span>{object.date}</span></Top>
                  <LeftSide>
                    <h2>{object.home_team.full_name}</h2>
                  </LeftSide>
                  <Middle>
                    <h3>{object.home_team_score} to {object.visitor_team_score}</h3>
                  </Middle>
                  <RightSide>
                    <h2>{object.visitor_team.full_name}</h2>
                  </RightSide>
                </Container>
              );
          })}
      </Wrapper>
    )
  }
 const Wrapper = styled.div`
  margin: auto;
 `;
const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 50px;
  span{
    font-weight: bold;
  }
`;
const LeftSide = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RightSide = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  align-items: center;
`;
const Middle = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center
  font-size: 26px;
  justify-content: center
`;
 const Head = styled.h1`
  display: flex;
  justify-content: center;
 `

  export default TeamGames;