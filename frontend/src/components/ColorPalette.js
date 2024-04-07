// const ColorPalette = () => {
//     const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FFFF33'];
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', flexDirection: 'column', backgroundColor: 'whitesmoke' , padding: '1vh'}}>
//             {colors.map((color, index) => (
//                 <div
//                     key={index}
//                     style={{
//                         backgroundColor: color,
//                         width: '20vh',
//                         height: '20vh',
//                         margin: '1vh',
//                         borderRadius: '5px',
//                     }}
//                 />
//             ))}
//         </div>
//     );
// }

// export default ColorPalette;

import React, { useState } from 'react';
import '../styles/layout.css';
import { randomFunction } from '../color_gen.js';

function ColorPalette(prop) {
    const { colorArray } = prop;
    const baseColor = '#C16F66';
    const [baseColorArray, setBaseColorArray] = useState(['#6A041D', '#F5B841', '#F4FF52', '#53FF45', '#1E2EDE']);
    // const [colorArray, setColorArray] = useState(randomFunction(baseColor));

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

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    
    return (
        <div className="container">
            <div className="color-container">
                <div className="mini-page" id="color-page">
                    <div className="color-palette col">
                        {colorArray.map((color, index) => (
                            <div
                                key={index}
                                className="color-cell"
                                style={{ backgroundColor: color }}
                                // draggable
                                // onDragStart={(event) => handleDragStart(event, index, colorArray)}
                                // onDragOver={handleDragOver}
                                // onDrop={(event) => handleDrop(event, index, colorArray, setColorArray)}
                            />
                        ))}
                    </div>
                    <div className="color-name align-items-center">Color Palette</div>
                </div>
            </div>
        </div>
    );
}

export default ColorPalette;