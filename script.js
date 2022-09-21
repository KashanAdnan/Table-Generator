const num = document.querySelector("#num");
const btn = document.querySelector("#gen"); 
const result = document.querySelector(".result"); 
const times = document.querySelector(".times"); 
btn.addEventListener("click", ()=>{
    let t = times.value;
    result.innerHTML = null;
    let n = num.value;
    console.log(n);
    for(let i = 1; i <= t; i++){
        let a = `${n} x ${i} = ${n * i}<br>`;
        result.innerHTML += a;
    }
});