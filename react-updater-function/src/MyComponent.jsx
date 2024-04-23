/* updater function = a function passed as an argument 
                      to useState() usually 
                      ex setCount(arrow function) */
 

import React,{useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    function handleDecrement() {
        setCount(c => c -1);
        setCount(c => c -1);
        setCount(c => c -1);
    }
    function handleReset () {
        /* here you don't necesseraly need an 
        updater function. because we are not using 
        previous state of the count */
        /* even if wanted to have updater function 
        here we can have it but does the same thing*/

       setCount(c => c = 0);
    }
    function handleIncrement() {
        setCount(c => c +1);
        setCount(c => c +1);
        setCount(c => c +1);
    }
    
    return(
        <div>
            <p> Count: {count} </p>
            <button onClick={handleDecrement} > decrement </button>
            <button onClick={handleReset} > reset </button>
            <button onClick={handleIncrement} > increment </button>
        </div> 
    );
}
export default Counter








