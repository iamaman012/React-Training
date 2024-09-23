export const addStock=(stock,quantity)=>{
    return{
        type:"Add Stock",
        payload:{...stock,quantity}
    }
}

export const deleteStock=(id)=>{
    return {
        type:"Remove Stock",
        payload:{id}
    }
}