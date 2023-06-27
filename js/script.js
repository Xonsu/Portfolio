'use strict';

const skills = {
    isSort: " ",
    data: [],

    generateList: function(skillList) {      
        skillList.innerHTML = ''; 
        this.data.forEach(function(item) {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            const div = document.createElement('div');
            
            dt.classList.add('skill-item');
            dd.classList.add('skill-level');
        
            dt.textContent = item.name;
            div.textContent = `${item.level}%`;
        
            div.style.width = `${item.level}%`;
            dt.style.backgroundImage = `url("img/${item.iconName}")`;
           
            dd.append(div);
        
            skillList.append(dt, dd);
        });
    },

    sortList: function (sortItem) {
            if(this.isSort !== sortItem) {
                this.data.sort(getCompare(`${sortItem}`));
                this.isSort = sortItem;
                console.log(`Сортировка данных по ${sortItem}`);
            } else {
                this.data.reverse();
        
                console.log('Инвертировали порядок сортировки');
            }
            this.generateList(skillList);
    },

    initList: function(url, parentElement, skillSection) {
        fetch(url)
            .then(data => data.json())
            .then(object => {
                this.data = object;
                this.generateList(parentElement);
            })
            .catch(() => {
                console.error('Fail');
                skillSection.remove();
            });
    }
};

const skillList = document.querySelector('dl.skill-list');

const skillSec = document.querySelector('.skills');

skills.initList('db/skills.json', skillList, skillSec);

const btns = document.querySelector('.flex-buttons');

btns.addEventListener('click', (e) => {
    let target = e.target;

    if(target.nodeName === "BUTTON") {
        skills.sortList(target.dataset.type);
    }
});

function getCompare(prop) {
    return function(a, b) {
        if(a[prop] < b[prop]) {
            return -1;
        }
        if(a[prop] > b[prop]) {
            return 1;
        }
        return 0;
    }
}

const mainNav = document.querySelector('.main-nav');

const burgerBtn = document.querySelector('.nav-btn ');

const menu = {
    navClose: function () {
        mainNav.classList.add('main-nav_closed');
        burgerBtn.classList.remove('nav-btn_close');
        burgerBtn.classList.add('nav-btn_open');
        burgerBtn.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
    },

    navOpen: function () {
        mainNav.classList.remove('main-nav_closed');
        burgerBtn.classList.remove('nav-btn_open');
        burgerBtn.classList.add('nav-btn_close');
        burgerBtn.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
    }
}

menu.navClose();

burgerBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('nav-btn_open')){
        menu.navOpen();
    } else {
        menu.navClose();
    }
});