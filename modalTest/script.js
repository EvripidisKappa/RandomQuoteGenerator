const openBtn=document.querySelector(".js-open");
const modalBg= document.getElementById("modal-background")
const modalBox=document.getElementById("modal-box")
const QuoteBtn=document.querySelector(".js-close")
const CloseBtn=document.querySelectorAll(".js-close")
const quoteText=document.querySelector(".quote");
const authorName=document.querySelector(".author");
const newQuote=document.querySelector(".js-new")
// const quoteText= document.querySelector(".quote")
openBtn.addEventListener('click', function(event)
{
    event.preventDefault()
    // console.log("Click!!")
    modalBg.classList.add("active")
    modalBox.classList.add("active")
    openBtn.style.opacity=0;
})
CloseBtn.forEach(node=>{
    node.addEventListener('click', function(e) {
        e.preventDefault()
        modalBg.classList.remove("active")
        modalBox.classList.remove("active")
        openBtn.style.opacity=1;
    })

})
function randomQuote(){
    console.log("Clicked")
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
    })
}
QuoteBtn.addEventListener("click", randomQuote);
newQuote.addEventListener("click",randomQuote);