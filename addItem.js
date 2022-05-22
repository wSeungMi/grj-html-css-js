'use strict';

// --------- 1~3은 modal.js ---------
// 4.input 요소 입력 : div생성 -> 내용 추가 -> 맨 끝에 붙이기
// 5. submit 버튼 클릭 
// 6. modal창 사라짐 (숨겨진 상태)
// 7. input 요소가 content에 추가

function addItem(name, img, description) {
    const newDiv = document.createElement("div"); // 빈 div 생성
    newDiv.classList.add("item"); // newDiv에 .item 추가
    newDiv.innerHTML = `<img src="${img}" alt="${name}" />
                        <span>${description}</span>`; // 새로운 내용들을 newDiv로 넣어줌
    document.querySelector(".container").appendChild(newDiv);
}

function addItemBtn(event) {
    event.preventDefault(); // 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트 실행 X
    const name = document.getElementById("modalName").value;
    const img = document.getElementById("modalImg").value;
    const description = document.getElementById("modalContent").value;
    addItem(name, img, description);
    document.getElementById("modalName").value = "";
    document.getElementById("modalImg").value = "";
    document.getElementById("modalContent").value = "";
    addCloseModal();
}

document.getElementById("addItemContent").addEventListener("submit", addItemBtn);