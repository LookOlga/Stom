import './custom';
import './slider';
import menuActive from './modules/menu';
import subnav from './modules/subnav';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const menu = new menuActive({
        selector: '.burger', 
        menuItemsParent: '.navigation', 
        classActive:'menu-active'}
        ).init();

    subnav('.subnav', '._item.has-subnav ._arrow');
})




