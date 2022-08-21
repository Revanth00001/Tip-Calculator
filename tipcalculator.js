//calculateBill() ==> billTotalInput
//calculateBill() ==> tipInput
//current number of people you are splitting ==> numberOfPeople
//per persontotal ==> perPersonTotal

const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeoplediv = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');


let numberOfPeople = Number(numberOfPeoplediv.innerText)


const calculateBill = () => {
    
    // perPersonTotal.innerText = (Number(billInput.value) + (Number(tipInput.value)/100*Number(billInput.value)));
        let x = Number(numberOfPeoplediv.innerText)
        if(x>1&&x<30)
        {
            perPersonTotal.innerText = `$ ${(Number(billInput.value) + (Number(tipInput.value)/100*Number(billInput.value)))/x}`;
        }
        else{
            perPersonTotal.innerText = `$ ${(Number(billInput.value) + (Number(tipInput.value)/100*Number(billInput.value)))}`;
        }
}

const increasePeople = () => {
        
    if(Number(numberOfPeoplediv.innerText)>=1 && numberOfPeoplediv.innerText < 30)
    {

        numberOfPeoplediv.innerText =  Number(numberOfPeoplediv.innerText) + 1;
    }
    else{
        numberOfPeoplediv.innerText = 1;
    }
    calculateBill();
     
}

const decreasePeople = () => {
    if(Number(numberOfPeoplediv.innerText)>=2 && numberOfPeoplediv.innerText < 30)
    {

        numberOfPeoplediv.innerText =  Number(numberOfPeoplediv.innerText) - 1;
    }
    else{
        numberOfPeoplediv.innerText = 1;
    }
    calculateBill();
}
