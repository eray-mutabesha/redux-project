import React from 'react'
import { isEmpty } from './Utils'
function Autheur({user}) {
    
    console.log(user)
  return (
    <div className='auteur_div'>
    <img src="public\images\erayphoto.jpg" alt="profil" />
    <h2>{!isEmpty(user)&&user[0].username}</h2>
    <h3>Like{!isEmpty(user)&&user[0].Like>1?"s":""}:{!isEmpty(user)&&user[0].Like}</h3>
  </div>
  )
}

export default Autheur
