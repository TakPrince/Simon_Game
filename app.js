let gameSeq = [];
let userSeq = [];
let color = ["red", "blue", "purple", "yello"];
let start = false;
let level = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelectorAll(".btn");

document.addEventListener("keydown", function () {
    if (!start) {
        start = true;
    }

    levelup();
});

function btnflash(bt) {
    bt.classList.add("flash");
    setTimeout(function () {
        bt.classList.remove("flash");
    }, 250);
}

function userflash(bt) {
    bt.classList.add("userflash");
    setTimeout(function () {
        bt.classList.remove("userflash");
    }, 250);
}

function levelup() {
    var elements = document.getElementsByClassName("info");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randinx = Math.floor(Math.random() * 4);
    let redclr = color[randinx];
    let randbtn = document.querySelector(`.${redclr}`);
    gameSeq.push(redclr);
    btnflash(randbtn);
}

function check(indx) {
    if (gameSeq[indx] === userSeq[indx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `game over! your score <b>${level}</b><br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "black";
        }, 120);
        reset();
    }
}

function btnpress() {
    userflash(this);
    usercolor = this.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length - 1);
}

for (btns of btn) {
    btns.addEventListener("click", btnpress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
