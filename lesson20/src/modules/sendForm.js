const sendForm = () => {
    const errorMassage = 'Что-то пошло не так...',
        loadMassage = 'Загрузка...',
        succesMassage = 'Спасибо! Мы скоро с вами свяжемся!';

    const statusMassage = document.createElement('div');
    statusMassage.style.cssText = 'font-size: 2rem; color: white;';

    document.body.addEventListener('submit', (event) => {
        event.preventDefault();
        event.target.appendChild(statusMassage);
        statusMassage.textContent = loadMassage;
        const formData = new FormData(event.target);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('Status network not 200');
                }
                statusMassage.textContent = succesMassage;
            })
            .then(() => event.target.querySelectorAll('input').forEach((item) => {
                item.value = '';  
            }))
            .catch(() => statusMassage.textContent = errorMassage);
    });
    document.body.addEventListener('input', (event) => {
        let target = event.target;
        if(target.getAtribute('type') === 'text'){
            target.value = target.value.replace(/[^А-яё]/, '');
        }
        if(target.getAtribute('type') === 'tel'){
            target.value = target.value.replace(/[^0-9\+]/, '');
        }
    });
    
    const postData = (body) => {
        return fetch('./server.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        });
    };
};

export default sendForm;