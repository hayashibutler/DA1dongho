window.onload = function(){
	let tens = 0;
	let j = 0;
	let minute = 0;
    let appendTens = document.getElementById('msec')
    let appendSeconds = document.getElementById('sec')
    let appendMinute = document.getElementById('min')
    let buttonStart = document.getElementById('button-start')
    let buttonStop = document.getElementById('button-stop')
    let buttonReset = document.getElementById('button-reset')
	let x;

    buttonStart.onclick = function() {
    	clearInterval(x)
    	x = setInterval(start,10)
    }
    buttonStop.onclick = function() {
        clearInterval(x)
    }
    buttonReset.onclick = function reset(){
		//clearInterval(buttonstart);
		tens=0;
		j=0;
	  	j = j.toString();
		tens = tens.toString();
		appendSeconds.innerHTML=tens.padStart(2,0);
		appendTens.innerHTML=j.padStart(2,0);
	}

	function start(){
	    tens++;
	    if (tens<100) {
            tens = tens.toString();
	        appendTens.innerHTML=tens.padStart(2,0);
	    }
	    if (tens==100) {
	  	    j++;
	  	    tens = 0;
	    	j = j.toString();
	    	tens = tens.toString();
	    	appendSeconds.innerHTML=j.padStart(2,0);
	        appendTens.innerHTML=tens.padStart(2,0);
	    }
	    if (j==60) {
	    	minute++;
            j = 0;
            tens =0;
            j = j.toString();
	    	tens = tens.toString();
	    	minute = minute.toString()
	    	appendSeconds.innerHTML=j.padStart(2,0);
	        appendTens.innerHTML=tens.padStart(2,0);
	        appendMinute.innerHTML=minute.padStart(2,0);
	    }
	}
}
