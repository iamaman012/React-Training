const initialPortfolioState={
    portfolio:[]
}

const portfolioReducer=(state=initialPortfolioState,action)=>{
    switch(action.type){
        case "Add Stock":
            const stockExist = state.portfolio.find(stock=>stock.id===action.payload.id);
            if(stockExist){

                return{
                    
                    portfolio:state.portfolio.map(stock=>(
                        stock.id===action.payload.id?{...stock,quantity:stock.quantity+action.payload.quantity}:stock
                    ))
                }
            }
            else{
                return{
                    ...state,
                    portfolio:[...state.portfolio,action.payload]
                }
            }

            case "Remove Stock":
                return{
                    ...state,
                    portfolio:state.portfolio.filter(stock=>stock.id!==action.payload.id)
                }
            
            default:
                return state;

        
    }
}
export default portfolioReducer;