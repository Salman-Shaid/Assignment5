document.getElementById('button-donate-quota').addEventListener('click',function(event){
    event.preventDefault();
    console.log('added donation button');

    // getInputFieldValueById();
    const donateAmountQuota = getInputFieldValueById('donate-amount-quota');
    
    if( typeof donateAmountQuota ==='number' && !isNaN(donateAmountQuota && donateAmountQuota < 0) ){
        const balanceQuota = getTextFiledValueById('current-balance-quota');
        const newBalanceQuota = balanceQuota + donateAmountQuota ;
        document.getElementById('current-balance-quota').innerText = newBalanceQuota;

        const now = new Date();
        const dateTimeString = now.toString();

        const div = document.createElement('div');
        div.classList.add('bg-gray-100', 'p-10', 'my-10', 'border-2', 'rounded-2xl', 'text-start','shadow-xl');
        div.innerHTML = `
        <h4 class= "text-4xl font-bold "> ${donateAmountQuota}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>

          <p class="text-gray-700 text-2xl mt-4">Date : <span class="font-semibold">${dateTimeString} </span></p>

        `

        document.getElementById('trans-container').appendChild(div);



        const needBalance = getTextFiledValueById('total-balance-need');
        const presentBalance = needBalance - donateAmountQuota ;
        document.getElementById('total-balance-need').innerText = presentBalance;
        document.getElementById('modal-show-amount').innerText = ` ${donateAmountQuota} tk.`;

    }
    else{
        alert('Please Enter Valid Amount');
    }

});