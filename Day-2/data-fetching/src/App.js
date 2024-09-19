
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const [totalPost, setTotalPost] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok)
          throw new Error("Unable to Fetch the Data!!");
        const data = await response.json();
        setItems(data.posts);
        setTotalPost(data.total);

      }
      catch (err) {
        console.error(err.message);
      }
    }
    fetchData();

  }, [])
  return (
    <div className="container">
      <div className='row '>
        <h2 className='text-center'>Total Post: {totalPost}</h2>
        {items.map((item) => (
          <div key={item.id} className='col-md-4 my-2'>
            <div className="card h-100">
              <div className="card-body">
                <div className='bg-dark'>
                <h5 className="card-title text-center  text-light">{item.title}</h5>
                </div>

                <p className="card-text">{item.body}</p>
                {item.userId === 123 &&
                  <div>
                    <button className='btn btn-dark m-2'>Edit</button>
                    <button className='btn btn-dark'>Delete</button>
                  </div>

                }
               


              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
