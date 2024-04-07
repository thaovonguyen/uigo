import React, { useState } from 'react';
import '../styles/layout.css';
import { randomFunction } from '../color_gen.js';

function isBright(hexCode) {
    // Chuyển đổi hex code thành giá trị RGB
    let hex = hexCode.replace(/^#/, '');
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    // Tính toán độ sáng trung bình của màu
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Kiểm tra xem màu có được coi là sáng hay không
    return brightness > 127; // Đây là một giả định, bạn có thể thay đổi ngưỡng tùy ý
}

function ColorPalette(prop) {
    const { colorArray } = prop;
    const baseColor = '#C16F66';
    const [baseColorArray, setBaseColorArray] = useState(['#6A041D', '#F5B841', '#F4FF52', '#53FF45', '#1E2EDE']);
    // const [colorArray, setColorArray] = useState(randomFunction(baseColor));

    const handleDragStart = (event, index, source) => {
        event.dataTransfer.setData('text/plain', JSON.stringify({ index, source }));
    };

    const colorText = (backgroundColor) =>{
        if (isBright(backgroundColor)){
            return {color: 'black'}
        } else {
            return {color: 'white'}
        }
        
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
                                style={{ backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                // onClick={() => navigator.clipboard.writeText(color.hexString)}
                            >
                            <p style={colorText(color)}>{color}</p>
                            </div>
                        ))}
                    </div>
                    <div className="color-name align-items-center">Color Palette</div>
                </div>
            </div>
        </div>
    );
}

export default ColorPalette;