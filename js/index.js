
document.getElementById('button-donate').addEventListener('click', function () {
    

    const donateAmount = getInputFieldValueById('donate-amount');

    if (typeof donateAmount === 'number' && !isNaN(donateAmount && donateAmount > 0)) {
        const balance = getTextFiledValueById('current-balance');
        const newBalance = balance + donateAmount;
        document.getElementById('current-balance').innerText = newBalance;


        const now = new Date();
        const dateTimeString = now.toString();

        const div = document.createElement('div');
        div.classList.add('bg-gray-100', 'p-10', 'my-10', 'border-2', 'rounded-2xl', 'text-start', 'shadow-xl');
        div.innerHTML = `
        <h4 class= "text-4xl font-bold "> ${donateAmount} tk Donated for Flood Relief in Noakhali , Bangladesh</h4>

          <p class="text-gray-700 text-2xl mt-2">Date : <span class="font-semibold">${dateTimeString} </span></p>

        `
        document.getElementById('trans-container').appendChild(div);

        const needBalance = getTextFiledValueById('total-balance-need');
        const presentBalance = needBalance - donateAmount;
        document.getElementById('total-balance-need').innerText = presentBalance;

        document.getElementById('modal-show-amount').innerText = ` ${donateAmount} tk.`;
        
        document.getElementById('my_modal_5').classList.remove('hidden');
        

    }
    else {
        
        alert('Please Enter A Valid Amount! And Try Again');
        
    }



});