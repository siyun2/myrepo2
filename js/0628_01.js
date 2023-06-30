// 로그인

const modal_login = document.getElementById("modal_login_feed");
const bt_login = document.getElementById("log_in")
bt_login.addEventListener("click", e=> {
    modal_login.style.top = window.pageYOffset + 'px';
    modal_login.style.display = "flex";
    document.body.style.overflowY = "hidden";
}) 

const bt_login_close = document.getElementById("close_login");
bt_login_close.addEventListener("click", e => {
    modal_login.style.display = "none";
    document.body.style.overflowY = "visible";
});
// 모달 1

// 모달 띄우기 코드
const modal_01 = document.getElementById("modal_add_feed_01");
const buttonAddFeed_01 = document.getElementById("add_feed_01");

buttonAddFeed_01.addEventListener("click", e => {
    modal_01.style.top = window.pageYOffset + 'px';
    modal_01.style.display = "flex";
    document.body.style.overflowY = "hidden"; // 스크롤 없애기
});

// 모달 닫기 코드
const buttonCloseModal_01 = document.getElementById("close_modal_01");
buttonCloseModal_01.addEventListener("click", e => {
    modal_01.style.display = "none";
    document.body.style.overflowY = "visible";
});

// 모달 제목 가져오기
let modal_title_01 = document.querySelector("#title_01");
let room_title_01 = document.querySelector("#room_title_01");

let modal_text_01 = document.querySelector("#text_01");
let room_text_01 = document.querySelector("#room_text_01");

let text_01 = modal_text_01.innerText.slice(0,10);

room_title_01.innerText = modal_title_01.innerText;
room_text_01.innerText = text_01 + "...";

// 모달 댓글창 댓글 입력

let reply_input_01 = document.querySelector("#modal_reply_01");
let reply_text_01 = document.querySelector("#modal_reply_div_01");
let reply_cnt_01 = 0;
reply_input_01.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        reply_text_01.innerHTML += `<div class="modal_reply_box">${reply_input_01.value}<div>`;
        reply_input_01.value = "";
        reply_cnt_01 += 1;
        number02.innerText = reply_cnt_01;
    }
});

// 모달 2

// 모달 띄우기 코드
const modal_02 = document.getElementById("modal_add_feed_02");
const buttonAddFeed_02 = document.getElementById("add_feed_02");
buttonAddFeed_02.addEventListener("click", e => {
    modal_02.style.top = window.pageYOffset + 'px';
    modal_02.style.display = "flex";
    document.body.style.overflowY = "hidden"; // 스크롤 없애기
});

// 모달 닫기 코드
const buttonCloseModal_02 = document.getElementById("close_modal_02");
buttonCloseModal_02.addEventListener("click", e => {
    modal_02.style.display = "none";
    document.body.style.overflowY = "visible";
});


// 모달 2

// 모달 제목 가져오기
let modal_title_02 = document.querySelector("#title_02");
let room_title_02 = document.querySelector("#room_title_02");

let modal_text_02 = document.querySelector("#text_02");
let room_text_02 = document.querySelector("#room_text_02");

let text_02 = modal_text_02.innerText.slice(0,10);

room_title_02.innerText = modal_title_02.innerText;
room_text_02.innerText = text_02 + "...";

// 모달 댓글창 댓글 입력

let reply_input_02 = document.querySelector("#modal_reply_02");
let reply_text_02 = document.querySelector("#modal_reply_div_02");
let reply_cnt_02 = 0;
reply_input_02.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        reply_text_02.innerHTML += `<div class="modal_reply_box">${reply_input_02.value}<div>`;
        reply_input_02.value = "";
        reply_cnt_02 += 1;
        number2_02.innerText = reply_cnt_02;
    }
});

// 모달 3

// 모달 띄우기 코드
const modal_03 = document.getElementById("modal_add_feed_03");
const buttonAddFeed_03 = document.getElementById("add_feed_03");
buttonAddFeed_03.addEventListener("click", e => {
    modal_03.style.top = window.pageYOffset + 'px';
    modal_03.style.display = "flex";
    document.body.style.overflowY = "hidden"; // 스크롤 없애기
});

// 모달 닫기 코드
const buttonCloseModal_03 = document.getElementById("close_modal_03");
buttonCloseModal_03.addEventListener("click", e => {
    modal_03.style.display = "none";
    document.body.style.overflowY = "visible";
});

// 모달 제목 가져오기
let modal_title_03 = document.querySelector("#title_03");
let room_title_03 = document.querySelector("#room_title_03");

let modal_text_03 = document.querySelector("#text_03");
let room_text_03 = document.querySelector("#room_text_03");

let text_03 = modal_text_03.innerText.slice(0,10);

room_title_03.innerText = modal_title_03.innerText;
room_text_03.innerText = text_03 + "...";

// 모달 댓글창 댓글 입력

let reply_input_03 = document.querySelector("#modal_reply_03");
let reply_text_03 = document.querySelector("#modal_reply_div_03");
let reply_cnt_03 = 0;
reply_input_03.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        reply_text_03.innerHTML += `<div class="modal_reply_box">${reply_input_03.value}<div>`;
        reply_input_03.value = "";
        reply_cnt_03 += 1;
        number3_02.innerText = reply_cnt_03;
    }
});

// 모달 4

// 모달 띄우기 코드
const modal_04 = document.getElementById("modal_add_feed_04");
const buttonAddFeed_04 = document.getElementById("add_feed_04");
buttonAddFeed_04.addEventListener("click", e => {
    modal_04.style.top = window.pageYOffset + 'px';
    modal_04.style.display = "flex";
    document.body.style.overflowY = "hidden"; // 스크롤 없애기
});

// 모달 닫기 코드
const buttonCloseModal_04 = document.getElementById("close_modal_04");
buttonCloseModal_04.addEventListener("click", e => {
    modal_04.style.display = "none";
    document.body.style.overflowY = "visible";
});

// 모달 제목 가져오기
let modal_title_04 = document.querySelector("#title_04");
let room_title_04 = document.querySelector("#room_title_04");

let modal_text_04 = document.querySelector("#text_04");
let room_text_04 = document.querySelector("#room_text_04");

let text_04 = modal_text_04.innerText.slice(0,10);

room_title_04.innerText = modal_title_04.innerText;
room_text_04.innerText = text_04 + "...";

// 모달 댓글창 댓글 입력

let reply_input_04 = document.querySelector("#modal_reply_04");
let reply_text_04 = document.querySelector("#modal_reply_div_04");
let reply_cnt_04 = 0;
reply_input_04.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        reply_text_04.innerHTML += `<div class="modal_reply_box">${reply_input_04.value}<div>`;
        reply_input_04.value = "";
        reply_cnt_04 += 1;
        number4_02.innerText = reply_cnt_04;
    }
});

// 모달 5

// 모달 띄우기 코드
const modal_05 = document.getElementById("modal_add_feed_05");
const buttonAddFeed_05 = document.getElementById("add_feed_05");
buttonAddFeed_05.addEventListener("click", e => {
    modal_05.style.top = window.pageYOffset + 'px';
    modal_05.style.display = "flex";
    document.body.style.overflowY = "hidden"; // 스크롤 없애기
});

// 모달 닫기 코드
const buttonCloseModal_05 = document.getElementById("close_modal_05");
buttonCloseModal_05.addEventListener("click", e => {
    modal_05.style.display = "none";
    document.body.style.overflowY = "visible";
});

// 모달 제목 가져오기
let modal_title_05 = document.querySelector("#title_05");
let room_title_05 = document.querySelector("#room_title_05");

let modal_text_05 = document.querySelector("#text_05");
let room_text_05 = document.querySelector("#room_text_05");

let text_05 = modal_text_05.innerText.slice(0,10);

room_title_05.innerText = modal_title_05.innerText;
room_text_05.innerText = text_05 + "...";

// 모달 댓글창 댓글 입력

let reply_input_05 = document.querySelector("#modal_reply_05");
let reply_text_05 = document.querySelector("#modal_reply_div_05");
let reply_cnt_05 = 0;
reply_input_05.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        reply_text_05.innerHTML += `<div class="modal_reply_box">${reply_input_05.value}<div>`;
        reply_input_05.value = "";
        reply_cnt_05 += 1;
        number5_02.innerText = reply_cnt_05;
    }
});

// 모달 6

// 모달 띄우기 코드
const modal_06 = document.getElementById("modal_add_feed_06");
const buttonAddFeed_06 = document.getElementById("add_feed_06");
buttonAddFeed_06.addEventListener("click", e => {
    modal_06.style.top = window.pageYOffset + 'px';
    modal_06.style.display = "flex";
    document.body.style.overflowY = "hidden"; // 스크롤 없애기
});

// 모달 닫기 코드
const buttonCloseModal_06 = document.getElementById("close_modal_06");
buttonCloseModal_06.addEventListener("click", e => {
    modal_06.style.display = "none";
    document.body.style.overflowY = "visible";
});

// 모달 제목 가져오기
let modal_title_06 = document.querySelector("#title_06");
let room_title_06 = document.querySelector("#room_title_06");

let modal_text_06 = document.querySelector("#text_06");
let room_text_06 = document.querySelector("#room_text_06");

let text_06 = modal_text_06.innerText.slice(0,10);

room_title_06.innerText = modal_title_06.innerText;
room_text_06.innerText = text_06 + "...";

// 모달 댓글창 댓글 입력

let reply_input_06 = document.querySelector("#modal_reply_06");
let reply_text_06 = document.querySelector("#modal_reply_div_06");
let reply_cnt_06 = 0;
reply_input_06.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        reply_text_06.innerHTML += `<div class="modal_reply_box">${reply_input_06.value}<div>`;
        reply_input_06.value = "";
        reply_cnt_06 += 1;
        number6_02.innerText = reply_cnt_06;
    }
});

// 모달 7

// 모달 띄우기 코드
const modal_07 = document.getElementById("modal_add_feed_07");
const buttonAddFeed_07 = document.getElementById("add_feed_07");
buttonAddFeed_07.addEventListener("click", e => {
    modal_07.style.top = window.pageYOffset + 'px';
    modal_07.style.display = "flex";
    document.body.style.overflowY = "hidden"; // 스크롤 없애기
});

// 모달 닫기 코드
const buttonCloseModal_07 = document.getElementById("close_modal_07");
buttonCloseModal_07.addEventListener("click", e => {
    modal_07.style.display = "none";
    document.body.style.overflowY = "visible";
});

// 모달 제목 가져오기
let modal_title_07 = document.querySelector("#title_07");
let room_title_07 = document.querySelector("#room_title_07");

let modal_text_07 = document.querySelector("#text_07");
let room_text_07 = document.querySelector("#room_text_07");

let text_07 = modal_text_07.innerText.slice(0,10);

room_title_07.innerText = modal_title_07.innerText;
room_text_07.innerText = text_07 + "...";

// 모달 댓글창 댓글 입력

let reply_input_07 = document.querySelector("#modal_reply_07");
let reply_text_07 = document.querySelector("#modal_reply_div_07");
let reply_cnt_07 = 0;
reply_input_07.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        reply_text_07.innerHTML += `<div class="modal_reply_box">${reply_input_07.value}<div>`;
        reply_input_07.value = "";
        reply_cnt_07 += 1;
        number7_02.innerText = reply_cnt_07;
    }
});

// 모달 8

// 모달 띄우기 코드
const modal_08 = document.getElementById("modal_add_feed_08");
const buttonAddFeed_08 = document.getElementById("add_feed_08");
buttonAddFeed_08.addEventListener("click", e => {
    modal_08.style.top = window.pageYOffset + 'px';
    modal_08.style.display = "flex";
    document.body.style.overflowY = "hidden"; // 스크롤 없애기
});

// 모달 닫기 코드
const buttonCloseModal_08 = document.getElementById("close_modal_08");
buttonCloseModal_08.addEventListener("click", e => {
    modal_08.style.display = "none";
    document.body.style.overflowY = "visible";
});

// 모달 제목 가져오기
let modal_title_08 = document.querySelector("#title_08");
let room_title_08 = document.querySelector("#room_title_08");

let modal_text_08 = document.querySelector("#text_08");
let room_text_08 = document.querySelector("#room_text_08");

let text_08 = modal_text_08.innerText.slice(0,10);

room_title_08.innerText = modal_title_08.innerText;
room_text_08.innerText = text_08 + "...";

// 모달 댓글창 댓글 입력

let reply_input_08 = document.querySelector("#modal_reply_08");
let reply_text_08 = document.querySelector("#modal_reply_div_08");
let reply_cnt_08 = 0;
reply_input_08.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        reply_text_08.innerHTML += `<div class="modal_reply_box">${reply_input_08.value}<div>`;
        reply_input_08.value = "";
        reply_cnt_08 += 1;
        number8_02.innerText = reply_cnt_08;
    }
});

// 
// 낮 / 밤술
//

    const day = document.getElementById("day");
        const header = document.getElementById("header");
        // 밤술 클릭시 전환
        nighttrans = function() {
        header.style.background = "black";
        let floors = document.querySelectorAll(".floor");
        document.getElementById("logonight").style.display ="block";
        document.getElementById("logoday").style.display ="None";
        document.querySelectorAll(".room_left, .room_right").forEach(function(room) {
        room.style.animation = "blink 3s infinite alternate";
        room.style.boxShadow = "2px 3px 5px 2px #a9a93b";
        document.querySelector("body").style.backgroundImage=  "url('/img/출금쥐.gif')";
        document.querySelector(".day_hash_tag").style.display = "none"; // hash tag 밤낮 전환
        document.querySelector(".night_hash_tag").style.display = "block";  // hash tag 밤낮 전환
        });
        }
        // 낮술 클릭시 전환
        daytrans = function() {

        let floors = document.querySelectorAll(".floor");  
        header.style.background = "white";
        document.getElementById("logonight").style.display ="none";
        document.getElementById("logoday").style.display ="block";
        document.querySelectorAll(".room_left, .room_right").forEach(function(room) {
        room.style.animation = "";
        room.style.boxShadow = "";
        document.querySelector("body").style.backgroundImage=  "url('/img/야자배경.jpg')";
        document.querySelector(".day_hash_tag").style.display = "block";  // hash tag 밤낮 전환
        document.querySelector(".night_hash_tag").style.display = "none";  // hash tag 밤낮 전환
        })   
        }


// 밤낮 버튼
const slider = document.querySelector("#dark-mode-changer");
const container = document.querySelector(".container");
const log_in = document.querySelector("#log_in");
const sign_in = document.querySelector("#sign_in");

slider.addEventListener("change", toggleMode);

function toggleMode() {
    const checked = slider.checked;

    if (checked) {
        container.classList.remove("light");
        container.classList.add("dark");
        log_in.style.color="white";
        sign_in.style.color="white";
    } else {
        container.classList.remove("dark");
        container.classList.add("light");
        log_in.style.color="black";
        sign_in.style.color="black";
    }
}

// 이미지를 클릭하면 사라지도록 하는 함수
function hideImage() {
    var img = document.querySelector('.imgd');
    img.style.display = 'none';
    document.body.style.overflowY = "visible";
}

// 버튼 클릭 이벤트에 함수 연결
var hideButton = document.getElementById('hide');
hideButton.addEventListener('click', hideImage);

// number

        let number01 = document.getElementById("number_01")
        let number02 = document.getElementById("number_02")
        const plus_01 = () =>{
        let num = parseInt(number01.innerText)+1
        number01.innerText = num
       }
       const plus_02 = () =>{
        let num = parseInt(number02.innerText)+1
        number02.innerText = num
       }

       let number2_01 = document.getElementById("number2_01")
       let number2_02 = document.getElementById("number2_02")
        const plus2_01 = () =>{
        let num = parseInt(number2_01.innerText)+1
        number2_01.innerText = num
       }
        const plus2_02 = () =>{
        let num = parseInt(number2_02.innerText)+1
        number2_02.innerText = num
       }
      
       let number3_01 = document.getElementById("number3_01")
       let number3_02 = document.getElementById("number3_02")
        const plus3_01 = () =>{
        let num = parseInt(number3_01.innerText)+1
        number3_01.innerText = num
       }
       const plus3_02 = () =>{
        let num = parseInt(number3_02.innerText)+1
        number3_02.innerText = num
       }

       let number4_01 = document.getElementById("number4_01")
       let number4_02 = document.getElementById("number4_02")
        const plus4_01 = () =>{
        let num = parseInt(number4_01.innerText)+1
        number4_01.innerText = num
       }
       const plus4_02 = () =>{
        let num = parseInt(number4_02.innerText)+1
        number4_02.innerText = num
       }

       let number5_01 = document.getElementById("number5_01")
       let number5_02 = document.getElementById("number5_02")
        const plus5_01 = () =>{
        let num = parseInt(number5_01.innerText)+1
        number5_01.innerText = num
       }
       const plus5_02 = () =>{
        let num = parseInt(number5_02.innerText)+1
        number5_02.innerText = num
       }

       let number6_01 = document.getElementById("number6_01")
       let number6_02 = document.getElementById("number6_02")
        const plus6_01 = () =>{
        let num = parseInt(number6_01.innerText)+1
        number6_01.innerText = num
       }
       const plus6_02 = () =>{
        let num = parseInt(number6_02.innerText)+1
        number6_02.innerText = num
       }

       let number7_01 = document.getElementById("number7_01")
       let number7_02 = document.getElementById("number7_02")
        const plus7_01 = () =>{
        let num = parseInt(number7_01.innerText)+1
        number7_01.innerText = num
       }
       const plus7_02 = () =>{
        let num = parseInt(number7_02.innerText)+1
        number7_02.innerText = num
       }


       let number8_01 = document.getElementById("number8_01")
       let number8_02 = document.getElementById("number8_02")
        const plus8_01 = () =>{
        let num = parseInt(number8_01.innerText)+1
        number8_01.innerText = num
       }
       const plus8_02 = () =>{
        let num = parseInt(number8_02.innerText)+1
        number8_02.innerText = num
       }

// // 이미지를 클릭하면 사라지도록 하는 함수
// function hideImage() {
//     var img = document.querySelector('.imgd');
//     img.style.display = 'none';
//     document.body.style.overflowY = "visible";
// }

// // 버튼 클릭 이벤트에 함수 연결
// var hideButton = document.getElementById('hide');
// hideButton.addEventListener('click', hideImage);

 // 헤시태그 사진 연결 이동 함수
 function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
}

// 
// 
// 

