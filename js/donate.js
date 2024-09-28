

document.getElementById('first-btn').addEventListener('click', function(event){

event.preventDefault();
const mainMoneyValue= mainAccountBalance('main-money')
const firstAmountValue= getInputFieldValue('first-amount')
if(firstAmountValue <= 0){
   return alert('Invalid Donation Amount!')
}
if(mainMoneyValue< firstAmountValue){
    return alert('Insufficient balance to donate')
    }

const getAmount= mainMoneyValue - firstAmountValue
document.getElementById('main-money').innerText= getAmount ;

const donateValue = totalDonation('first-donate')
const afterDonate = donateValue + firstAmountValue

document.getElementById('first-donate').innerText = afterDonate

const modal = document.getElementById('my_modal_5');
if (modal) {
    modal.showModal();
}



})


document.getElementById('second-btn').addEventListener('click', function(event){

    event.preventDefault();
    const mainMoneyValue= mainAccountBalance('main-money')
    const secondAmountValue= getInputFieldValue('second-amount')
    if(secondAmountValue <= 0){
       return alert('Invalid Donation Amount!')
    }
    if(mainMoneyValue< secondAmountValue){
        return alert('Insufficient balance to donate')
        }
    
    const getAmount= mainMoneyValue - secondAmountValue
    document.getElementById('main-money').innerText= getAmount ;
    
    const donateValue = totalDonation('second-donate')
    const afterDonate = donateValue + secondAmountValue
    
    document.getElementById('second-donate').innerText = afterDonate
    
    
    
    const modal = document.getElementById('my_modal_5');
if (modal) {
    modal.showModal();
}
    
    })


    document.getElementById('third-btn').addEventListener('click', function(event){

        event.preventDefault();
        const mainMoneyValue= mainAccountBalance('main-money')
        const thirdAmountValue= getInputFieldValue('third-amount')
        if(thirdAmountValue <= 0){
           return alert('Invalid Donation Amount!')
        }
        if(mainMoneyValue< thirdAmountValue){
            return alert('Insufficient balance to donate')
            }
        
        const getAmount= mainMoneyValue - thirdAmountValue
        document.getElementById('main-money').innerText= getAmount ;
        
        const donateValue = totalDonation('third-donate')
        const afterDonate = donateValue + thirdAmountValue
        
        document.getElementById('third-donate').innerText = afterDonate
        
        
        const modal = document.getElementById('my_modal_5');
  if (modal) {
    modal.showModal();
     }
        
        
        })

