/*var card = document.getElementsByClassName('card');

[...card].forEach((card)=>{
    card.addEventListener('click', function(){
        card.classList.toggle('is-flipped');
    });
});*/

/*let card = document.getElementById('card');
document.getElementById("card").addEventListener("click" , myFunction());

function myFunction(){

    //card.classList.remove('card');
    card.classList.toggle('is-flipped');
}



//function myFunction() 

//var cards = document.getElementById('cards');

/*[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
}); */



const btn1 = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");

btn1.onclick = () => {
  widget.style.display = "none";
  post.style.display = "block";
}

