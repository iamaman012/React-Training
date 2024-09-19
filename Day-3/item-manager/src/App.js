
import { useState } from 'react';
import './App.css';
import Additem from './components/Additem';
import DisplayItems from './components/DisplayItems';
import { useItems } from './context/itemContext';
import { SearchBox } from './components/SearchBox';
import useItemSearchSort from './hooks/useItemSearchSort';


function App() {
  const {items,dispatch}=useItems();
  const [searchTerm,setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState(""); 
  const [sortOrder, setSortOrder] = useState(""); 
  let nextId=3;

  const handleAdditem=(name,description)=>{
      try{
        dispatch({
          type:"add",
          id:nextId++,
          name,
          description
        })
      }
      catch(err){
        console.error(err.message);
      }

  }
  const handleRemoveItem=(id)=>{
      try{
        dispatch({
          type:"delete",
          id
        })
      }
      catch(err){
        console.error(err.message);
      }
  }

  const handleSort=(columnName)=>{
    const newOrder = sortCriteria===columnName && sortOrder==='asc'?'desc':'asc';
    setSortCriteria(columnName);
    setSortOrder(newOrder);
  }
  

  const filteredAndSortedItems = useItemSearchSort(items, searchTerm, sortCriteria, sortOrder);

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-6'>
      <Additem onAddItem={handleAdditem}/>
      </div>
      <div className='col-md-6'>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>

      </div>
      <DisplayItems items={filteredAndSortedItems} onRemoveItem={handleRemoveItem} 
       sortOrder={sortOrder} sortCriteria={sortCriteria} onSort={handleSort}
      />
    </div>
  );
}

export default App;
