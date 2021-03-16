const search = (btnOpenSelector, btnCloseSelector, classActive) => {
    const btnOpen = document.querySelector(btnOpenSelector);
    const btnClose = document.querySelector(btnCloseSelector);
    const body = document.body;


    btnOpen.addEventListener('click', () => {
        body.classList.add(classActive);
    })

    btnClose.addEventListener('click', () => {
        body.classList.remove(classActive);
    })
}

export default search;