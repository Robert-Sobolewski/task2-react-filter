
import React, { useCallback, useState } from 'react'

import useFilter from '../../hooks/useFilter'
const Filter = () => {
    const [search, setSearchValue] = useState("")
    
    /** Implement debounce function
     * @param funct - function to be executed
     * @param delay - number of milliseconds, default is 500
     */
    const debounce = (funct, delay=500) =>{
        let timer;
        console.log("call debounce")
        return function(...args){
            const context = this;
            if(timer) clearTimeout(timer)
            timer = setTimeout(() =>{
                timer = null;
                funct.apply(context, args)
            },delay)
        }
    }
    const optimizedSearch = useCallback(debounce(setSearchValue, 200),[])
  return (
    <div className="filter-container">
        <input role="textbox" type="text"
        value={search}
        onChange={e=> optimizedSearch(e.target.value)}
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