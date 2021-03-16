const menu = (burgerSelector, classActive) => {
    const burger = document.querySelector(burgerSelector);

    burger.addEventListener('click', () => {
        document.body.classList.toggle(classActive);
    });
}
export default menu;