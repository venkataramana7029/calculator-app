var doadd = () => {
    var firstvalue = document.querySelector("#fval").value;
    firstvalue = parseInt(firstvalue);
    var secondvalue = document.querySelector("#sval").value;
    secondvalue = parseInt(secondvalue);
    var result = firstvalue + secondvalue;

    document.querySelector("span").innerHTML = result;
    document.querySelector(".rblock").style.display = 'block';
}
var dosub = () => {
    var firstvalue = document.querySelector("#fval").value;
    firstvalue = parseInt(firstvalue);
    var secondvalue = document.querySelector("#sval").value;
    secondvalue = parseInt(secondvalue);
    var result = firstvalue - secondvalue;

    document.querySelector("span").innerHTML = result;
    document.querySelector(".rblock").style.display = 'block';
}
var domul = () => {
    var firstvalue = document.querySelector("#fval").value;
    firstvalue = parseInt(firstvalue);
    var secondvalue = document.querySelector("#sval").value;
    secondvalue = parseInt(secondvalue);
    var result = firstvalue * secondvalue;

    document.querySelector("span").innerHTML = result;
    document.querySelector(".rblock").style.display = 'block';
}
var dodiv = () => {
    var firstvalue = document.querySelector("#fval").value;
    firstvalue = parseInt(firstvalue);
    var secondvalue = document.querySelector("#sval").value;
    secondvalue = parseInt(secondvalue);
    var result = firstvalue / secondvalue;

    document.querySelector("span").innerHTML = result;
    document.querySelector(".rblock").style.display = 'block';
}