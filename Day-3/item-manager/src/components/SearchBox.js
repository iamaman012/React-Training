import React from 'react'

export const SearchBox = ({searchTerm,setSearchTerm}) => {
  return (
    <>
     <div className="container mt-5">
        <input
          type="text"
          placeholder="Search items..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  )
}
