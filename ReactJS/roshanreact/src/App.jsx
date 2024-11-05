// App.jsx
import React, { useEffect , useState} from 'react';
import Navbar from './navbar';
import SearchBar from './searchBar';
import CounterButton from './counterButton';

const App = () => {
   const [count, setCount] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= 10) {
          clearInterval(interval); // Stop the interval
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      <Navbar />
      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">Timer: {count} seconds</h1>
        <SearchBar />
       
        <CounterButton />
      </div>
    </div>
  );
}

export default App;
