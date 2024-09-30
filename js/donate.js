

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

const donationPurpose1 = document.getElementById('title-1').innerText;
const donationCard = document.createElement('div');

donationCard.classList.add('card', 'bg-base-100', 'p-4', 'mt-4', 'border', 'border-card_section_border');

const p = document.createElement('p');
p.style.fontWeight = 'bold';


p.innerText = `${firstAmountValue} Taka is Donated for ${donationPurpose1}`;

const date = document.createElement('p');

date.classList.add('text-base', 'text-gray-500', 'font-light');
date.innerText = `Date: ${new Date()}`;

donationCard.appendChild(p);
donationCard.appendChild(date);

document.getElementById('payment-container').appendChild(donationCard);

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


    const donationPurpose1 = document.getElementById('title-2').innerText;
const donationCard = document.createElement('div');

donationCard.classList.add('card', 'bg-base-100', 'p-4', 'mt-4', 'border', 'border-card_section_border');

const p = document.createElement('p');
p.style.fontWeight = 'bold';


p.innerText = `${secondAmountValue} Taka is Donated for ${donationPurpose1}`;

const date = document.createElement('p');

date.classList.add('text-base', 'text-gray-500', 'font-light');
date.innerText = `Date: ${new Date()}`;

donationCard.appendChild(p);
donationCard.appendChild(date);

document.getElementById('payment-container').appendChild(donationCard);
    
    
    
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


        const donationPurpose1 = document.getElementById('title-3').innerText;
const donationCard = document.createElement('div');

donationCard.classList.add('card', 'bg-base-100', 'p-4', 'mt-4', 'border', 'border-card_section_border');

const p = document.createElement('p');
p.style.fontWeight = 'bold';


p.innerText = `${thirdAmountValue} Taka is Donated for ${donationPurpose1}`;

const date = document.createElement('p');

date.classList.add('text-base', 'text-gray-500', 'font-light');
date.innerText = `Date: ${new Date()}`;

donationCard.appendChild(p);
donationCard.appendChild(date);

document.getElementById('payment-container').appendChild(donationCard);
        
        
        const modal = document.getElementById('my_modal_5');
  if (modal) {
    modal.showModal();
     }
        
        
        })

