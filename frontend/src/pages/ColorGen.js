import React, { useEffect } from 'react';
import iro from '@jaames/iro';
import '../styles/main.css';

function ColorGenPage() {
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
            });

        hexInput.addEventListener('change', function () {
            boxPicker.color.hexString = hexInput.value;
        })

        return () => {
            boxPicker.off("mount");
        };
    }, []);

    return (
        <div className="Wrap">
            {/* <div className="Grid" id="PickerWrap"> */}
                <div className="ColorPicker" id="boxPicker">
                    <h3>Your Color Picker</h3>
                    {/* <boxPicker /> */}
                </div>
                <div id="Values">
                    <span className="title">Selected Color: </span>
                    <div id="values"></div>
                    <span className="title">Input Color: </span>
                    <input type="text" id="hexInput" placeholder="Input your color..." />
                </div>

                <div className="ButtonWrap">
                    <button id="genBtn">Generate</button>
                </div>
            {/* </div> */}
        </div>
    );
}

export default ColorGenPage;
