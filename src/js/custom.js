window.addEventListener('load', onResize);
window.addEventListener('resize', onResize);

function onResize(){
     window.isMobile = window.innerWidth < 1025;
     
     document.documentElement.classList.add(window.isMobile ? 'mobile': 'desktop');
     document.documentElement.classList.remove(!window.isMobile ? 'mobile': 'desktop');
}

