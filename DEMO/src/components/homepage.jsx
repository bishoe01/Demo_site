import React, { useState } from 'react';
import TypeIt from "typeit-react";
import "../App.scss";
function Homepage(props) {
    const [buttonText, setButtonText] = useState("Freeze");
    const [instance, setInstance] = useState(null);
    const toggleFreeze = () => {
        if (instance.is("frozen")) {
            instance.unfreeze();
            setButtonText("Freeze");
            return;
        }

        instance.freeze();
        setButtonText("Unfreeze");
    };
    return (
        <div className='home__banner'>
            <button onClick={toggleFreeze}>{buttonText}</button>

            <TypeIt
                options={{ loop: false }}
                getAfterInit={(instance) => {
                    setInstance(instance);
                    return instance;
                }}
            >
                WE ARE DRX
            </TypeIt>
        </div>

    );
}

export default Homepage;