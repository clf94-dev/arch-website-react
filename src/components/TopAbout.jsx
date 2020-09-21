import React from 'react'
import TopAboutContactCard from './TopAboutContactCard'
import './styles/App.css'
const contactAbout= false;


function TopAbout() {
    return (
        <div>
            <TopAboutContactCard contact={contactAbout}/>
        </div>
    )
}

export default TopAbout
