import React, { useState } from 'react';
import '../styles/layout.css';
import '../styles/tab.css';
import { randomFunction } from '../color_gen.js';
import MiniHomepage1 from '../components/minihomepage1.js';
import MiniContactpage from '../components/miniContactpage.js';
import MiniFeature from '../components/miniFeature.js';
import Header from '../components/Header';

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

    };

    const resetColor = () => {
        setColorArray(baseColorArray);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    
    return (
        <div className="container">
            {/* <Header/> */}
            <div className="mini-container" id = "layout-container">
                <div className="mini-page">
                    {/* <div style={{ backgroundColor: colorArray[0] }}>This is a header</div>
                    <div style={{ backgroundColor: colorArray[1] }}>This is the body</div>
                    <div style={{ backgroundColor: colorArray[2] }}>This is a footer</div> */}
                    {<TabComponent prime = {colorArray[0]} secondary = {colorArray[1]} sup1 = {colorArray[2]} sup2 = {colorArray[3]} sup3 = {colorArray[4]} />}
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
};

const TabComponent = (props) => {
    const {prime, second, sup1, sup2, sup3} = props
    const [currentTab, setCurrentTab] = useState('Home Page');

    const renderTabContent = (tab) => {
        switch (tab) {
            case 'Home Page':
                return <MiniHomepage1 prime = {prime} secondary = {second} sup1 = {sup1} sup2 = {sup2} sup3 = {sup3}/>;
            case 'Contact Page':
                return <MiniContactpage prime = {prime} secondary = {second} sup1 = {sup1} sup2 = {sup2} sup3 = {sup3}/>;
            case 'Feature Page':
                return <MiniFeature prime = {prime} secondary = {second} sup1 = {sup1} sup2 = {sup2} sup3 = {sup3} />;
            default:
                return null;
        }
    };

    return (
        <div class="actlayout decentralize-tab-button">
            <div class="row actbutton">
                <button id="tab1"  type="button" class="col detailbutton btn btn-dark" onClick={() => setCurrentTab('Home Page')}>Home Page</button>
                <button  type="button" class="col detailbutton btn btn-light" onClick={() => setCurrentTab('Contact Page')}>Contact Page</button>
                <button type="button" class="col detailbutton btn btn-dark" onClick={() => setCurrentTab('Feature Page')}>Feature Page</button>
            </div>
            
            {renderTabContent(currentTab)}
            
            
        </div>
    );
}; 

export default LayoutSample;
