const toggleMenu = () => {
    const menu = document.querySelector('menu'),
          body = document.body;

    const handlerMenu = () => menu.classList.toggle('active-menu');

    body.addEventListener('click', (event) => {
      let target = event.target;

      if(target.classList.contains('close-btn')) {
        handlerMenu();
      }

      let burger = target.closest('.menu');
      if(burger && !menu.classList.contains('active-menu')) {
        handlerMenu();
      }else if(!target.closest('menu') && menu.classList.contains('active-menu')) {
        handlerMenu();
    }
    });
  };

export default toggleMenu;