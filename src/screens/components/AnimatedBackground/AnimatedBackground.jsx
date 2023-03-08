import React from "react";
import "./AnimatedBackground.css";
import { ReactComponent as Game } from "./svg/game.svg";
import { ReactComponent as Git } from "./svg/git.svg";
import { ReactComponent as Html } from "./svg/html.svg";
import { ReactComponent as Java } from "./svg/java.svg";
import { ReactComponent as JavaScript } from "./svg/javascript.svg";
import { ReactComponent as Keyboard } from "./svg/keyboard.svg";
import { ReactComponent as Laptop } from "./svg/laptop.svg";
import { ReactComponent as Mic } from "./svg/mic.svg";
import { ReactComponent as Pc } from "./svg/pc.svg";
import { ReactComponent as Python } from "./svg/python.svg";
import { ReactComponent as ReactSVG } from "./svg/react.svg";
import { ReactComponent as Sql } from "./svg/sql.svg";
import { ReactComponent as Web } from "./svg/web.svg";
// import { ReactComponent as Www } from "./svg/www.svg";
import { ReactComponent as CPlus } from "./svg/c++.svg";
import { ReactComponent as Cloudcoding } from "./svg/cloudcoding.svg";
import { ReactComponent as Css } from "./svg/css.svg";
import { ReactComponent as Coffee } from "./svg/coffee.svg";
import { ReactComponent as Code } from "./svg/code.svg";
import { ReactComponent as Developer } from "./svg/developer.svg";

function AnimatedBackground({ children }) {
    let arr = [];
    let qty = 20;

    for (let i = 0; i < qty; i++){
        arr.push(i);
    }

    const layers = arr.map(i => {
        return (
            <div key = {i} className = "animated-row">
                <div>
                    <Game />
                    <Git />
                    <Html />
                    <Java />
                    <JavaScript />
                    <Keyboard />
                    <Laptop />
                    <Mic />
                    <Pc />
                    <Python />
                    <ReactSVG />
                    <Sql />
                    <Web />
                    {/* <Www /> */}
                    <CPlus />
                    <Cloudcoding />
                    <Css />
                    <Coffee />
                    <Code />
                    <Developer />
                </div>

                <div>
                    <Game />
                    <Git />
                    <Html />
                    <Java />
                    <JavaScript />
                    <Keyboard />
                    <Laptop />
                    <Mic />
                    <Pc />
                    <Python />
                    <ReactSVG />
                    <Sql />
                    <Web />
                    {/* <Www /> */}
                    <CPlus />
                    <Cloudcoding />
                    <Css />
                    <Coffee />
                    <Code />
                    <Developer />
                </div>
            </div>
        )
    })
    
    return (
    <section className="animated-section">
        {layers}
        {children}
    </section>);
    
}

export default AnimatedBackground;
