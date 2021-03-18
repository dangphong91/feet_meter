function footToMeter() {
    let foot = document.getElementById("feed").value;
    let meter = foot * 0.305;
    document.getElementById("displaymeter").innerHTML = meter;
}
function meterToFoot() {
    let meter = document.getElementById("meter").value;
    let foot = meter * 3.279;
    document.getElementById("displayfeed").innerHTML = foot;
}