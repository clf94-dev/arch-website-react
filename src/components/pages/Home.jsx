import React from 'react'
import HomeIntro from '../HomeIntro'
import HomeTeam from '../HomeTeam'
import Welcome from '../Welcome.jsx'


function Home() {
    return (
        <div>
           <HomeIntro/>
           <Welcome/>
           <HomeTeam/>
        </div>
    )
}

export default Home;
