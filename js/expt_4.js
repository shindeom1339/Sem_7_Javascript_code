function compLocale() {
    var input11 = document.getElementById("str11").value;
    var input12 = document.getElementById("str12").value;
    var compValue = input11.localeCompare(input12);
    var output1;

    if (compValue == 0) {
        output1 = "Both Stings Are Equal";
    }
    else {
        output1 = "Both Strings Are Unequal";
    }
    document.getElementById("output1").innerHTML = output1;
}

function compRegEx() {
    var input21 = document.getElementById("str21").value;
    var input22 = document.getElementById("str22").value;
    var reg = new RegExp(input21, "gi");
    var result = reg.test(input22);
    if (result) {
        output2 = "Both Stings Are Equal";
    }
    else {
        output2 = "Both Strings Are Unequal";
    }
    document.getElementById("output2").innerHTML = output2;
}

function compUsing2eql() {
    var input31 = document.getElementById("str31").value;
    var input32 = document.getElementById("str32").value;
    var l31 = input31.length;
    var l32 = input32.length;
    var output31;
    var output32;
    if (l31 == l32) {
        output31 = "Both Stings Of Same Length";
        if (input31 == input32) {
            output32 = "Both Strings Are Equal";
        }
        else {
            output32 = "Both Strings Are Unequal";
        }
    }
    else {
        output31 = "Both Strings Are Of Unequal Length";
        output32 = " ";
    }
    document.getElementById("output31").innerHTML = output31;
    document.getElementById("output32").innerHTML = output32;
}

function compUsing3eql() {
    var input41 = document.getElementById("str41").value;
    var input42 = document.getElementById("str42").value;
    var output4;
    if (input41.toLowerCase() === input42.toLowerCase()) {
        output4 = "Both Stings Are Equal";
    }
    else {
        output4 = "Both Strings Are Unequal";
    }
    document.getElementById("output4").innerHTML = output4;
}

function compUsingUser (){
    var input51 = document.getElementById("str51").value;
    var input52 = document.getElementById("str52").value;
    var output5;
    var areEqual = true;

    if (input51.length !== input52.length) {
        areEqual = false;
    } else {
        for (var i = 0; i < input51.length; i++) {
            if (input51[i] !== input52[i]) {
                areEqual = false;
                break;
            }
        }
    }
    if (areEqual==true) {
        output5 = "Both Stings Are Equal";
    }
    else {
        output5 = "Both Strings Are Unequal";
    }
    document.getElementById("output5").innerHTML = output5;
}