import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";
import "./Dot.css";

const Dot = ({ index, selectedDot, handleSelectingDot }) => {
    const [backgroundColor, setBackgroundColor] = useState();

    // this useEffect will be triggered every time that selected dot will change, so it can reset color to default when changing dot
    useEffect(() => {
        setBackgroundColor(selectedDot === index && getRandomLightColor());
    }, [selectedDot]);

    const handleClickingDot = () => {
        handleSelectingDot(index);
        setBackgroundColor(getRandomLightColor());
    };

    const style = {
        backgroundColor: backgroundColor, // it is either a color or false, if false then it takes value from css file
    };

    const divContent = selectedDot === index && index; // displays index if in selected dot or nothing

    return (
        <div className="dot" style={style} onClick={handleClickingDot}>
            {divContent}
        </div>
    );
};

function getRandomLightColor() {
    return randomColor({ luminosity: "light" }); // luminosity is light the text can be easly read
}

export default Dot;
