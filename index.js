var number_of_button = document.querySelectorAll(".drum").length;

for (var i = 0; i < number_of_button; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var button_inner_html = this.innerHTML ;

        makesound(button_inner_html);

        button_animation(button_inner_html);

});
}


document.addEventListener("keypress" , function (event){

    makesound(event.key);

    button_animation(event.key);

});


function makesound (key){

    switch (key){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        
        default :
        console.log(button_inner_html);
        
    }

}


function button_animation (current_key){
    var active_button = document.querySelector("."+current_key);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    }, 100 )
}
// this.style.color = "white";