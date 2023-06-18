'use strict';

const skills = {
    isSort: " ",
    data: [ 
        {
            skillName: "html",
            skillLevel: 50,
            iconName: "html.svg"
        }, 
        {
            skillName: "css",
            skillLevel: 40,
            iconName: "css.svg"
        }, 
        {
            skillName: "c++",
            skillLevel: 70,
            iconName: "c++.svg"
        }, 
        {
            skillName: "php",
            skillLevel: 20,
            iconName: "php.svg"
        }
    ],
    generateList: function(skillList) {      
        skillList.innerHTML = ''; 
        this.data.forEach(function(item) {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            const div = document.createElement('div');
            
            dt.classList.add('skill-item');
            dd.classList.add('skill-level');
        
            dt.textContent = item.skillName;
            div.textContent = `${item.skillLevel}%`;
        
            div.style.width = `${item.skillLevel}%`;
            dt.style.backgroundImage = `url("img/${item.iconName}")`;
           
            dd.append(div);
        
            skillList.append(dt, dd);
        });
    },

    getCompare: function(prop) {
        return function(a, b) {
            if(a[prop] < b[prop]) {
                return -1;
            }
            if(a[prop] > b[prop]) {
                return 1;
            }
            return 0;
        }
    },

    sortList: function (sortItem) {
        if(sortItem === "name") {
            if(this.isSort !== "name") {
                this.data.sort(this.getCompare('skillName'));
                this.isSort = "name";
                console.log('Сортировка данных по имени');
            } else {
                this.data.reverse();
        
                console.log('Инвертировали порядок сортировки');
            }
        
            this.generateList(skillList);
        }
        if(sortItem === "level")
        {
            if(this.isSort !== "level") {
                this.data.sort(this.getCompare('skillLevel'));
                this.isSort = "level";
                console.log('Сортировка данных по уровню');
            } else {
                this.data.reverse();
        
                console.log('Инвертировали порядок сортировки');
            }
        
            this.generateList(skillList);    
        }
    }
};

const skillList = document.querySelector('dl.skill-list');

skills.generateList(skillList);

const btns = document.querySelector('.flex-buttons');

btns.addEventListener('click', (e) => {
    let target = e.target;

    if(target.nodeName === "BUTTON") {
       
        switch(target.dataset.type) {
            
            case 'name':
                skills.sortList(target.dataset.type);
                break;

            case 'level':
                skills.sortList(target.dataset.type);
                break;

            default:
                console.log('Неизвестная кнопка');
        }
    }
});

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

