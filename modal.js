'use strict';

const modal = document.getElementById("modal");
const openModal = document.getElementById("addItem");
const closeModal = document.getElementById("closeModal");

// 1. modal창 숨겨두기
modal.style.display = "none";

// 2. modal창 보이기
openModal.addEventListener('click', () => {
    modal.style.display = "block";
});

// 3. X버튼으로 modal창 닫기
closeModal.addEventListener('click', () => {
    document.getElementById("modalName").value = "";
    document.getElementById("modalImg").value = "";
    document.getElementById("modalContent").value = "";
    modal.style.display = "none";
});


// --------- 4~7은 addItem.js ---------

function addCloseModal() {
    document.getElementById("modal").style.display = "none";
}


