import { useDispatch } from "react-redux";
import { deleteStock } from "../actions/portfolioActions";
import { increaseBalance } from "../actions/balanceActions";
export const PortfolioItem = ({ stock }) => {
  const dispatch= useDispatch();
  const handleSell = (stock) => {   
    dispatch(deleteStock(stock.id));
    dispatch(increaseBalance(stock.price*stock.quantity));
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="flex-row gap-0-5 stock-name">
        <span>{stock.name}</span>
        <span>( {stock.quantity} )</span>
      </div>
      <div> $ { (stock.quantity * stock.price).toFixed(2) }</div>
      <button className="sell-button" onClick={()=>handleSell(stock)}>Sell</button>
    </li>
  );
};
