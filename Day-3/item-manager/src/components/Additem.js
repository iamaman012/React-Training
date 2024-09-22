import React, { useState } from 'react'

const Additem = ({onAddItem}) => {
    const [name,setName]=useState("");
    const [description,setDescription] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        onAddItem(name,description);
        setName("");
        setDescription("");
    }
  return (
    <>
     <div className="container mt-5">
      
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              
              name="description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              rows="3"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark btn-sm">Add Item</button>
      </form>
    </div>

    </>
  )
}

export default Additem