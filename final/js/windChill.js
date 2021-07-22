let t = parseFloat(document.getElementById("temperature").innerHTML);
let w = parseFloat(document.getElementById("windspeed").innerHTML);

if (t >= 50 && w >= 3) {
    let windChill = 35.74 + 0.6215 * t - 35.75 * w *.16 + .4275 * t * w * .16;
    document.getElementById("windChill").innerText = parseInt(windChill);
}
else{
    document.getElementById("windChill").innerText = "N/A";
}