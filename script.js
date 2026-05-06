let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Scientific Functions */

function sin() {
    display.value = Math.sin(toRadians(display.value));
}

function cos() {
    display.value = Math.cos(toRadians(display.value));
}

function tan() {
    display.value = Math.tan(toRadians(display.value));
}

function log() {
    display.value = Math.log10(display.value);
}

function sqrt() {
    display.value = Math.sqrt(display.value);
}

function power() {
    display.value = Math.pow(display.value, 2);
}

/* Convert Degrees to Radians */
function toRadians(value) {
    return value * (Math.PI / 180);
}