const initialState=[
    {id:1,name:"Silver Pandant",description:"The Diamond Silver Pendant is a sleek embodiment of modern elegance. Its minimalist design, coupled with the brilliance of a carefully set diamond."},
    {id:2,name:"Silver Band",description:"This super stylish wristband for men gives Gen-Z vibes to your look."}
]

 const itemReducer=(items,action)=>{
    switch(action.type){
        case "add":{
            return [
                ...items,
                { id:action.id,
                  name:action.name,
                  description:action.description
                
                }
            ];
        }
        case "delete":{
            return items.filter(item=> item.id!==action.id);
            
        }
        default:{
            throw  Error ("Unknown Action"+action.type);
        }
    }
}
export {initialState,itemReducer}
