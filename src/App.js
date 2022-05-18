import { useState } from "react";

import "./App.css";
import Dot from "./Dot";

function App() {
    const [selectedDot, setSelectedDot] = useState(-1); // index of currently selected dot, we are starting with -1 because there is no dot selected

    const handleSelectingDot = (key) => {
        setSelectedDot(key);
    };

    return (
        <div className="dots-wrapper">
            {new Array(20).fill("#000000").map((_, i) => (
                <Dot key={i} index={i} selectedDot={selectedDot} handleSelectingDot={handleSelectingDot} />
            ))}
        </div>
    );
}

export default App;
