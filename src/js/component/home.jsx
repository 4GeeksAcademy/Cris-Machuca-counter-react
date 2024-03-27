import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondscounter";

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [targetTime, setTargetTime] = useState(0);
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
    // Actualiza el estado targetTime con el valor entero que el usuario ha ingresado en el input
    const handleInputChange = (event) => {
        setTargetTime(parseInt(event.target.value));
    };
     // Efecto para actualizar los segundos cada segundo si el contador está en funcionamiento
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        // Verificar si el tiempo alcanzado es igual al tiempo especificado por el usuario
        if (seconds === targetTime && targetTime !== 0) {
            alert(`¡Felicidades! Has alcanzado ${targetTime} segundos.`);
        }
    }, [seconds, targetTime]);

    return (
        <div className="text-center">
            <h1>Contador de segundos</h1>
            <SecondsCounter seconds={seconds} />
            <div className="buttons">
                <button onClick={stopCounter} className="btn btn-danger m-2">Detener</button>
                <button onClick={resetCounter} className="btn btn-warning m-2 yellowbutton">Reiniciar</button>
                <button onClick={resumeCounter} className="btn btn-success m-2">Reanudar</button>
            </div>
            <div className="container">
                    <label htmlFor="targetTime">Establece el tiempo máximo en segundos: </label>
                    <input
                        type="number"
                        id="targetTime"
                        value={targetTime}
                        onChange={handleInputChange}
                        placeholder="Ingrese el tiempo en segundos"
                        className="form-control"
                    />
                </div>
            <footer>Made by Cris Machuca for <span>4Geeks Academy</span></footer>
        </div>
    );
};

export default Home;

