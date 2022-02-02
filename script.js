var boy = document.getElementById("boy");
var boyIdleImageNumber = 1;
var boyIdleAnimationNumber = 0;

function boyIdleAnimation(){
    boyIdleImageNumber = boyIdleImageNumber + 1;
   
    if (boyIdleImageNumber == 11){
        boyIdleImageNumber = 1;
    }

    boy.src = "boy/Idle (" + boyIdleImageNumber + ").png"

}

function boyIdleAnimationStart (){
     boyIdleAnimationNumber =setInterval(boyIdleAnimation,150);
}

function keyListner(event){
    
    if(event.key == "Enter" ){
    boyRunAnimationStart();

    }
}


var boyRunAnimationImageNumber = 0;

function boyRunAnimation(){
    boyRunAnimationImageNumber = boyRunAnimationImageNumber + 1;

    if (boyRunAnimationImageNumber == 9){
        boyRunAnimationImageNumber = 1;
    }

    boy.src = "boy/Run (" + boyRunAnimationImageNumber + ").png";
}

function boyRunAnimationStart (){
    setInterval( boyRunAnimation, 200);
    clearInterval(boyIdleAnimationNumber); 
    
    
}