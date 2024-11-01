import React from 'react'
import UserContext from "./UserContext"

const UserContextProvider = ({children }) => {
    // these props are data should be wrapped inside a component
    // provider ko kuch data bhi toh dena padega 
    const [user , setUser] = React.useState(null)
  
  return (
    <UserContext.Provider value = {{user ,setUser}}>
      {/** children kya hai children ek prop hai jo as it is display kara do jaisa bhi woh aa rha hai */}
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
