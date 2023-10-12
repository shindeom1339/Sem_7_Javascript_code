function rectangle() {
    var len = parseInt(document.getElementById("length").value);
    var bre = parseInt(document.getElementById("breadth").value);

    if(len<0 || bre<0){
      alert("Value can not be negative");
    }
    else{
    document.getElementById("area_rectangle").innerHTML = len * bre;
    }
  }
  function circle() {
    var rad = parseInt(document.getElementById("radius").value);
    if (rad<0){
      alert('Radius Can not be negative')
    }
    else{
    document.getElementById("area_circle").innerHTML = Math.PI * rad * rad;
    }
  }
  function triangle() {
    var a = parseInt(document.getElementById("sidea").value);
    var b = parseInt(document.getElementById("sideb").value);
    var c = parseInt(document.getElementById("sidec").value);
    if(a+b<=c || a+c<=b ||  b+c<=a){
      alert("Invalid Sides");

    }
    else{
    const s = (a + b + c) / 2;
    document.getElementById("area_triangle").innerHTML = Math.sqrt(
      s * (s - a) * (s - b) * (s - c)
    );
    }
}