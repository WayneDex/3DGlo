const regInput = () => {
    const input = document.querySelector('.calc-block');

    input.addEventListener('input', (event) => {
      let target = event.target;
        target.value = target.value.replace(/d/);
    });
  };

export default regInput;