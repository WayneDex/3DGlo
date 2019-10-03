const changePhoto = () => {
    const image = document.querySelector('.command');

    let photo = (target) => {
      let nowSrc = target.src;
        target.src = target.dataset.img;
        target.dataset.img = nowSrc;
    };

    image.addEventListener('mouseover', (event) => {
        let target = event.target;
        event.target.classList.contains('command__photo');
        photo(target);
    });

    image.addEventListener('mouseout', (event) => {
        let target = event.target;
        event.target.classList.contains('command__photo');
        photo(target);
    });
  };

  export default changePhoto;