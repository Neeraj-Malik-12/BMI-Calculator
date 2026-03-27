let form = document.querySelector('form');
let button = document.querySelector('.calculate');
const result = document.querySelector('#result');


form.addEventListener('submit', (e) => {
    if(button.className == "calculate"){
    e.preventDefault();
    let height = Number(document.querySelector('#height').value);
    let weight = Number(document.querySelector('#weight').value);

    if(isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0){
        result.value = `Please enter a the inputs.`
        return;
    }

    let bmi = Number(weight/(height*height)).toFixed(2);
    console.log(bmi);

    if( bmi < 18.6){
        result.value = `BMI : ${bmi}. (UnderWeight).`;
        // document.body.style.backgroundImage = "url()";
    } 
    else if( bmi >= 18.6 && bmi <= 24.9){
        result.value = `BMI : ${bmi}. (Normal).`
        //confetti
        confetti({
            particleCount: 100,
            angle: 80,
            spread: 100,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 100,
            angle: 100,
            spread: 100,
            origin: { x: 1 }
        });
        // document.body.style.backgroundImage = "url()";
    } 
    else{
        result.value = `BMI : ${bmi}. (OverWeight).`
        // document.body.style.backgroundImage = "url()";
    }

    button.setAttribute('class', 'calnew');
    button.innerText = 'Recalculate';
    button.style.fontSize = '1.2rem';
    }

    else{
        form.reset();
    }
});
