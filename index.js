let hours = document.querySelector("#hh")
let mins = document.querySelector("#mm")
let sec = document.querySelector("#ss")
let ampm = document.querySelector("#ampm")
let rightmsg = document.querySelector("#rightmsg")
let Time = document.querySelectorAll(".Time1") 
let Time2 = document.querySelectorAll(".select")
let leftmsg = document.querySelector("#leftmsg")
let img = document.querySelector("#img")
let btn = document.querySelector("button")

function clock(){
    let time = new Date();

    let hh = time.getHours()
    let mm = time.getMinutes()
    let ss = time.getSeconds()
    let hr = hh 

    if(hr >12){
        hr = hr-12
        
    }
    hr= (hr<9) ? "0"+hr: hr
    mm= (mm<12) ? "0"+mm : mm
    ss= (ss<12) ? "0"+ss: ss

    
    hours.innerHTML = `${hr} `;
    
    mins.innerHTML = `${mm}`;

    sec.innerHTML = `${ss}`;
    
    if(hh>12){
       ampm.innerHTML = "PM" 
    }
    else{
        ampm.innerHTML = "AM"
    }

    if(hh> 7 && hh<12){
        rightmsg.innerHTML = " GRAB SOME HEALTHY BREAKFAST!!!";
     }
     else if(hh>12 && hh<18){
        rightmsg.innerHTML = " LET'S HAVE SOME LUNCH !!";
     }
    else if(hh>18 && hh<22){
        rightmsg.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }
    else if(hh>22 &&hh<7){
        rightmsg.innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP";
    }

}

setInterval(clock,1000)

function setAlarm(){

    let time = new Date()
    let hh = time.getHours()
    if(parseInt(Time2[0].value) === hh)
    {
        leftmsg.innerHTML = "GOOD MORNING!! WAKE UP!!"
        img.src = "./morning.svg"
    }
    
    if(parseInt(Time2[1].value) === hh)
    {
        leftmsg.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        img.src = "./lunch_image.png"
    }

    if(parseInt(Time2[2].value) === hh)
    {
        leftmsg.innerHTML = "GOOD EVENING !!"
        img.src = "./lunch_image.png"
    }

    if(parseInt(Time2[3].value) === hh)
    {
        leftmsg.innerHTML = "GOOD NIGHT !!"
        img.src = "./night_time.svg"
    }


    let selectIndex = Time2[0].selectedIndex
    let target  = Time2[0].options[selectIndex]
    if(parseInt(selectIndex))
    {
        Time[0].innerHTML = `${target.innerHTML}`
    }

    let selectIndex2 = Time2[1].selectedIndex
    let target2  = Time2[1].options[selectIndex2]
    if(parseInt(selectIndex2))
    {
        Time[1].innerHTML = `${target2.innerHTML}`
    }

    let selectIndex3 = Time2[2].selectedIndex
    let target3  = Time2[2].options[selectIndex3]
    if(parseInt(selectIndex3))
    {
        Time[2].innerHTML = `${target3.innerHTML}`
    }

    let selectIndex4 = Time2[3].selectedIndex
    let target4  = Time2[3].options[selectIndex4]
    if(parseInt(selectIndex4))
    {
        Time[3].innerHTML = `${target4.innerHTML}`
    }
}

btn.addEventListener("mouseover",() =>{
    btn.innerHTML = "Party time!"
})

btn.addEventListener("mouseout",() =>{
    btn.innerHTML = "Set Alarm"
})