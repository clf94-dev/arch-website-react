import React from 'react'
import TopAboutContactCard from './TopAboutContactCard'
import './styles/App.css'


const contact= true;


function TopContact() {
    return (
        <div>
            <TopAboutContactCard contact={contact}/>
        </div>
    )
}

export default TopContact
