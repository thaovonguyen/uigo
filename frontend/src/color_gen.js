// Require the TinyColor library
const tinycolor = require('tinycolor2');

function complementaryColor(hexColor) {
    // Create a TinyColor object from the hexadecimal color
    var color = tinycolor(hexColor);
    var colors = [hexColor];
    var mono = monochromaticColor(hexColor, 3, 20);
    mono.shift();
    colors = colors.concat(mono);

    // Get the complementary color using TinyColor's method
    var complementColor = color.complement();

    // Return the complementary color in hexadecimal format
    mono = monochromaticColor(complementColor.toHexString(), 2, 20);
    mono.shift();
    colors = colors.concat(mono);
    colors.push(complementColor.toHexString());
    return colors
}

// Define the generateMonochromaticColors function
// function monochromaticColor(baseColorHex, numOfShades = 5) {
//     // Create a TinyColor object from the base hexadecimal color
//     var baseColor = tinycolor(baseColorHex);

//     // Generate monochromatic colors
//     var monochromaticColors = baseColor.monochromatic(numOfShades).map(function(color) {
//         return color.toHexString(); // Convert colors to hexadecimal format
//     });

//     return monochromaticColors;
// }

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function monochromaticColor(baseColorHex, numColors = 5, lightnessStep = 10) {
    var colors = [];
    var baseColor = tinycolor(baseColorHex);
    var baseColorDarken = tinycolor(baseColorHex);
    lightnessStep = getRandomNumber(15,30);
    for (var i = 0; i < numColors; i++) {   
        // Check if the generated color is white
        if (colors[colors.length-1] == "#ffffff") {
            for (var j = 1; j < numColors - i + 1; j++) {
                var newColor = baseColorDarken.darken(j * lightnessStep).toHexString();
                colors.push(newColor);
                if (j == numColors - i) break;
            }
            break;
        }
        else {
            var newColor = baseColor.lighten(i * lightnessStep).toHexString();
            colors.push(newColor); // Add the new color to the list
        }
    }
    return colors;
}

function analogousColor(baseColorHex, hueVariation = 60) {
    var saturation = getRandomNumber(0, 100);
    var lightness = getRandomNumber(0, 100);
    var colors = [baseColorHex];
    var mono = monochromaticColor(baseColorHex, 3, 20);
    mono.shift();
    colors = colors.concat(mono);

    var baseColor = tinycolor(baseColorHex);
    var baseHue = baseColor.toHsv().h;
    var newHue = (baseHue + (1 * hueVariation / 360.0)) % 1.0;
    // Create a new color with the adjusted hue
    var newColor = tinycolor({h: newHue * 360, s: saturation, v: lightness});

    // Convert the color to hexadecimal and add it to the list
    mono = monochromaticColor(newColor.toHexString(), 2, 20);
    mono.shift();
    colors = colors.concat(mono);
    colors.push(newColor.toHexString());
    return colors;
}

export function randomFunction(baseColor) {
    const position = getRandomNumber(0,100);
    if (position < 10) {
        console.log('complementaryColor');
        return complementaryColor(baseColor);
    }
    if (position <= 70 ) {
        console.log('monochromaticColor');
        return monochromaticColor(baseColor);
    }
    else {
        console.log(position);
        console.log('analogousColor');
        return analogousColor(baseColor);
    }
    
}
// Example usage
// var hexColor = "#808080"; // Red color
// var complementary = randomFunction(hexColor);
// // var monochromatic = monochromaticColor(hexColor, 5);
// console.log("Color:", complementary);