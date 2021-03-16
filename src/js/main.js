import './slider';
import './custom';
import menu from './modules/menu';
import subnav from './modules/subnav';
import search from './modules/search';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('isLoaded');
    }, 100);

    if(window.isMobile) {
        menu('.burger', 'menu-active');
  }
  
    subnav('.subnav', '._item.has-subnav ._arrow');
    search('.open-search ._btn', '._close', 'search-active');
})





