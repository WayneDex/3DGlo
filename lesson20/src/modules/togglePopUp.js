const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupContent = document.querySelector('.popup-content');

    
      document.body.addEventListener('click', (event) => {
        let target = event.target;

          if(target.closest('.popup-btn')){
            let popupWindow = document.documentElement.clientWidth;
            if (popupWindow >= 750) {
              popup.style.display = 'block';
              popupContent.animate([
                { transform: 'translateY(-1000px)' },
                { transform: 'translateY(0px)' }, 
              ], {
                duration: 1000,
                iterations: 1
              });
            } else {
              popup.style.display = 'block';
            }
          }
          else if(target.classList.contains('popup-close')){
              popup.style.display = 'none';
          }else{
              let q = target.closest('.popup-content');
              
              if(!q){
                popup.style.display = 'none';
              }
          }
    });
};

export default togglePopUp;