var c = document.getElementById("canvas1");
        var context = c.getContext("2d");
        context.beginPath();
        context.arc(250, 250, 100,0, 2 * Math.PI,true);
        context.fillStyle= "yellow";
        context.fill();

        context.moveTo(310,220);
        context.arc(300, 220, 10,0, 2 * Math.PI,true);
        

        context.moveTo(220,220);
        
        context.arc(210, 220, 10,0, 2 * Math.PI,true);
        
        
        context.moveTo(330,250);
        context.arc(250, 250, 80,0,Math.PI,false);
        context.stroke();

        
        