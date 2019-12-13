    // timer / таймер 

    let deadline = '2020-01-01'; // deadline / дата окончания таймера (дедлайн)

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60));
            
            return {
                'total': t,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours
            };
    }
    function setClock (id, endtime) {                   // receiving fields from html page using class selector / получаем поля, куда надо поместить время из html странички
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); 

        function updateClock() {                        // updating fields on html page / обновляем данные таймера на html страничке
            let t = getTimeRemaining(endtime);
            function addZero(num) {
                if(num <=9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            console.log (t.total);

            if (t.total <= 0) {                     // cancelling timer when deadline is over / останавливаем таймер при достижении заданной даты(дедлайна)
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }


    }
    setClock('timer', deadline);