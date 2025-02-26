/* document.getElementById는 HTML에서 특정 id를 가진 요소를 가져온다 */
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === ''){ /* inputBox의 값이 없다면 */
        alert("할 일을 입력해주세요!");
    }
    else{
        let li = document.createElement("li"); /* <li></li> 요소 생성 */
        li.innerHTML = inputBox.value; /* <li>inputBox.value</li> */
        listContainer.appendChild(li); /* <ul> 또는 <ol> 리스트 요소에 대해 / li 요소를 listContainer의 마지막 자식 요소로 추가 */
        let span = document.createElement("span"); /* <span></span> 요소 생성 */
        span.innerHTML = "\u00d7"; /* <span>x</span> */
        li.appendChild(span); /* <li> 요소에 추가 */
    }
    inputBox.value = ""; /*  input 란에 값이 입력됐든 안 됐든 button을 눌렀을 때 input란이 비워지게 */
    saveData(); /* 값 하나가 들어오면 localStorage에 저장 */
}

listContainer.addEventListener("click", function(e){ /* <ul> 요소를 "click"할 시 함수 실행 */
    if(e.target.tagName === "LI"){ /* 클릭한 tagName이 <li> 요소일 경우 */
        e.target.classList.toggle("checked"); /* 해당 <li> 요소에 클래스 접근 후 "checked" 클래스 추가 */
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ /* 클릭한 tagName이 <span> 요소일 경우 */
        e.target.parentElement.remove(); /* 해당 <span> 요소의 부모 요소(<li>)를 삭제 */
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); /* <li>값</li>를 "data"라는 이름으로 저장 */
} /* ul이 가장 큰 부모 요소기 때문에 자식 요소 li, span이 함께 저장된다 */

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); /* 저장해놨던 "data"라는 키를 통해 <ul>태그 안에 다시 넣음 */
}
showTask(); /* 페이지가 들어오면 바로 실행 */