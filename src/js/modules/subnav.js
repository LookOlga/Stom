const subnav = (subnavSelector, arrowBtnsSelector) => {
    const subnav = document.querySelectorAll(subnavSelector);
    const arrowBtns = document.querySelectorAll(arrowBtnsSelector)

arrowBtns.forEach((item, i) => {
    item.addEventListener('click', (e) => {  
        const target = e.target;
        const subnavMenu = subnav[i];
        const subnavHeight = window.getComputedStyle(subnavMenu).height;
        if(subnavHeight === '0px') {
            subnavMenu.style.height = `${subnavMenu.scrollHeight}px`;
        } else {
            subnavMenu.style.height = `${subnavMenu.scrollHeight}px`;
            subnavMenu.style.height = '0';
        }
        
        e.stopPropagation();

        target.classList.toggle('rotateArrow');

    })

})
}

export default subnav;