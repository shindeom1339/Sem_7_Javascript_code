var arr;
var n;
function lengthh() {
  n = parseInt(document.getElementById("1").value);
  arr = new Array();
  var str = "You have entered length:" + n;
  document.getElementById("res").innerHTML = str;
}
function Append() {
  let arrval = document.getElementById("2").value;
  if (arr.length < n) {
    arr.push(arrval);
    var str = "You have entered :" + arr;
    document.getElementById("res").innerHTML = str;
  } else {
    document.getElementById("res").innerHTML = "Array full";
  }
}
function IsArray() {
  let checkarr = Array.isArray(arr);
  document.getElementById("res").innerHTML = checkarr;
}
function Empty() {
  Array = [];
  document.getElementById("res").innerHTML = "Array is Emptied";
}
function Display() {
  var str = "";
  var str = "You have entered :" + arr;
  document.getElementById("res").innerHTML = str;
}
