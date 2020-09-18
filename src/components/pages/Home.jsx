import React from 'react'
import  HomeFeatured  from '../HomeFeatured.jsx'
import HomeIntro from '../HomeIntro'
import HomeTeam from '../HomeTeam'
import Welcome from '../Welcome.jsx'


function Home() {
    return (
        <div>
           <HomeIntro/>
           <Welcome/>
           <HomeTeam/>
           <HomeFeatured/>
        </div>
    )
}

export default Home;
