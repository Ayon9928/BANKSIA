//step-1=add event listerner to the deposit
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2=get deposit ammont from the deposit field
    //for input field use ,value to the value inside the input field

    const depositField = document.getElementById('deposit-field');
    const newDespositAmountString =depositField.value;
    const newDespositAmount =parseFloat(newDespositAmountString)

    depositField.value=''


    //step-3=get tthe current deposit total
    //for non-input(element other than input)user innerText to get the text
    const depositTotalELement =document.getElementById('deposit-total');
    const previousDepositTotalString =depositTotalELement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString)
    if(isNaN(newDespositAmount)){
        alert('Please provide a valid number')
        return;
    }


    //step-4=add number to set total deposit
    const currentDepositTotal=previousDepositTotal+newDespositAmount;



    depositTotalELement.innerText=currentDepositTotal;
    

// step-5=get balance current total

const balanceTotalElement= document.getElementById('balance-total')
const previousBalanceTotalString= balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString)

//step-6 calculate current total
const currentBalanceTotal = previousBalanceTotal+newDespositAmount;

balanceTotalElement.innerText=currentBalanceTotal;










    //step-7=clear deposit field

   


    // console.log(depositTotal)



})


