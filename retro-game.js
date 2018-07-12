

//get Canvas
var spiel = document.getElementById('game');
var context = spiel.getContext('2d');


//set images
sprites = new Image();
sprites.src = 'assets/frogger.png'; 
sprites.onload = function() {       //after images are load


    //Create Cars
for(i=0;i<3;i++){
    car[i] = new car(50*i,0,2,"right")

}
for(i=3;i<5;i++){
   car[i] = new car(50*i,1,2.5,"left")
}

for(i=5;i<7;i++){
    car[i] = new car(50*i,2,2.3,"right",1.2)
  
 }
 
wood1 = new wood(50,0,5,"left")

inter= setInterval(game_loop, 16);      //loop //85 mileseconds = ~  30 FPS (motion human able to see)
    
    };



//-----------------------loop event---------------------------

var game_loop = function(){
    
    drawBackground();
   
    drawFrog();
    checkWater();    
        
    wood1.move();
    for(i=0;i<=car.length+1;i++){
        car[i].move();                //loop through all cars
        car[i].checkCrash();
    }
    
  

   
}

//----------------------------draw background------------

var drawBackground = function() {
    context.fillStyle='#191970'; //color
    context.fillRect(0,0,399,284);  //fill syle
    context.fillStyle='#000000';       //new color after first 
    context.fillRect(0,284,399,283);    //fill style
                    // image,x old, y old, width old, height old, x new, y new, width new, height new
    context.drawImage(sprites, 0, 0, 399, 113, 0, 0, 399, 113);
    context.drawImage(sprites, 0, 119, 399, 34, 0, 283, 399, 34);
    context.drawImage(sprites, 0, 119, 399, 34, 0, 495, 399, 34);
   
  
};

var drawFrog = function(){

    switch(frog.picture){
        case 0: context.drawImage(sprites, 12, 369, 23, 20, frog.x , frog.y, 23, 20); // draw frog up
                break;
        case 1:context.drawImage(sprites, 80, 369, 23, 20, frog.x , frog.y, 23, 20); // draw frog down
                break;
        case 2:context.drawImage(sprites, 75, 337, 23, 20, frog.x , frog.y, 23, 20); // draw frog left
                break;
        case 3:context.drawImage(sprites, 12, 335, 23, 22, frog.x , frog.y, 23, 22); // draw frog right
                break;
    }
}

var checkWater = function(){
    if(frog.y <= spiel.height / 2 ){
        alert("Water")
    }
}


//---------------keydown event------------------------

    document.body.onkeydown = function(event){
      
       if(event.keyCode==38 && frog.y -100 > 0){ 
       frog.picture = 0;
        frog.y = frog.y - 35;
        
       }else if(event.keyCode == 40 && frog.y  < spiel.height -80){
        frog.picture = 1;
        frog.y = frog.y + 35;
       }
       else if(event.keyCode == 37 && frog.x >40){
        frog.picture = 2;
        frog.x = frog.x - 42;
       }
       else if(event.keyCode == 39 && frog.x < spiel.width - 50){
        frog.picture = 3;
        frog.x = frog.x + 42;
       
    }
         
        
    };



    //-----------------------------------------classes-----------------

       

          
        var car =function(x,row,speed,direc,length){      //parameter x y bzw row and speed have to be given
            this.x = x
            this.row = row
            this.y = 460 - row * 30
            this.speed = speed
            this.direction = direc           
            this.lenght = length || 1
        
    
        this.move= function(){
           
            switch(this.direction){
                case "left": this.x <= spiel.width + 20 ? this.x = (this.x + this.speed) : this.x = -20; //move right
                            break;
                case "right":this.x >= -20 ? this.x = (this.x - this.speed) : this.x = spiel.width +20; //move left
            }
            
          
            switch(this.row){
                case 0:context.drawImage(sprites, 8, 265, 30, 22, this.x, this.y, 30, 22);  //pink car
                        break;
                case 1:context.drawImage(sprites, 44, 265, 30, 22, this.x , this.y, 30, 22); //car red wheel
                        break;
                case 2:context.drawImage(sprites, 100, 300, 60, 22, this.x , this.y, 60, 22); //LKW
               
                        break;
            }
            
        }
        this.checkCrash = function(){
           
            //if in hitbox of frog alert crash
            if(frog.x+10 >= this.x && frog.x-10 <= this.x * this.lenght && frog.y <= this.y +10 && frog.y >= this.y -10 ){
                alert("crash");
            }

        }
    }
        

    var wood =function(x,row,speed,direc,length){      //parameter x y bzw row and speed have to be given
        this.x = x
        this.row = row
        this.y = 250
        this.speed = speed
        this.direction = direc           
        this.lenght = length || 1
    

        this.move= function(){
       console.log("move")
        switch(this.direction){
            case "left": this.x <= spiel.width + 20 ? this.x = (this.x + this.speed) : this.x = -20; //move right
                        break;
            case "right":this.x >= -20 ? this.x = (this.x - this.speed) : this.x = spiel.width +20; //move left
        }
        
      
        switch(this.row){
            case 0: context.drawImage(sprites, 10, 225, 90, 28 ,this.x, this.y, 90, 28);  //pink car
            console.log("move")
                    break;
        
        }
        
        }
        this.checkOn = function(){
                

        }

    }

        var frog = {
            x:spiel.width / 2 -15,
            y:spiel.height -55,
            picture:0
            };






	
	
	