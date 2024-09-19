import React from 'react'

const DisplayItems = ({items,onRemoveItem,sortOrder,sortCriteria,onSort}) => {

    const handleRemove=(id)=>{
        onRemoveItem(id);
    }
  return (
    <>
    <div className='container'>
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th scope='col' onClick={()=>onSort("name")}>Item Name {sortCriteria==="name" ? (sortOrder==="asc"?"↑":"↓"):" "}</th>
                    <th scope='col' onClick={()=>onSort("description")}>Description {sortCriteria==="description"? (sortOrder==="asc"?"↑":"↓"):" "}</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
           <tbody>
                {items.map((item)=>(
                    <tr key={item.id}>
                        <td scope='row'>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                            <button className='btn btn-danger btn-sm' onClick={()=>handleRemove(item.id)}>Remove</button>
                        </td>
                    </tr>
                ))}
           </tbody>
        </table>
    </div>
    </>
  )
}

export default DisplayItems