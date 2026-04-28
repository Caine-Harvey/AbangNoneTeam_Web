// MENU TOGGLE
function toggleMenu() {
    let menu = document.getElementById("sideMenu");
    if(menu){
        menu.classList.toggle("active");
    }
}

// CLOSE MENU WHEN CLICK OUTSIDE
document.addEventListener("click", function(e) {
    let menu = document.getElementById("sideMenu");
    let btn = document.querySelector(".menu-btn");

    if (!menu || !btn) return;

    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("active");
    }
});

// PAGE ENTER ANIMATION
window.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container");

    setTimeout(() => {
        if(container){
            container.classList.add("loaded");
        }
    }, 50);
});

// PAGE EXIT ANIMATION
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e){
        if(this.href){
            e.preventDefault();

            let container = document.querySelector(".container");
            if(container){
                container.classList.remove("loaded");
            }

            setTimeout(() => {
                window.location = this.href;
            }, 300);
        }
    });
});

// BACKGROUND MUSIC (play after first click)
document.addEventListener("click", () => {
    let music = document.getElementById("bgm");
    if(music){
        music.muted = false;
        music.play();
    }
}, { once: true });
