"strict mode"

const modal = (() => {
    function events() {
        document.addEventListener('click', event => {
            const { target } = event;

            if (target.classList.contains('overlay')) {
                const modal = target.closest('.modal');
                modal.style.display = 'none';
            }
            else if (target.classList.contains('modal-trigger')) {
                const selector = target.dataset.modal;
                const modal = document.querySelector(selector);
                
                modal.style.display = 'block';
            }
        });
    }


    function init() {
        console.log('Importado!')
        events();
    }


    return {
        init
    }
})();
