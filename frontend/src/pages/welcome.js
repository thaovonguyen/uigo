import React, { useEffect } from 'react';
import iro from '@jaames/iro';
import Header from "../components/Header"
function WelcomePage() {
    useEffect(() => {
        const boxPicker = () =>
            iro.ColorPicker("#boxPicker", {
                width: 250,
                color: "#f00",
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
            return boxPicker;
    }, []);

    return (
        <>
            <Header />
            <div>
                <div className="Grid">
                    <div className="ColorPicker" id="boxPicker">
                        <h3>hehe</h3>
                        <boxPicker />
                    </div>
                </div>
            </div>
        </>

    );
}

export default WelcomePage