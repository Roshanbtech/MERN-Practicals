import React, { useState } from 'react';

const Checkbox = () => {
    const [country, setCountry] = useState([
        { id: 1, name: 'India', isChecked: false },
        { id: 2, name: 'USA', isChecked: false },
        { id: 3, name: 'UK', isChecked: false },
        { id: 4, name: 'Japan', isChecked: false },
        { id: 5, name: 'Australia', isChecked: false },
    ]);

    const handleClick = (index) => {
        const updatedCountry = country.map((item, i) => 
            i === index ? { ...item, isChecked: !item.isChecked } : item
        );
        setCountry(updatedCountry);
    };

    const deleteCountry = (index) => {
        const updatedCountry = country.filter((_, i) => i !== index);
        setCountry(updatedCountry);
    };

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {country.map((item, index) => (
                    <div style={{ display: 'flex', alignItems: 'center' }} key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.isChecked}
                            onChange={() => handleClick(index)}
                        />
                        <li style={{ margin: '0 10px' }}>
                            {item.name}
                            {item.isChecked && (
                                <span
                                    style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }}
                                    onClick={() => deleteCountry(index)}
                                >
                                    &#x2715;
                                </span>
                            )}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Checkbox;
