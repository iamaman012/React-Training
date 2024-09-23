export const increaseBalance=(amount)=>{
    return{
        type:"Increment",
        payload:{amount}
    }
}

export const decereaseBalance=(amount)=>{
    return{
        type:"Decrement",
        payload:{amount}
    }
}