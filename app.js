const jokeEl=document.getElementById("jokes")
const jBtn=document.getElementById("jokebtn");


jBtn.addEventListener("click",generateJoke);
generateJoke()
function generateJoke(){
    const config={
        headers:{
            'Accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/',config)
    .then((response)=>response.json())
    .then((data)=>jokeEl.innerHTML=data.joke);
}