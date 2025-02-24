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
    }
}