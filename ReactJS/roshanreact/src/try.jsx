import React, { useState , useEffect, useMemo} from 'react'

const Try = () => {
    const [count, setCount] = useState(0);
    const [max, setMax] = useState([1,2,3,4,5]);
    const exp = useMemo(() =>{
        console.log('expensive')
        let sum =0
        for(let i = 0; i < 1000000000; i++){
          sum+=i
        }
        return (Math.max(...max));
    },[max])
    const addRandom = () => {
      const random = Math.floor(Math.random() * 100);
      setMax([...max, random]);
    }
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click:{count}</button>
        <button onClick={addRandom}>Add Random</button>
        <p>{exp}</p>
    </div>

  )
}

export default Try

//forward reference
// import {React,useRef,forwardRef} from 'react'
//     const Child = forwardRef((props,ref) =>{
//     return (
//         <>
//         <h1>Child</h1>
//             <input type='text' ref={ref} {...props}/>
//         </>
//     )
// })

// export default function App() {
//     const myRef = useRef(null);
//   return (
//       <>
//           <h1>Hello world</h1>
//           <Child  ref={myRef}/>
//               <button onClick={()=>myRef.current.focus()}>Button</button>
//       </>
//       )
// }




