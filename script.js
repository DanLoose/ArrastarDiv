const caixa = document.querySelector("#caixa");
var xe, ye;


document.addEventListener("mousedown", iniciaArraste);
caixa.addEventListener("mouseup", terminaArraste);


function setPos(x, y) {
    caixa.style.top = y + "px";
    caixa.style.left = x + "px";
}

function iniciaArraste(e) {

    xe = e.clientX - pxParaNum(caixa.style.top);
    ye = e.clientY - pxParaNum(caixa.style.left);

    caixa.classList.add("arrastando");
    document.addEventListener("mousemove", arrasta);
}

function terminaArraste(e) {
    caixa.classList.remove("arrastando");
    document.removeEventListener("mousemove", arrasta);
}

function arrasta(e) {
    var x = e.clientX;
    var y = e.clientY;

    setPos(x - xe, y - ye);
}

function pxParaNum(s) {
    return +(s.replace("px", ""));
}