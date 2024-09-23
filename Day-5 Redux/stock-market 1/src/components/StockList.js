import { StockListItem } from './StockListItem';
import { STOCK_LIST } from '../store/data';
import { useSelector,useDispatch } from 'react-redux';

import { stockDataInjection } from '../actions/stockDataActions';
import { useEffect } from 'react';

export const StockList = () => {
const stockData = useSelector((state)=>state.stocksData.stocks);
const dispatch = useDispatch();

useEffect(()=>{
  const fetchData=async()=>{
    try{
    const response = await fetch('./stockdata.json')
    if(!response.ok)
      throw new Error("error in fetching the data")
    const data = await response.json();
    // console.log(data.stocks);
    dispatch(stockDataInjection(data.stocks))
}
catch(err)
{
  console.log(err.message);
}
  }
  fetchData();
},[])

if(!stockData) return <h2>...Loading</h2>
  return (
    <div className="flex-column gap-1">
      <h2>Stock List</h2>

      <ul className="flex-column gap-1">
        {/* {STOCK_LIST.map((stock) => (
          <StockListItem key={stock.id} stock={stock}>
          </StockListItem>
        ))} */}
         {stockData.map((stock) => (
          <StockListItem key={stock.id} stock={stock}>
          </StockListItem>
        ))}
      </ul>
    </div>
  );
};
