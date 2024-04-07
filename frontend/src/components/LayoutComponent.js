import React, { useState } from 'react';
// import '../styles/layout.css';

function LayoutComponent(prop) {
    const {primary, secondary, sup1, sup2, sup3} = prop;
    return (
        <>
        <div style={{backgroundColor: primary}}>This is the header</div>
        <div style={{backgroundColor: secondary}}>This is the body</div>
        <div style={{backgroundColor: sup1}}>This is the footer</div>
        </>
    );
}
export default LayoutComponent;