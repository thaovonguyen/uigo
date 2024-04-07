import React, { useEffect, useRef, useState } from 'react';
import iro from '@jaames/iro';
import '../styles/main.css';
import ColorPalette from '../components/ColorPalette';
import { randomFunction } from '../color_gen.js';
import {Link} from 'react-router-dom';

function ColorGenPage() {
    const boxPickerRef = useRef(null);
    const [colorArray, setColorArray] = useState(
        randomFunction("#ff0000")
    )
    

    useEffect(() => {
        const values = document.getElementById('values');
        const hexInput = document.getElementById('hexInput');
        const boxPicker = iro.ColorPicker("#boxPicker", {
            width: 250,
            color: "rgb(255, 0, 0)",
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
                {
                    component: iro.ui.Box,
                },
                {
                    component: iro.ui.Slider,
                    options: {
                        id: 'hue-slider',
                        sliderType: 'hue'
                    }
                }
            ]
        });

        boxPicker.on(["color:init", "color:change", "input:init", "input:change"],
            function (color) {
                values.innerHTML = [
                    "hex: " + color.hexString,
                    "rgb: " + color.rgbString,
                    "hsl: " + color.hslString
                ].join("<br>");

                hexInput.value = color.hexString;
                // const newColorArray = colorArray;
                // colorArray = color.hexString;
                const newColor = color.hexString;
                const newArray = [newColor, ...colorArray.slice(1, 5)];
                setColorArray(newArray)
            });

        hexInput.addEventListener('change', function () {
            boxPicker.color.hexString = hexInput.value;
        })

        boxPickerRef.current = boxPicker;

        return () => {
            boxPickerRef.current.off("mount");
            boxPickerRef.current.base.remove();
        };
    }, []);

    const colorGen = () => {
        const newColor = randomFunction(boxPickerRef.current.color.hexString);
        setColorArray(newColor);
    };

    return (
        <div className="Wrap Grid">
            <div id="PickerWrap">
                <div className="ColorPicker" id="boxPicker">
                    {/* <h3>Your Color Picker</h3> */}
                </div>
                <div id="Values">
                    <span className="title">Selected Color: </span>
                    <div id="values"></div>
                    <span className="title">Input Color: </span>
                    <input type="text" id="hexInput" placeholder="Input your color..." />
                </div>

                <div className="ButtonWrap">
                    <button id="genBtn" onClick={colorGen} >Generate</button>
                    <button id="genBtn" onClick={colorGen} > <Link to="/layout">Go to layout</Link></button>
                </div>
            </div>

            {/* <div className="container">
                <div className="color-container">
                    <div className="mini-page" id="color-page">
                        <div className="color-palette col">
                            {colorArray.map((color, index) => (
                                <div
                                    key={index}
                                    className="color-cell"
                                    style={{ backgroundColor: color }}
                                    onDragStart={(event) => handleDragStart(event, index, colorArray)}
                                    onDragOver={handleDragOver}
                                    onDrop={(event) => handleDrop(event, index, colorArray, setColorArray)}
                                />
                            ))}
                        </div>
                        <div className="color-name align-items-center">Color Palette</div>
                    </div>
                </div>
            </div> */}

            <div>
                <ColorPalette colorArray={colorArray} />
            </div>
        </div>
    );
}

export default ColorGenPage;
