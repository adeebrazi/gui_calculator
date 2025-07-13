console.log("What Are You Doing Here ? You Sneaky Developer.")

let darkmode = document.getElementById('darkmode')

const t1=document.getElementById('t1')
const t2=document.getElementById('t2')
const t3=document.getElementById('sun')
const t4=document.getElementById('moon')

const enableDarkmode=()=>{
    document.body.classList.add('darkmode')
    t2.classList.add('opa50')
    t1.classList.remove('opa50')    
    t2.classList.add('tbg')
    t1.classList.remove('tbg')
    t3.classList.remove('circle')
    t4.classList.add('flip')
}

const disableDarkmode=()=>{
    document.body.classList.remove('darkmode')
    t2.classList.remove('opa50')
    t1.classList.add('opa50')
    t2.classList.remove('tbg')
    t1.classList.add('tbg')
    t3.classList.add('circle')
    t4.classList.remove('flip')
}

t2.addEventListener("click",()=>{
    darkmode!=="active" ? enableDarkmode() :disableDarkmode()
})

t1.addEventListener("click",()=>{
    darkmode!=="deactive" ? disableDarkmode() :enableDarkmode()
})

const display=document.querySelector('.form-control');
const buttons = document.querySelectorAll('.btn');

function calculateLeftToRight(expression) {
    // Split numbers and operators (like +, -, *, /)
    const parts = expression.match(/(\d+\.?\d*|\+|\-|\*|\/|%)/g);

    if (!parts) return "";

    let result = parseFloat(parts[0]); // Start with the first number

    for (let i = 1; i < parts.length; i += 2) {
        let operator = parts[i];
        let nextNumber = parseFloat(parts[i + 1]);

        if (operator === "+") {
            result = result + nextNumber;
        } else if (operator === "-") {
            result = result - nextNumber;
        } else if (operator === "*") {
            result = result * nextNumber;
        } else if (operator === "/") {
            result = result / nextNumber;
        }else if (operator === "%") {
            result = result % nextNumber;
        }
    }
    return result;
}

buttons.forEach((item) => {
    item.onclick = () => {
        try{
            if(item.dataset.buttons ==='AC'){
            display.value='';
        } else if(item.dataset.buttons ==='=' && display.value ===''){
            display.value='';
        }else if(item.dataset.buttons ==='C'){
            let string=display.value;
            display.value=string.substr(0,string.length-1);
        }else if (item.dataset.buttons ==='='){
            display.value = calculateLeftToRight(display.value);
        } else{
            display.value+=item.dataset.buttons;
        }
        }catch (err) {
            display.value='Invalid Entry';

        }
    }
})