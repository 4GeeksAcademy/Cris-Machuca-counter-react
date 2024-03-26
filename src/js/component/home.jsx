import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondscounter";

//include images into your bundle


//create your first component
const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    // Función para detener el contador
    const stopCounter = () => {
        setIsRunning(false);
    };

    // Función para reiniciar el contador
    const resetCounter = () => {
        setSeconds(0);
    };

    // Función para reanudar el contador
    const resumeCounter = () => {
        setIsRunning(true);
    };

    // Actualiza el contador cada segundo si el contador está en funcionamiento
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="text-center">
            <h1>Contador Simple</h1>
            <SecondsCounter seconds={seconds} />
            <div>
                <button onClick={stopCounter} className="btn btn-danger m-2">Detener</button>
                <button onClick={resetCounter} className="btn btn-warning m-2">Reiniciar</button>
                <button onClick={resumeCounter} className="btn btn-success m-2">Reanudar</button>
            </div>
        </div>
    );
};

export default Home;

