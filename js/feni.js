document.getElementById('button-donate-feni').addEventListener('click',function(event){
    event.preventDefault();
    console.log('added donation button');

    const donateAmountFeni = getInputFieldValueById('donate-amount-feni');
    
    if( typeof donateAmountFeni ==='number' && !isNaN(donateAmountFeni && donateAmountFeni > 0) ){
        const balanceFeni = getTextFiledValueById('current-balance-feni');
        const newBalanceFeni = balanceFeni + donateAmountFeni ;
        document.getElementById('current-balance-feni').innerText = newBalanceFeni;

        const now = new Date();
        const dateTimeString = now.toString();

        const div = document.createElement('div');
        div.classList.add('bg-gray-100', 'p-10', 'my-10', 'border-2', 'rounded-2xl', 'text-start', 'shadow-xl');
        div.innerHTML = `
        <h4 class= "text-4xl font-bold "> ${donateAmountFeni} tk Donated for Flood Relief in Feni , Bangladesh</h4>

          <p class="text-gray-700 text-2xl mt-4">Date : <span class="font-semibold">${dateTimeString} </span></p>
        `;
        document.getElementById('trans-container').appendChild(div);

        const needBalance = getTextFiledValueById('total-balance-need');
        const presentBalance = needBalance - donateAmountFeni ;
        document.getElementById('total-balance-need').innerText = presentBalance;
        document.getElementById('modal-show-amount').innerText = ` ${donateAmountFeni} tk.`;

    }
    else{
        alert('Please Enter Valid Amount')
    }

});