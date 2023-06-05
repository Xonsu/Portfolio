'use strict';
/*
const data = [ 
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
];

let skillList = document.querySelector('dl.skill-list');

data.forEach(function(item) {
    
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    const div = document.createElement('div');
    
    dt.classList.add('skill-item');
    dd.classList.add('skill-level');

    dt.textContent = item.skillName;
    div.textContent = item.skillLevel + '%';

    div.style.width = item.skillLevel + '%';
    dt.style.backgroundImage = `url('../img/${item.iconName}')`;
    
    dd.append(div);

    skillList.append(dt);
    skillList.append(dd);
});
skills.data.forEach(function(item) {
*/

const skills = {
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
        skills.data.forEach(function(item) {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            const div = document.createElement('div');
            
            dt.classList.add('skill-item');
            dd.classList.add('skill-level');
        
            dt.textContent = item.skillName;
            div.textContent = item.skillLevel + '%';
        
            div.style.width = item.skillLevel + '%';
            dt.style.backgroundImage = `url("../img/${item.iconName}")`;
           
            dd.append(div);
        
            skillList.append(dt);
            skillList.append(dd);
        });
    }
};

let skillList = document.querySelector('dl.skill-list');

skills.generateList(skillList);
