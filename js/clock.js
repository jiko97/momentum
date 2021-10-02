const clock = document.querySelector("#clock")

function getClock() {
    // 현재 시간 
    const date = new Date();
    // 최대 2글자로 만들고 앞에가 비었을 떄 0을 채우도록 설정 
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// 페이지를 업로드 했을 떄 바로 보일 수 있도록 설정 
getClock();
// 1초 간격으로 시간이 update될 수 있도록 설정 
setInterval(getClock, 1000);
