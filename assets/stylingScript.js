let gameArea = document.querySelector(".gameArea");
let car = document.querySelector("#car");

makeObstacles();

let height = window.innerHeight;
let width = window.innerWidth;

$("#backgroundImage").css("height", `${height}px `);
$("#backgroundImage").css("width", `${width}px `);

function makeObstacles() {
    window.requestAnimationFrame(gamePlay);

    for (m = 0; m < 9; m++) {
        let stoneSet = document.createElement("div");
        stoneSet.setAttribute("class", "stones");
        stoneSet.x = (m * 150);
        console.log(stoneSet.x);
        stoneSet.style.right = stoneSet.x + 'px';
        gameArea.appendChild(stoneSet);
    }
}

let stonesList = document.querySelectorAll(".stone");

function moveObstacles(){
    // let stoneObstacles = document.querySelectorAll(".obstacles");
    stonesList.forEach(function (item) {    
        if (item.clientLeft >= 1200) {
            item.left = 5;
            console.log("Item.x: ", item.left);
        }
        item.left += 20;
        item.style.right = item.left + 'px';
        console.log("Item.x: ", item.left);
    })
}


var roadRunningFunc = setInterval(() => {
    gamePlay();
}, 50);


document.onkeydown = checkKey;
start();
function checkKey(e) {

    // let value = $("#gameSection").css("display");

    // if (value != 'block') {
    //     return;
    // }

    e = e || window.event;

    if (e.keyCode == '38') {
        carMoveForward();
    }
    else if (e.keyCode == '40') {
        carMoveBackward();
    }
    else if (e.keyCode == '37') {
        turnCarRight();
    }
    else if (e.keyCode == '39') {
        turnCarLeft();
    }

}

let j = 0;

function gamePlay() {
    let road = gameArea.getBoundingClientRect();
    // console.log(road);

    moveLines();

}

function moveLines() {
    let lines = document.querySelectorAll(".lines");
    lines.forEach(function (item) {
        if (item.x >= 1200) {
            item.x = 5;
        }
        
        item.x += 20;
        item.style.right = item.x + 'px';
    })
}

function start() {

    window.requestAnimationFrame(gamePlay);

    for (m = 0; m < 9; m++) {
        let roadLines = document.createElement("div");
        roadLines.setAttribute("class", "lines");
        roadLines.x = (m * 150);
        console.log(roadLines.x);
        roadLines.style.right = roadLines.x + 'px';
        gameArea.appendChild(roadLines);
    }

}       

function turnCarLeft() {
    
    let road = gameArea.getBoundingClientRect();

    var fromBottom = parseInt($("#car").css("top"));
    let roadFromTop = parseInt($(".gameArea").css("top"));


    if (fromBottom < gameArea.clientHeight + 40) {
        fromBottom = fromBottom + 10;
        $("#car").css("top", `${fromBottom}px`);
    } else {
        console.log("ELSE");
    }




}

function turnCarRight() {
    let road = gameArea.getBoundingClientRect();

    let roadFromTop = parseInt($(".gameArea").css("top"));
    var fromBottom = parseInt($("#car").css("top"));

    console.log("From Bottom: ", fromBottom);

    if (fromBottom > roadFromTop + 130) {
        fromBottom = fromBottom - 10;
        $("#car").css("top", `${fromBottom}px`);
    } else {

    }



}

function carMoveForward() {
    let road = gameArea.getBoundingClientRect();


    var fromLeft = parseInt($("#car").css("left"));
    console.log("From left: ", fromLeft);
    
    console.log("Total Width : " ,road.left + 20 + gameArea.clientWidth);

    if (gameArea.clientWidth - 95 > car.x) {
        fromLeft = fromLeft + 10;
        $("#car").css("left", `${fromLeft}px`);
    } else {
        console.log("Not Turned");
    }
    
    
    $("#car").css("left", `${fromLeft}px`);
}

function carMoveBackward() {
    
    let road = gameArea.getBoundingClientRect();

    var fromLeft = parseInt($("#car").css("left"));
    console.log("From left: ", fromLeft);

    if (road.left + 20 < car.x) {
        fromLeft = fromLeft - 10;
        $("#car").css("left", `${fromLeft}px`);
    } else {
        console.log("Not Turned");
    }

}