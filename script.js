console.log("Hello World!");

function DayMode() {
    document.body.style.backgroundImage = "linear-gradient(180deg, #EEC44F, #FEDE84 10%, #F6E1A4, #E9D49B, white)";
    document.getElementsByTagName("header")[0].style.backgroundColor = "#D4AC2B";
    document.getElementsByClassName("main")[0].style.backgroundColor = "rgba(217, 217, 217, 0.6)"; 
    document.getElementsByTagName("h2")[0].innerText = "Chào mừng";
    document.getElementsByTagName("li")[0].innerText = "Trang chủ";
    document.getElementsByTagName("li")[1].innerText = "Câu chuyện";
    document.getElementsByTagName("li")[2].innerText = "Về mình";
    document.getElementsByTagName("li")[3].innerText = "Liên hệ";
    console.log("Day Mode Activated"); 
}

function NightMode() {
    document.body.style.backgroundImage = "linear-gradient(180deg, #e2aebd, #eac4cf, #f5e3e8, #f9edf0 )";
    document.getElementsByTagName("header")[0].style.backgroundColor = "#874356";
    document.getElementsByClassName("main")[0].style.backgroundColor = "linear-gradient(180deg, #ddc8ce, #ddc8ce)"; 
    document.getElementsByTagName("h2")[0].innerText = "Welcome" ;
    document.getElementsByTagName("li")[0].innerText = "Home";
    document.getElementsByTagName("li")[1].innerText = "Story";
    document.getElementsByTagName("li")[2].innerText = "About us";
    document.getElementsByTagName("li")[3].innerText = "Contact";
    console.log("Night Mode Activated"); 
}

let btn= document.querySelector("button");
let count=0;
btn.addEventListener("click", ()=>{
    count+=1; 
    if (count & 1) {NightMode(); }
    else {DayMode(); }
});