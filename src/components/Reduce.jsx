import { useReducer } from "react"

const reducer = (state,action)=>{
    switch(action.type){
        case "value":
            return {...state,count: state.count + action.payload};
        case "color":
            return {...state,color:action.payload}
        default:
            return state;
    }
}

const Reduce = () => {
    const [state,dispatch] = useReducer(reducer,{count:0,color:"black"});
  return (
    <div style={{color:state.color}}>
        <h2>Count: {state.count}</h2>
      <button onClick={()=>dispatch({
        type:"value",
        payload:1
      })}>INC</button>
      <button onClick={()=>dispatch({
        type:"value",
        payload:-1
      })}>DEINC</button>
      <button onClick={()=>dispatch({
        type:"color",
        payload:"green"
      })
      }>Green</button>
      <button onClick={()=>dispatch({
        type:"color",
        payload:"red"
      })}>Red</button>
    </div>
  )
}

export default Reduce
