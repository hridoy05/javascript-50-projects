//set inital count
let count = 0

//select value and buttons

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn){
    btn.addEventListener("click",function(e){
        
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
            if(count < 0) count = 0
        }
        else if(styles.contains('increase')){
            count++
        }
        else{
            count = 0
        }
        count>0? value.style.color="green":count<0?value.style.color="red":value.style.color="black"
        value.textContent = count
    })
})
