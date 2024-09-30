function getInputFieldValue(id){
    const inputValue = document.getElementById(id).value
    return parseFloat(inputValue)
}

function mainAccountBalance(id){
   const mainBalance= document.getElementById(id).innerText
   return parseFloat(mainBalance)
}

function totalDonation(id){
    const donationMoney= document.getElementById(id).innerText
    return parseFloat(donationMoney)
}

function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('payment-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function toggleBtn(Btn) {

    const donationBtn = document.getElementById('donation');
    const paymentBtn = document.getElementById('payment');


    donationBtn.classList.remove('bg-bcolor');
    donationBtn.classList.add('bg-white');

    paymentBtn.classList.remove('bg-bcolor');
    paymentBtn.classList.add('bg-white');


    selectedBtn.classList.remove('bg-white');
    selectedBtn.classList.add('bg-bcolor');
}


document.getElementById('donation').addEventListener('click', function () {
    showSectionById('donation-section');
    toggleBtn(this);
});

document.getElementById('history').addEventListener('click', function () {
    showSectionById('payment-section');
    toggleBtn(this);
});
