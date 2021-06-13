const range = document.querySelector('input[type="range"]');
const number = document.querySelector('input[type="number"]');
const form = document.querySelector('form');
const text = document.querySelector('h1');
const CapitalLetterCode ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smallLetterCode = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const small = document.getElementById('small');
const capital = document.getElementById('capital');

number.addEventListener('change' , () => {
    range.value = number.value;
})

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    createRandomNumber(number.value);
})


const createRandomNumber = (random) => {
    // create random number     
    if(small.checked && !capital.checked) {
        generatWithSmall(smallLetterCode,random);
    }else if(capital.checked && !small.checked) {
        generatWithCap(CapitalLetterCode,random);
    }else if(capital.checked && small.checked) {
        generatWithBoth(smallLetterCode,CapitalLetterCode,random);
    }else {
        generateRandomWithNone(random);
    }
    
}

const generatWithBoth = (s, c ,r) => {
    const looped = "1234567890" + c + s;
    // generate the password
    generate(looped, r);
}
const generatWithCap = (c,r) => {
    const looped = "1234567890" + c;
    generate(looped, r);
}
const generatWithSmall = (s,r) => {
    const looped = "1234567890" + s;
    generate(looped, r);
}
const generateRandomWithNone =(r) => {
    const looped = "1234567890";
    generate(looped, r)
}


const generate = (looped, r) =>{
    let pass = '';
    for (let i = 1 ; i<=r ; i++) {
        const random = Math.floor(Math.random() * looped.length);
        pass += looped[random];
    }
    text.innerHTML = pass;
}