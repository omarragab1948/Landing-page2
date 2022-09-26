/*add sections in nav dynamically*/
let ulNav = document.getElementById("navbar__list");

for(let i = 0; i < (document.querySelectorAll("section").length); i++){
    document.write(`<a href="#section${i+1}">Section ${i+1}</a>`)
    document.write("<div class = navDiv></div>")
}
for(let i = 0; i < document.links.length; i++){
    document.querySelectorAll("a")[i].className = `section${i+1}`
}
for(let i = 0; i < document.links.length; i++){
    (document.querySelectorAll(".navDiv")[i]).appendChild(document.querySelectorAll("a")[i])
    ulNav.appendChild(document.querySelectorAll(".navDiv")[i])
}



/*add active class*/

window.onscroll = function (){
    if (window.scrollY <= 620 && window.scrollY >= 615){
       for(i = 1; i < document.links.length; i++){
        document.getElementById(`section${i}`).classList.remove("your-active-class")
       }
       document.getElementById("section1").classList.toggle("your-active-class");
    }  else if ((window.scrollY <= 1320 && window.scrollY >= 1250)){
        for(i = 1; i < document.links.length; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section2").classList.toggle("your-active-class");
    }else if ((window.scrollY <= 1900 && window.scrollY >= 1890)){
        for(i = 1; i < document.links.length; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section3").classList.toggle("your-active-class");
    }else if((window.scrollY <= 2500 && window.scrollY >= 2490)){
        for(i = 1; i < document.links.length; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section4").classList.toggle("your-active-class");
    } else if((window.scrollY <= 3100 && window.scrollY >= 3090)){
        for(i = 1; i < document.links.length; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section5").classList.toggle("your-active-class");
    }
}

