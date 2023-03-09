import { useState, useEffect } from "react";
import "../App.css";
export const Calculator = () => {
    const [number, setNumber] = useState(0);
    const [prevnumber, setprevNumber] = useState(0);
    const [total, setTotal] = useState(0);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        setNumber(0);
        setTotal(0);
        setprevNumber(0);
        setFlag(false);
    },[flag]);  
    return (
        <>
            <h1>Basic Calculator</h1>
            <input className="add-text"
            type="number"
            value={number}
            placeholder = "Please Enter the First Number!"
            onChange={(e) => setNumber(e.target.value)}
            />
            <input className="add-text"
            type="number"
            value={prevnumber}
            placeholder = "Please Enter the Second Number!"
            onChange={(e) => setprevNumber(e.target.value)}
            />
            <div>
            <button onClick={() => setTotal(+number + +prevnumber)} className="button-check">+</button>
            <button onClick={() => setTotal((+number / +prevnumber))} className="button-check">Divide</button>
            <button onClick={() => setTotal((+number * +prevnumber))} className="button-check">Multiplication</button>
            <button onClick={() => setTotal((+number - +prevnumber))} className="button-check">Minus</button>
            <button onClick={() => setFlag(true)} className="button-check">Clear</button>
            </div>
            <p>Result : {total}</p>
        </>
    )
}
