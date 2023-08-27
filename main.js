const cur = document.querySelector("#cursor");
const main = document.querySelector(".main");


main.addEventListener("mousemove",function(delts) {
    cur.style.left = delts.x+"px";
    cur.style.top = delts.y+"px"
})