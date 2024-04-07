import React, { useEffect, useRef, useState } from 'react';
import iro from '@jaames/iro';
import '../styles/main.css';
import ColorPalette from '../components/ColorPalette';
import { randomFunction } from '../color_gen.js';
import Header from '../components/Header.js';

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

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            colorGen()
        }
    };

    return (
        <div>
            <Header />
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
                        <button id="genBtn" onClick={colorGen} onKeyDown={handleKeyPress} >Generate</button>
                        <button id="layoutBtn" rel="#">Go to Layout!</button>
                    </div>
                </div>

                <div>
                    <ColorPalette colorArray={colorArray} />
                </div>

            </div>
        </div>
    );
}

export default ColorGenPage;
