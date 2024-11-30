// App.jsx
import React, { useEffect , useState} from 'react';
import Navbar from './navbar';
import SearchBar from './searchBar';
import CounterButton from './counterButton';
import LifeCycle from './lifecycleinfunc';
import ExpensiveCalc from './try';
import HigherOrderComponent from './higherOrderComp';

const App = () => {
   const [count, setCount] = useState(0);
   useEffect(()=>{
    const int = setInterval(()=>{
      setCount((prevCount)=>prevCount+1);
    },1000)
    return ()=>{
      clearInterval(int);
    }
   },[])
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      <Navbar />
      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">Timer: {count} seconds</h1>
        <SearchBar count = {count} />
        <CounterButton />
        <LifeCycle />
        <ExpensiveCalc />
        <HigherOrderComponent />
      </div>
    </div>
  );
}

export default App;
