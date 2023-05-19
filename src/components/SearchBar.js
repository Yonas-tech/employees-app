import React from 'react';


export default function SearchBar() {
  return (
    <div className='search-container'>
        <form action="" onSubmit={()=>{console.log('func here')}}>
            <input type="text" placeholder="Search.." name="search" />
            <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}
