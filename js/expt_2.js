function forPrint() {
    var numFor = parseInt(document.getElementById("numFor").value);
    var out1 = "";
    for (let i = 1; i <= 10; i++) {
        out1 = out1 + numFor + " * " + i + " = " + numFor * i + "<br/>";
    }
    document.getElementById("result1").innerHTML = out1;
};

function WhilePrint() {
    var i = 1;
    var out2 = "";
    var numWhile = parseInt(document.getElementById("numWhile").value);
    while (i <= 10) {
        out2 = out2 + numWhile + " * " + i + " = " + numWhile * i + "<br/>";
        i++;
    }
    document.getElementById("result2").innerHTML = out2;
};

function DoWhilePrint() {
    var i = 1;
    var out3 = "";
    var numDoWhile = parseInt(document.getElementById("numDoWhile").value);
    do {
        out3 = out3 + numDoWhile + " * " + i + " = " + numDoWhile * i + "<br/>";
        i++;
    }
    while (i <= 10)
    document.getElementById("result3").innerHTML = out3;
};