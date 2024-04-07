import React, { useState } from 'react';
import '../styles/layout.css';
import { randomFunction } from '../color_gen.js';
import LayoutComponent from '../components/LayoutComponent.js';

function LayoutSample() {
    const baseColor = '#C16F66';
    const [baseColorArray, setBaseColorArray] = useState(['#6A041D', '#F5B841', '#F4FF52', '#53FF45', '#1E2EDE']);
    const [colorArray, setColorArray] = useState(randomFunction(baseColor));

    const handleDragStart = (event, index, source) => {
        event.dataTransfer.setData('text/plain', JSON.stringify({ index, source }));
    };

    const handleDrop = (event, targetIndex, targetArray, setTargetArray) => {
        event.preventDefault();
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));
        const { index, source } = data;
        
        // Prevent dropping into the same array
        if (source === targetArray) return;

        const draggedColor = source === colorArray ? colorArray[index] : baseColorArray[index];
        const updatedTargetArray = [...targetArray];
        updatedTargetArray.splice(targetIndex, 0, draggedColor);
        setTargetArray(updatedTargetArray);

        // Remove item from source array
        // if (source === colorArray) {
        //     const updatedColorArray = [...colorArray];
        //     updatedColorArray.splice(index, 1);
        //     setColorArray(updatedColorArray);
        // } else {
        //     const updatedBaseColorArray = [...baseColorArray];
        //     updatedBaseColorArray.splice(index, 1);
        //     setBaseColorArray(updatedBaseColorArray);
        // }
    };

    const resetColor = () => {
        setColorArray(baseColorArray);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    
    return (
        <div className="container">
            <div className="mini-container" id = "layout-container">
                <div className="mini-page">
                    {/* <div style={{ backgroundColor: colorArray[0] }}>This is a header</div>
                    <div style={{ backgroundColor: colorArray[1] }}>This is the body</div>
                    <div style={{ backgroundColor: colorArray[2] }}>This is a footer</div> */}
                    {<LayoutComponent colorArray />}
                </div>
                <div class="button-container">
                    <button type="button" class="btn btn-success" onClick={resetColor}>Reset</button>
                </div>
            </div>
            <div className="color-container">
                <div className="mini-page" id="color-page">
                    <div className="color-palette col">
                        {colorArray.map((color, index) => (
                            <div
                                key={index}
                                className="color-cell"
                                style={{ backgroundColor: color }}
                                draggable
                                onDragStart={(event) => handleDragStart(event, index, colorArray)}
                                onDragOver={handleDragOver}
                                onDrop={(event) => handleDrop(event, index, colorArray, setColorArray)}
                            />
                        ))}
                    </div>
                    <div className="color-name align-items-center">Color Palette</div>
                </div>

                <div className="row mini-array-page" id="base-color-array">
                    {baseColorArray.map((color, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: color }}
                            className="col base-col"
                            draggable
                            onDragStart={(event) => handleDragStart(event, index, baseColorArray)}
                            onDragOver={handleDragOver}
                            onDrop={(event) => handleDrop(event, index, baseColorArray, setBaseColorArray)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LayoutSample;
