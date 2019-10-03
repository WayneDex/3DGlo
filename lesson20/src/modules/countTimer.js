const countTimer = (deadline) =>{
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () =>{
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor((timeRemaining / 60 / 60));
        return {timeRemaining, hours, minutes, seconds};
    };
    
    const addZero = num => {return num < 10 ? `0${num}` : num;};

    const updateClock = () =>{
        const timer = getTimeRemaining();

        timerHours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);
        
        if(timer.timeRemaining < 0){
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(idInterval);
        }
    };
    
    const idInterval = setInterval(updateClock, 1000);
};

export default countTimer;