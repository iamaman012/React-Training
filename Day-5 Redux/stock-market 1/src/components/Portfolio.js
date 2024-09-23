import { STOCK_LIST } from "../store/data";
import { PortfolioItem } from "./PortfolioItem";
import { useSelector } from "react-redux";

export const Portfolio = () => {
 const portfolio = useSelector((state)=>state.portfolio.portfolio);

//  if(portfolio) return <h4>{JSON.stringify(portfolio)}</h4>
  return (
    <div className="flex-column gap-1">
      <h2>Portfolio</h2>

      <ul className="flex-column gap-1">
        {
          portfolio.map(stock=>(
            <PortfolioItem key={stock.id} stock={stock}/>
          ))
        }
        {/* <PortfolioItem stock={{...STOCK_LIST[0], quantity: 2}}/> */}
      </ul>
    </div>
  );
};
