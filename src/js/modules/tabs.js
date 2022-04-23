const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabsSelector);
    const content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach((item) => {
            item.style.display = 'none'
        })

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    function showContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }


    hideTabContent();
    showContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if ( target && target.classList.contains(tabsSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))
        ) {
            tab.forEach(((item, i) => {
                if (target === item || target.parentNode == item) {
                    hideTabContent();
                    showContent(i)
                }
            }))
        }
    })

}

export default tabs;
