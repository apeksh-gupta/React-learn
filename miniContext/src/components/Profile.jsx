import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
const {user} = useContext(UserContext)

  if(!user) {return <div>please Login</div>}

  return <div>Succesfully Login Welcome {user.username}</div>


}

export default Profile
