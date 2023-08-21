import React, { useState } from 'react'


import './UserProfileCard.css'

const UserProfileCard=()=>
{
    const [Name,setName]=useState()
    const [Id,setId]=useState()
    const [Contact,setContact]=useState()
    const [Adress,setAdress]=useState()
    return(
        <div className='upc'>
            <div className="gradient"></div>
         <div className="profile-down">
                <img src="" alt=""/>
                <div className='lower-container'>
               <h2>Name :{Name}</h2>
               <h2>Id :{Id}</h2>
               <h2>Contact :{Contact}</h2>
               <h2> Address: {Adress}</h2>
               
            </div>
            </div>

        </div>
    )
}
export default UserProfileCard