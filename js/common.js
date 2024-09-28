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
