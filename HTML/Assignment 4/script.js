function noworker(){
        for(var i = 0;i<100;i++){
            console.log(i);
        }
}

function createalert(){
    alert("Elert Raised");
}

function withworker(){
    console.log("worker started");
    
     w = new Worker("loop.js");
}

function stopworker(){
    console.log("Stopped")
    w.terminate();
}