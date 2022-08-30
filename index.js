let show=document.getElementById("screen");
// An array with all buttons
var buttons=document.querySelectorAll("button");
//blank string to store and display operated value
let newScreen='';
buttons.forEach(function(element){
    element.addEventListener("click", function(event){
        let buttonText = event.target.innerText;
        console.log("text= "+buttonText);
        show.value=0;
         if(buttonText=='X'){
             buttonText='*';
             newScreen += buttonText;
             show.value=newScreen;
        }
        else if(buttonText=='C'){
            show.value="0";
            newScreen="";
        }
        else if(buttonText=='='){
            show.value=eval(newScreen);
        } 
        else{
            newScreen += buttonText;
            show.value=newScreen;
        }
    });
});