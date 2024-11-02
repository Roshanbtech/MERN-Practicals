import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';

const SearchBar = () => {
    const names = useMemo(() => ['Reji', 'Seena', 'Roshan', 'Tinsu', 'Rosina', 'Robbin', 'Chacko', 'Annie', 'Annamma'], []);
    
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Initialize a ref for the input field
    const inputRef = useRef(null);

    // Focus the input element when the component mounts
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Handle input change event
    const handleChange = useCallback((e) => {
        const value = e.target.value;
        setInput(value);

        if (value) {
            const matches = names.filter(name =>
                name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(matches.length ? matches : ['No results found']);
        } else {
            setSuggestions([]);
        }
    }, [names]);

    // Handle click event (could be for triggering search explicitly if needed)
    const handleClick = useCallback(() => {
        if (!suggestions.length) {
            setSuggestions(['No results found']);
        }
    }, [suggestions]);

    return (
        <div>
            <h1 className="text-3xl text-blue-500">Search Bar</h1>
            <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={handleChange}
                ref={inputRef} // Use ref to focus on mount
                className="border border-gray-300 rounded-md p-2 text-blue-500" 
            />
            <button onClick={handleClick} className="bg-blue-500 text-white rounded-md p-2">Search</button>
            <ul className='mt-2 border border-gray-300'>
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="py-1 text-blue-500">{suggestion}</li>
                ))}
            </ul>
        </div>
    )
};

export default React.memo(SearchBar);
