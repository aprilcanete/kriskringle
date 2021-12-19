console.log('kris kringle');

var buttons = document.querySelectorAll('button');
var userClicked;

function disableBtn() {
    for (let i = 0; i < buttons.length; i++) {
        var btn = buttons[i];

        btn.removeEventListener('click', handleClick)
    }  
}



function handleClick(event) {
    userClicked = event.target;

    // userClicked.style.backgroundColor = 'red'

    if (userClicked.dataset.number == 4) {
        userClicked.innerText = 'You got Deo!'

        userClicked.className = 'clicked-btn'
        disableBtn();
    } else if (userClicked.dataset.number == 2) {
        userClicked.innerText = 'You got April!'

        changeStyle(userClicked.dataset.number);
        disableBtn();
    } else if (userClicked.dataset.number == 3) {
        userClicked.innerText = 'You got Bibs!'

        userClicked.className = 'clicked-btn'
        disableBtn();
    } else if (userClicked.dataset.number == 5) {
        userClicked.innerText = 'You got Jave!'

        userClicked.className = 'clicked-btn'
        disableBtn();
    } else {
        userClicked.innerText = 'You got Nicole!'

        userClicked.className = 'clicked-btn'
        disableBtn();
    }
    
}



buttons.forEach(box => box.addEventListener('click', handleClick));