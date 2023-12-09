const percentile = document.getElementById("input")
const calculate = document.getElementById("button")
const gen = document.getElementById("gen")
const ews = document.getElementById("ews")
const obc = document.getElementById("obc")
const scc = document.getElementById("scc")
const stt = document.getElementById("stt")

let currper = 0
let crl

calculate.addEventListener("click",()=>{
    currper = percentile.value
    calc()  
})

function calc(){
    crl = (100 - currper)*8500
    gen.innerText = crl
    obc.innerText = crl/4
    ews.innerText = crl/5.5
    scc.innerText = crl/8
    stt.innerText = crl/42

}