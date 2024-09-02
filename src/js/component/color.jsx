
import React, { useState } from "react";


function Color() {
    const [rcolor, setRcolor] = useState("grey");
    const [ycolor, setYcolor] = useState("grey");
    const [gcolor, setGcolor] = useState("grey");

    function Changecolorred() {
        if (rcolor === "red") {
            setRcolor("grey");
        } else {
            setRcolor("red");
            setYcolor("grey");
            setGcolor("grey");
        }
    }

    function Changecoloryellow() {
        if (ycolor === "yellow") {
            setYcolor("grey");
        } else {
            setYcolor("yellow");
            setRcolor("grey");
            setGcolor("grey");
        }
    }

    function Changecolorgreen() {
        if (gcolor === "green") {
            setGcolor("grey");
        } else {
            setGcolor("green");
            setYcolor("grey");
            setRcolor("grey");
        }
    }

    return (
        <>
        <div className="semaforo-container">
            <div className="semaforo">
                <div className="light red" onClick={Changecolorred}
                style={{ backgroundColor: rcolor }}></div>
                <div className="light yellow" onClick={Changecoloryellow}
                style={{ backgroundColor: ycolor }}></div>
                <div className="light green"onClick={Changecolorgreen}
                style={{ backgroundColor: gcolor }} ></div>
           
            </div>

        </div>
        </>
    );
}

export default Color;
