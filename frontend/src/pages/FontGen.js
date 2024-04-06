import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import '../styles/main.css';
import '../styles/fontgen.css';
import '../styles/font.css';

function FontGenPage() {
    const [titleText, setTitleText] = useState('Lorem Ipsum');
    const [bodyText, setBodyText] = useState(`One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.`);
    const [titleFont, setTitleFont] = useState('Arial');
    const [bodyFont, setBodyFont] = useState('Arial');

    const mytitle = document.getElementById("title-text");
    const mybody = document.getElementById("body-text");
    const fonts = [
        "ABeeZee",
        "Abel",
        "Alfa Slab One",
        "Amaranth",
        "Anonymous Pro",
        "Arimo",
        "Archivo",
        "Barlow",
        "BioRhyme",
        "Bitter",
        "Cabin",
        "Cardo",
        "Chakra Petch",
        "Chivo",
        "Crete Round",
        "DM Sans",
        "DM Serif Text",
        "Didact Gothic",
        "Domine",
        "Dosis",
        "EB Garamond",
        "Figtree",
        "Fira Sans",
        "Francois One",
        "Gabarito",
        "Gentium Book Basic",
        "Grenze",
        "IBM Plex Mono",
        "IBM Plex Serif",
        "Imprima",
        "Inconsolata",
        "Instrument Sans",
        "Instrument Serif",
        "Inter",
        "Istok Web",
        "Josefin Sans",
        "Karla",
        "Lexend",
        "Lato",
        "Libre Baskerville",
        "Libre Franklin",
        "Lora",
        "Magra",
        "Manrope",
        "Maven Pro",
        "Merriweather",
        "Metrophobic",
        "Montserrat",
        "Muli",
        "Nanum Gothic",
        "Neuton",
        "Outfit",
        "Overpass",
        "Ovo",
        "Plus Jakarta Sans",
        "Playfair Display",
        "Public Sans",
        "Quando",
        "Questrial",
        "Quicksand",
        "Rajdhani",
        "Rokkitt",
        "Rubik",
        "Rufina",
        "Saira",
        "Scope One",
        "Sintony",
        "Slabo 13px",
        "Space Mono",
        "Stint Ultra Expanded",
        "Taviraj",
        "Titillium Web",
        "Ultra",
        "Varela Round",
        "Work Sans"
    ]

    function randomFont() {
        const randNum = Math.floor(Math.random() * fonts.length);
        const randFont = fonts[randNum];
        return randFont;
    }

    const setTitleFontHandler = () => {
        const titleFont = randomFont();
        document.getElementById("title-text").style.fontFamily = titleFont;
    };

    const setBodyFontHandler = () => {
        const bodyFont = randomFont();
        document.getElementById("body-text").style.fontFamily = bodyFont;
    };

    const switchFontsHandler = () => {
        const temp = titleFont;
        setTitleFont(bodyFont);
        setBodyFont(temp);
        document.getElementById("title-text").style.fontFamily = bodyFont;
        document.getElementById("body-text").style.fontFamily = temp;
    };

    const setTitleAndBodyHandler = () => {
        const titleFont = randomFont();
        const bodyFont = randomFont();
        document.getElementById("title-text").style.fontFamily = titleFont;
        document.getElementById("body-text").style.fontFamily = bodyFont;
    };

    const textBiggerHandler = () => {
        document.getElementById("title-text").style.fontSize = "2.6em";
        document.getElementById("title-text").style.lineHeight = "1em";
        document.getElementById("body-text").style.fontSize = "1.2em";
        document.getElementById("body-text").style.lineHeight = "2.6em";
    };

    const textSmallerHandler = () => {
        document.getElementById("title-text").style.fontSize = "1.5em";
        document.getElementById("title-text").style.lineHeight = ".8em";
        document.getElementById("body-text").style.fontSize = ".8em";
        document.getElementById("body-text").style.lineHeight = "1em";
    };

    const alignLeftHandler = () => {
        document.getElementById("title-text").style.textAlign = "left";
        document.getElementById("body-text").style.textAlign = "left";
    };

    const alignCenterHandler = () => {
        document.getElementById("title-text").style.textAlign = "center";
        document.getElementById("body-text").style.textAlign = "center";
    };

    const alignRightHandler = () => {
        document.getElementById("title-text").style.textAlign = "right";
        document.getElementById("body-text").style.textAlign = "right";
    };

    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="box">
            <div className="titletext" id="title-text" onDoubleClick={setTitleFontHandler} contentEditable={true} spellCheck={false}>
                {titleText}
            </div>
            <p></p>
            <div className="bodytext" id="body-text" onDoubleClick={setBodyFontHandler} contentEditable={true} spellCheck={false}>
                {bodyText}
            </div>
            <div className="whichfont" id="info">
                Double click to change.
            </div>
            <div className="buttons">
                <button onClick={textBiggerHandler} data-testid="plus-button"><i data-feather="plus-circle"></i></button>
                <button onClick={textSmallerHandler} data-testid="minus-button"><i data-feather="minus-circle"></i></button>
                <button onClick={alignLeftHandler} data-testid="align-left-button"><i data-feather="align-left"></i></button>
                <button onClick={alignCenterHandler} data-testid="align-center-button"><i data-feather="align-center"></i></button>
                <button onClick={alignRightHandler} data-testid="align-right-button"><i data-feather="align-right"></i></button>
                <br />
                <button onClick={setTitleAndBodyHandler}><i data-feather="loader"></i>Change Fonts</button>
                <button onClick={switchFontsHandler}><i data-feather="shuffle"></i>Swap Fonts</button>
                {/* <button onClick={randomiseBackgroundHandler}><i data-feather="droplet"></i>Change Color</button> */}
            </div>
        </div>
    );
}

export default FontGenPage;