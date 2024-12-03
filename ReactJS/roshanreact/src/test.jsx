import React,{useState,useMemo} from 'react'

function useCounter(initialValue=0){
    const [count,setCount] = useState(initialValue);
    const inc = ()=> setCount(count+1)
    const dec = ()=>setCount(count-1)
    return [count,inc,dec]
}
function Child({inc}){
    return (
        <>
                <button onClick={inc}>+</button>
        </>
    )
}


const test = () => {
    // const [count,setCount] = useState(0);
    // const [maxNum,setMax] = useState([1,2,3,4,5])
    // const exp = useMemo(() =>{
    //     for(let i=0;i<1000000000;i++){

    //     }
    //     return Math.max(...maxNum)
    // },[maxNum])
    
    const [count,inc,dec]=useCounter(0)
  return (
    <div>
        {/* <button onClick = {()=>setCount(count+1)}>Click:{count}</button> */}
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <Child inc={inc}/>
        <p>{count}</p>
        {/* // <p>{exp}</p> */}
    </div>
  )
}


export default test