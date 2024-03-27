import React from "react";

const SecondsCounter = (props) => {
    let digits = [0, 0, 0, 0, 0, 0];
    let seconds = props.seconds;
    let index = digits.length - 1;

    while (seconds > 0 && index >= 0) {
        digits[index] = seconds % 10;
        seconds = Math.floor(seconds / 10);
        index--;
    }  

    return (
        <>
        
            <div className="counter">
                <div className="clock">
                    <i className="far fa-clock"></i>
                </div>
                {digits.map((digit, index) => (
                    <div key={index} className={`digit${index + 1}`}>
                        {digit}
                    </div>
                ))}
            </div>
        </>
    );
};

export default SecondsCounter;