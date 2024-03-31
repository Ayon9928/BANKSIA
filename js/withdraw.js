//step-1=add event listerner to the deposit
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2=get deposit ammont from the deposit field
    //for input field use ,value to the value inside the input field

    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmountString =withdrawField.value;
    const newwithdrawAmount =parseFloat(newwithdrawAmountString)

    withdrawField.value=''


    //step-3=get tthe current deposit total
    //for non-input(element other than input)user innerText to get the text
    const withdrawTotalELement =document.getElementById('withdraw-total');
    const previouswithdrawTotalString =withdrawTotalELement.innerText;
    const previouswithdrawTotal =parseFloat(previouswithdrawTotalString)
    if(isNaN(newwithdrawAmount)){
        alert('Please provide a valid number')
        return;
    }
   



    // step-5=get balance current total

const balanceTotalElement= document.getElementById('balance-total')
const previousBalanceTotalString= balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString)

withdrawField.value=''
if(newwithdrawAmount>previousBalanceTotal){
    alert('insufficient balance')
    return;
}

const currentwithdrawTotal=previouswithdrawTotal+newwithdrawAmount;



withdrawTotalELement.innerText=currentwithdrawTotal;


//step-6 calculate current total
const currentBalanceTotal = previousBalanceTotal-newwithdrawAmount;

balanceTotalElement.innerText=currentBalanceTotal;

    




})
