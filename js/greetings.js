// default -> const 사용, 일부 update 원할 때 - let 사용

// null -> '값이 없음'이 들어있는 상태 (python - None)

// NaN -> Not a Number 

// let something; // 메모리는 있는데 값은 없는 상태(undefined)

// Object 생성 -> properties를 가진 데이터 생성

// Function -> 반복해서 사용할 수 있는 코드 조각 = 캡슐화하여 여러번 실행 가능

// Parameter(매개변수) -> argument를 받아 function의 body 안에서만 사용하는 변수

// argument(인자) -> function을 실행하는 동안 어떤 정보를 function에게 보내는 방법

// Object.function(parameters) 형태

// 함수 밖에서 값을 사용하고 싶을 떄 -> return으로 값 받기 

// 한번 return값을 가지면 함수는 종료된다 -> 항상 마지막에 return 넣기 

// prompt -> javascript를 일시정지 시킴 

// parseInt() -> daya type을 int로 변경 

// Step 1. HTML element를 가져오기 (DOM; Document Object Model)

// 0. document -> 웹페이지 자체를 의미하는 객체 // HTML에 접근하기 위해서 반드시 document 객체부터 시작

// 1. document.getElementById -> id명으로 element 추출

// 2. document.getElementsByClassName -> class명으로 element 추출

// 3. document.getElementsByTagName -> tag명으로 element 추출 

// 4. document.querySelector -> 가장 첫번째 하나의 element만 추출 / css selector 사용하여 검색  / 하위 태그까지 선택 가능

// 5. document.querySelectorAll -> 모든 elements를 array로 추출 / css selector 사용하여 검색 / 하위 태그까지 선택 가능

// Step 2. Event를 Listen하기 

// Event -> 웹 브라우저가 알려주는 HTML 요소에 대한 사건 발생

// 객체명.addEventListener("이벤트명", 함수명) -> 절대 함수를 실행시키면 안됨

// Step 3. Event에 반응하기 

// classList 사용 
// 1) .contains() -> 클래스 리스트에 포함하는지 여부 확인 
// 2) .add() -> 클래스 리스트에 추가 
// 3) .remove() -> 클래스 리스트에서 제거 
// 4) .toggle() -> 클래스가 리스트에 존재 여부를 확인하여 add, remove 번갈아가며 진행 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1Name = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
    h1Name.innerText = `Hello ${username}`;
    h1Name.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(event) {
    // event로 매개변수를 준 다음, .preventDefault() 메소드를 실행하면 브라우저의 기본 동작을 막아줌
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // localStorage -> 일종의 미니 DB 
    // .setItem(), .getItem(), removeItem() 가능  
    localStorage.setItem(USERNAME_KEY, username);
    // h1Name.innerText = "Hello " + username;
    // string과 변수를 함께 나타내고 싶을 때 -> `${}` 백틱(`) 사용!
    paintGreetings(username);
}

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}

