let links = document.querySelectorAll(".links");
let line = document.querySelector(".line");

let firstlink = links[0].clientWidth;

line.style.width =`${firstlink}px`;


links.forEach((link) =>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        let linkWidth = link.clientWidth;
        let offsetlink = link.offsetLeft;

        line.style.width = `${linkWidth}px`;
        line.style.transform = `translateX(${offsetlink}px)`;
        console.log(line.style.width);

    })
})