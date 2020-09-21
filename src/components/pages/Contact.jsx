import React from 'react'
import ContactDetails from '../ContactDetails'
import TopContact from '../TopContact'
import Map from '../Map'
import MapImg from '../MapImg'
import Form from '../Form'
function Contact() {
    return (
        <div>
            <TopContact/>
            <ContactDetails/>
            <MapImg/>
       <Form/>
        </div>
    )
}

export default Contact
