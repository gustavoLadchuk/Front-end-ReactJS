import "./Timer.css"
import { useState, useEffect } from "react"


const Timer = () => {

    const [contador, setContador] = useState(0)



    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador(contador + 1)
        }, 1000)
        return () => {
            clearInterval(intervalo);
        };
    }, [contador])


    return (
        <div className="timer-container">
            <div className="timer-title">Timer</div>
            <div className="timer">{contador}</div>
        </div>
    );
}

export default Timer;