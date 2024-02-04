var start = document.getElementById('start')
var stop = document.getElementById('stop')
var reset = document.getElementById('reset')

var hour = document.getElementById('hour')
var min = document.getElementById('min')
var sec = document.getElementById('sec')

var startTimer = null;

function timer(){
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
        hour.value = 0;
        min.value = 0;
        sec.value = 0;
    }
    else if (sec.value!=0) {
        sec.value--;
    }
    else if(min.value !=0 && sec.value == 0) {
        sec.value = 59;
        min.value--;
    }
    else if(hour.value !=0 && min.value == 0) {
        min.value = 59;
        hour.value--;
    }
    return;
}

function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000)
    }
    startInterval();
})

reset.addEventListener('click', function(){
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    stopTimer();
})

stop.addEventListener('click', function(){
    stopTimer();
})

var hourInput = document.getElementById('hour');
var minInput = document.getElementById('min');
var secInput = document.getElementById('sec');
var errorMessage = document.getElementById('error-message');

hourInput.addEventListener('input', function() {
  if (hourInput.value > 99) {
    errorMessage.textContent = 'Error: Hour value cannot exceed 99.';
    hourInput.value = 99;
  } else {
    errorMessage.textContent = '';
  }
});

minInput.addEventListener('input', function() {
  if (minInput.value > 60) {
    errorMessage.textContent = 'Error: Minute value cannot exceed 60.';
    minInput.value = 60;
  } else {
    errorMessage.textContent = '';
  }
});

secInput.addEventListener('input', function() {
  if (secInput.value > 60) {
    errorMessage.textContent = 'Error: Second value cannot exceed 60.';
    secInput.value = 60;
  } else {
    errorMessage.textContent = '';
  }
});