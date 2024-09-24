document.getElementById('donate-button-top').addEventListener('click', function(){
    
    showPageById('donate-section');

    this.classList.remove('bg-gray-500');
    this.classList.add('bg-btn-color');

    const historyBtn = document.getElementById('history-button-top');
    historyBtn.classList.remove('bg-btn-color');
    historyBtn.classList.add('bg-gray-500');

});

document.getElementById('history-button-top').addEventListener('click', function(){
    showPageById('tans-section');

    this.classList.remove('bg-gray-500');
    this.classList.add('bg-btn-color');

    const donationBtn = document.getElementById('donate-button-top');
    donationBtn.classList.remove('bg-btn-color');
    donationBtn.classList.add('bg-gray-500');


});

