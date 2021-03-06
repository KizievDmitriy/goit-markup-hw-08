function app () {
    const buttons = document.querySelectorAll('.btn')
    const cards = document.querySelectorAll('.project-item')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            
            if (isItemFiltered && !isShowAll) {
                item.classList.add('hidden')
            } else {
                item.classList.remove('hidden')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            // console.log(currentCategory)
            filter(currentCategory, cards)
        })
    })
}

app()