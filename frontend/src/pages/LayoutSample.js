import React, { useEffect } from 'react';
import '../styles/layout.css';

function LayoutSample() {
    const baseColor = 'red';
    return(
        <>
        <div class="container">
            <div class="mini-container">
                <div class="mini-page">
                    <div class="row current-layout"></div>
                    <div class="row recommended-layout">
                        <div class="col layout-cell">
                            an
                        </div>
                        <div class="col layout-cell">
                            an
                        </div>
                        <div class="col layout-cell">
                            an
                        </div>
                    </div>
                </div>

                
            </div>
            <div class="color-container">
                <div class="mini-page row">
                    <div class="color-palette col">
                        <div style={{backgroundColor: baseColor}} class="color-cell" id = "cell-1">Primary color</div>
                        <div class="color-cell" id = "cell-2">Secondary color</div>
                        <div class="color-cell" id = "cell-3">Complementary color</div>
                        <div class="color-cell" id = "cell-4">Complementary color</div>
                        <div class="color-cell" id = "cell-5">Complementary color</div>
                    </div>
                    <div class="random-button col">
                        <button type="button" class="btn btn-success">Random</button>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export default LayoutSample;