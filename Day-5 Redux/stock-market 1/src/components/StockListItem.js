import { useDispatch ,useSelector} from "react-redux";
import { addStock } from "../actions/portfolioActions";
import { decereaseBalance } from "../actions/balanceActions";

export const StockListItem = ({ stock }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state)=>state.balance.balance);
  console.log(balance);
  const handleBuy = (stock) => {
    if(stock.price>balance)
    {
      alert("You do not have sufficient balance");
      return;
    }
    dispatch(addStock(stock,1));
    dispatch(decereaseBalance(stock.price));
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="stock-name">{stock.name}</div>
      <div>${stock.price.toFixed(2)}</div>
      <button className="buy-button" onClick={()=>handleBuy(stock)}>Buy</button>
    </li>
  );
}