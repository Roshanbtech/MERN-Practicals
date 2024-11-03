// App.jsx
import React from 'react';
import Navbar from './navbar';
import SearchBar from './searchBar';
import CounterButton from './counterButton';

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      <Navbar />
      <div className="mt-6">
        <SearchBar />
        <CounterButton />
      </div>
    </div>
  );
}

export default App;
