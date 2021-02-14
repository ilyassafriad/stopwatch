const watch = document.querySelector('.watch');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');


var a =0;
var b =0;
var c =0;
var interval;
start.addEventListener('click', ()=>{
    function time(){
        a++
       document.getElementById('seconds').innerText = a

       if(a == 59){
           a = 0
          b++
          document.getElementById('minutes').innerText = b
        }

        if(b == 59){
            b = 0
          c++
          document.getElementById('hours').innerText = c
        }
    }

    interval = setInterval(time, 1000);
})



stop.addEventListener('click', ()=>{
    clearInterval(interval);
})


reset.addEventListener('click', ()=>{
    document.querySelector('.seconds').innerHTML = "00" ;
    document.querySelector('.minutes').innerHTML = "00" ;
    document.querySelector('.hours').innerHTML = "00"
    clearInterval(interval);

    start.addEventListener('click', ()=>{
        window.location.href = "stopwatch.html" ;
    })
})