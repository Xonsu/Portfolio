'use strict';

const checkBox = document.querySelector('.switch-checkbox');

const bodyTheme = document.querySelector('body');

checkBox.addEventListener('change', () => {
    if(checkBox.checked === true)
    {
       bodyTheme.classList.remove('dark-theme');
       localStorage.setItem('theme', 'light');
    } else {
        bodyTheme.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});

if(localStorage.getItem('theme') === 'light') {  
    bodyTheme.classList.remove('dark-theme');
    checkBox.checked = true;
} else {
    checkBox.checked = false;
}
