import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function NbaTeams() {

    const [nbaTeams, setNbaTeams] = useState([]);

    useEffect(() =>{
        getNbaTeams();
    }, []);

    const getNbaTeams = async () => {
        const api = await fetch(`https://www.balldontlie.io/api/v1/teams`);
        const teamData = await api.json();
        setNbaTeams(teamData.data);
        console.log(teamData.data);
    }

  return (
    <div>
        <Wrapper>
        {nbaTeams.map((data) => {
            return (
                <Card key={data.id}>
                    <Link to={`/TeamGames/${data.id}`}>
                        <h2>{data.full_name}</h2>
                        <h3>{data.conference}</h3>
                        <h4>{data.division}</h4>
                    </Link>
                </Card>
            );
        })}
        </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: space-around;
`;
const Card = styled.div`
    width: 18rem;
    border: 10px black solid;
    border-radius: 2rem;
    position: relative;
    padding: 10px;
    display: flex;
    margin: 20px;
    text-align: center;
    justify-content: center;
    a{
        text-decoration: none;
        color:white;
    }
`;
export default NbaTeams;