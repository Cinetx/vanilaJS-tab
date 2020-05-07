// 

//  wrapper - сюда вписываем КЛАСС обертки через точку, в нём должен находиться элемент по которому мы будем совершать клик.
//  clickedElement - сюда вписываем КЛАСС элемента, по которому мы будем кликать.
//  content - сюда вписываем КЛАСС элемента через точку, который мы хотим скрыть.




let wrapper = '',
    clickedElement = '',    
    content = ''
    
//  classShow - сюда вписываем CSS КЛАСС который показывает элемент.
//  classHide - сюда вписываем CSS КЛАСС который скрывает элемент.
    classHide = '',
    classShow = '';
    

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.getElementsByClassName(clickedElement),
        tabWrapper = document.querySelector(wrapper),
        tabContent = document.querySelectorAll(content);

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');        
        }
    };
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    tabWrapper.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains(clickedElement)) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break
                }
            }
        }
    });
});
