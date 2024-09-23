const initialBalanceState ={
    balance:10000
}

const balanceReducer =(state=initialBalanceState,action)=>{
    switch(action.type)
    {
        case "Increment":
            return{
                balance:state.balance+action.payload.amount
            }

        case "Decrement":
            return{
                balance:state.balance-action.payload.amount
            }

        default:
            return state;
    }
}

export default balanceReducer;