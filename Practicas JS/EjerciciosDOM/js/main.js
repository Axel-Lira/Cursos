/*Ejercicio 1*/
const d=document,
w=window,
ls=localStorage;
function hamburguerMenu(panelBtn,panel,menuLink){
    d.addEventListener("click",e=>{
        if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}
/*Ejercicio2*/
function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;
    d.addEventListener(`click`,e=>{
        if(e.target.matches(btnPlay)){
            clockTempo=setInterval(()=>{
                let clockHour=new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`
            }, 1000);
            e.target.disabled=true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML=null;
            d.querySelector(btnPlay).disabled=false;
        }
    });
}
function alarm(sound,btnPlay,btnStop){
    let alarmTempo;
    const $alarm=d.createElement("audio");
    $alarm.src=sound;
    d.addEventListener(`click`,e=>{
        if(e.target.matches(btnPlay)){
            alarmTempo=setInterval(()=>{
                $alarm.play();
            },1000);
            e.target.disabled=true;
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime=0;
            d.querySelector(btnPlay).disabled=false;
        }
    });
}
/*Ejercicio 3 */
let x=0,
y=0;
function shortcuts(e){
    console.log(e.keyCode);
}
function moveBall(e,ball,stage){
    const $ball=d.querySelector(ball),
    $stage=d.querySelector(stage),
    $limitsBall=$ball.getBoundingClientRect(),
    $limitsStage=$stage.getBoundingClientRect();
    console.log(e.keyCode);
    console.log($limitsBall,$limitsStage);
    
    switch(e.keyCode){
        case 37:
            if($limitsBall.left>$limitsStage.left){
                x--;
                e.preventDefault();
            }
            break;
            case 38:
                if($limitsBall.top>$limitsStage.top){
                    y--;
                    e.preventDefault();
                }
                break;
                case 39:
                    if($limitsBall.right<$limitsStage.right){
                        x++;
                        e.preventDefault();
                    }
                    break;
                    case 40:
                        if($limitsBall.bottom<$limitsStage.bottom){
                            y++;
                            e.preventDefault();
                        }
                        break;
                        default:
                            break;
    }
    $ball.style.transform =`translate(${x*10}px, ${y*10}px)`;
}
/*Ejercicio 4 */
function countdown(id,limitDate,finalMessage){
    const $contdown=d.getElementById(id),
    countdownDate=new Date(limitDate).getTime();

    let countdownTempo=setInterval(()=>{
        let now=new Date().getTime(),
        limitTime=countdownDate-now,
        day=Math.floor(limitTime/(1000*60*60*24)),
        hours=("0"+Math.floor((limitTime%(1000*60*60*24))/(1000*60*60))).slice(-2),
        minutes=("0"+Math.floor((limitTime%(1000*60*60))/(1000*60))).slice(-2),
        seconds=("0"+Math.floor((limitTime%(1000*60))/(1000))).slice(-2);
        $contdown.innerHTML=`<h3>Faltan: ${day} días ${hours} Horas ${minutes} Minutos ${seconds} Segundos</h3>`
        if(limitTime<0){
            clearInterval(countdownTempo);
            $contdown.innerHTML=`<h3>${finalMessage}</h3>`
        }
    },1000);
}
/*Ejercicio 5 */
function scrollTopButton(btn){
    const $scrollBtn=d.querySelector(btn);

    w.addEventListener("scroll",(e)=>{
        let scrollTop=w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop>600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
        console.log(w.pageYOffset,d.documentElement.scrollTop);
    });
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behaivor:"smooth",
                top:0
            });
        }
    });
}
/*Ejercicio 6 */
function darkTheme(btn, classDark){
    const $themeBtn=d.querySelector(btn),
    $selectors=d.querySelectorAll("[data-dark]");
    let moon="🌙",
    sun="☀️";
    const lightMode=()=>{
        $selectors.forEach((el)=>el.classList.remove(classDark));
        $themeBtn.textContent=moon;
        ls.setItem("light");
    }
    const darkMode=()=>{
        $selectors.forEach((el)=>el.classList.add(classDark));
        $themeBtn.textContent=sun;
        ls.setItem("dark")
    }
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent===moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });
    d.addEventListener("DOMContentLoaded",(e)=>{
        if(ls.getItem("theme")===null)ls.setItem("theme","light");;
        if(ls.getItem("theme")==="light") lightMode();
        if(ls.getItem("theme"==="dark")) darkMode();
    });
}
/*Escucha eventos */
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Sep 26, 2021 00:00:00","Feliz cumpleaños Axel");
    scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});
darkTheme(".dark-theme-btn","dark-mode");