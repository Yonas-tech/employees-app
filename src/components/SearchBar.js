import React from 'react';
import { useState } from 'react';

export default function SearchBar({setSearchTerm}) {
  const [term, setTerm] = useState();

  return (
    <div className='search-container'>
        <form action="" onSubmit={(e)=>{e.preventDefault();
                                        setSearchTerm(term);}}>
            <input type="text" className="search" placeholder="Search.." 
                    name="search" onChange={(e)=>{setTerm(e.target.value)}}/>
            <button type='submit' className='submit'>Submit</button>
        </form>
    </div>
  )
}
