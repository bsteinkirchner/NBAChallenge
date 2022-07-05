import React from 'react';
import Home from "./Home";
import TeamGames from "./TeamGames";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/nba-challenge" exact component={<Home/>}/>
            <Route path="/nba-challenge/TeamGames/:id" exact component={<TeamGames/>}/>
        </Routes>
    </div>
  )
}

export default Pages