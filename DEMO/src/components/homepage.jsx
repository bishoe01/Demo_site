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
            <TypeIt className="title"
                options={{ loop: true }}
                getAfterInit={(instance) => {
                    instance.type("WE ARE DRX").pause(1000).delete(10).pause(500).type("CHAMPIONS").pause(1000);
                    return instance;
                }}
            >
            </TypeIt>
        </div>

    );
}

export default Homepage;