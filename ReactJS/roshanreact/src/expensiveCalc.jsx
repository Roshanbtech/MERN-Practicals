import React,{ useState, useMemo} from 'react'

const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for(let i = 0; i < 1000000000; i++){}
    return num*num;
}

const resultDisplay = React.memo(({result}) => {
    console.log('Rendering result');
    return <h2>Result: {result}</h2>
})
const expensiveCalc = () => {
    const [number, setNumber] = useState(0);
    const [increment, setIncrement] = useState(0);

  return (
    <div>
        <h1>ExpensiveCalc</h1>
        <div>
            <label>
                Enter a number:
                <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                />
            </label>
        </div>
        <ResultDisplay result={expensiveCalculation(number)} />
        <button onClick={() => setIncrement(increment + 1)}>Increment</button>
        <p>Increment: {increment}</p>
    </div>
  )
}

export default expensiveCalc