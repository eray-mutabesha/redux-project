import React from 'react'

function Autheur({user}) {
    
    console.log(user)
  return (
    <div className='auteur_div'>
    <img src="public\images\erayphoto.jpg" alt="profil" />
    <h2>{user.username}</h2>
    <h3>{user.Like}</h3>
  </div>
  )
}

export default Autheur
