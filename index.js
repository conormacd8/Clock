const clock = document.querySelector('.clock')




function myClock(){
  let date = new Date
  let hours = date.getHours()
  let minutes = date.getMinutes() 
  let seconds = date.getSeconds()

  if (hours > 12){
    clock.textContent = `${String(hours-12).length === 1 ? `0${hours}` : `${hours}`}:${String(minutes).length === 1 ? `0${minutes}` : `${minutes}`}:${String(seconds).length === 1 ? `0${seconds}` : `${seconds} `} PM 
  `
  }
  else{
    clock.textContent = `${String(hours).length === 1 ? `0${hours}` : `${hours}`}:${String(minutes).length === 1 ? `0${minutes}` : `${minutes}`}:${String(seconds).length === 1 ? `0${seconds}` : `${seconds}`} AM 
    `
  }
}

setInterval(myClock, 1000)



