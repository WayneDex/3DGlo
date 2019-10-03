const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        ulDot = document.querySelector('.portfolio-dots'),
        slider = document.querySelector('.portfolio-content');
    let dot;

    let currentSlide = 0,
        interval;

    const createDots = () => {
        slide.forEach(() => {
          let newDot = document.createElement('li');
          
          newDot.classList.add('dot');
          ulDot.appendChild(newDot);
        });
        dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');
      };
    createDots();


    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);

    };


    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);

    };


    const autoPlaySlode = () => {

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    };

    const starSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlode, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if(target.matches('#arrow-right')){
            currentSlide++;
        }else if(target.matches('#arrow-left')){
            currentSlide--;
        }else if(target.matches('.dot')){
            dot.forEach((elem, index) => {
                if(elem === target){
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length){
            currentSlide = 0;
        }

        if (currentSlide < 0){
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
            starSlide();
        }
    });

    starSlide(1500);

};

export default slider;