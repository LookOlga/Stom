class menuActive {
    constructor(obj) {
        this.selector = obj.selector;
        this.menuItemsParent = obj.menuItemsParent;
        this.classActive =obj.classActive;
    }

    init() {
        this.selector = document.querySelector(this.selector);
        this.menuItemsParent = document.querySelector(this.menuItemsParent);

        this.selector.addEventListener('click', () => {
            document.body.classList.toggle(this.classActive);
        });

        this.menuItemsParent.addEventListener('click', (e) => {
            const target = e.target;

            if (target.tagName === 'A') {
                document.body.classList.toggle(this.classActive);
            }
        })

    }
}

export default menuActive;