window.addEventListener('load', onResize);
window.addEventListener('resize', onResize);


function onResize(){
 
    let isMobile = window.innerWidth < 1024;

     document.documentElement.classList.add(isMobile ? 'mobile': 'desktop');
     document.documentElement.classList.remove(!isMobile ? 'mobile': 'desktop');
}