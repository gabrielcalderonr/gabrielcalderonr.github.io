function calc(){
    let tempF = parseFloat(document.getElementById("high").textContent);
	let speed = parseFloat(document.getElementById("wspeed").textContent);
	
    let output = windChill(tempF, speed);
    
    document.getElementById("windChill").textContent = calc.toFixed(2);
}

function windChill(tempF,speed){
    if(tempF <= 50 && speed>=3){
		let t = tempF;
		let s = speed;
	let result = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
	
	 return result; 
	 
    } 
    
}

calc()
