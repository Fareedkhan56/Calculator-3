let inp = document.getElementById('input');

function Data(text) {
    inp.value = inp.value + text;
}

function Solution() {
    inp.value = eval(inp.value);
}

function Clear() {
    inp.value = "";
}

function Sqrt() {
    inp.value = Math.sqrt(inp.value);
}

function Square() {
    inp.value = eval(inp.value * inp.value);
}

function Sin() {
    inp.value = Math.sin(inp.value);
}

function Cos() {
    inp.value = Math.cos(inp.value);
}