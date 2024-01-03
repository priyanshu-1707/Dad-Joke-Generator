document.getElementById("btn").addEventListener("click", getJoke);
async function getJoke() {
    let config = {
        headers: 
        {
            Accept : "application/json",
        },
                 };
                 
    let a = await fetch("https://icanhazdadjoke.com/", config);
    let b = await a.json();
    document.getElementById("joke").innerHTML = b.joke;

}
