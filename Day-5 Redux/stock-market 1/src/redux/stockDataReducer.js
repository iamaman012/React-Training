const initialStockState = {
    stocks:[]
}

const stocksDataReducer=(state=initialStockState,action)=>{
    if(action.type==="Data Injection")
    {
        return{
            ...state,
            stocks:action.payload
        }
    }
    else
    return state;
}

export default stocksDataReducer;