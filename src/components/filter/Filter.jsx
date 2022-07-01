
import React, { useState } from 'react'
import users from '../../data/users.json'
import useFilter from '../../hooks/useFilter'
const Filter = () => {
    const [search, setSearchValue] = useState("")
  return (
    <div className="filter-container">
        <input role="textbox" type="text"
        value={search}
        onChange={(e)=> setSearchValue(e.target.value)}
        />
        <ul role="list">
            {
                useFilter(search).map((user,index)=>(
                    <li key={index} role="listitem">{user.name}</li>
                ))
            }
            {/* <li role="listitem"></li> */}
        </ul>
    </div>
  )
}

export default Filter