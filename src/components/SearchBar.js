import React from 'react';


export default function SearchBar() {
  return (
    <div className='search-container'>
        <form action="" onSubmit={()=>{console.log('func here')}}>
            <input type="text" className="search" placeholder="Search.." name="search" />
            <button type='submit' className='submit'>Submit</button>
        </form>
        
    </div>
  )
}
