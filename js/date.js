const dates = document.querySelector("#dates");
function getYoyil(yoyil) {
    switch(yoyil) {
        case "0": "SUN";
        break;
        case "1": return "MON";
        break;
        case "2": return "TUE";
        break;
        case "3": return "WED";
        break;
        case "4": return "THR";
        break;
        case "5": return "FRI";
        break;
        case "6": return "SAT";
        break;
    }
        
}
function getDate() {
    // 현재 시간 
    const date = new Date();
    // 최대 2글자로 만들고 앞에가 비었을 떄 0을 채우도록 설정 
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const yoyil = getYoyil(String(date.getDay()));
    
    dates.innerText = `${year}.${month}.${day} ${yoyil}`;
}
// 페이지를 업로드 했을 떄 바로 보일 수 있도록 설정 
getDate();