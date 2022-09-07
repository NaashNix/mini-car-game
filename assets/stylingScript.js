let gameArea = document.querySelector(".gameArea");
let car = document.querySelector("#car");
let stoneContainer = document.querySelector(".stoneContainer");


$("#game").css("display",'none');
var roadRunningFunc;
var gameLogicFuncRunning;

moveToGameScreen();

function moveToGameScreen(){
    $("#game").css("display",'block');
    $("#gameStartScreen").css("display",'none');
    makeObstacles();
    roadRunningFunc = setInterval(() => {
        gamePlay();
        moveObstacles();
    }, 60);
    
    gameLogicFuncRunning = setInterval(() => {
        gameLogic();
    }, 30);
}

let height = window.innerHeight;
let width = window.innerWidth;

$("#backgroundImage").css("height", `${height}px `);
$("#backgroundImage").css("width", `${width}px `);

function makeObstacles() {
    window.requestAnimationFrame(moveObstacles);

    let widthDistance = Math.floor(Math.random() * 340);
    let singleStone = document.createElement("div");
    singleStone.setAttribute("class", "stone");
    singleStone.setAttribute("style", `top:${widthDistance}px !important`);

    stoneContainer.append(singleStone);

}


function gameLogic() {
    let CAR_obj = document.querySelector("#car");
    let STONE_obj = document.querySelector(".stone");

    let carBounds = CAR_obj.getBoundingClientRect();
    let stoneBounds = STONE_obj.getBoundingClientRect();

    let overlapped = true;

    overlapped = (carBounds.top > stoneBounds.bottom ||
        carBounds.right < stoneBounds.left ||
        carBounds.bottom < stoneBounds.top ||
        carBounds.left > stoneBounds.right);

        console.log("carBounds.top : ",carBounds.top);
        console.log("stoneBounds.top : ",stoneBounds.top);
        console.log("carBounds.bottom : ",carBounds.bottom);
        console.log("stoneBounds.bottom : ",stoneBounds.bottom);
        console.log("-----------------------------------");
        console.log("carBounds.left : ",carBounds.left);
        console.log("stoneBounds.left : ",stoneBounds.left);
        console.log("carBounds.right : ",carBounds.right);
        console.log("stoneBounds.right : ",stoneBounds.right);


    if (overlapped == false) {
        clearInterval(roadRunningFunc);
        clearInterval(gameLogicFuncRunning);
        car.style.display = `none`;
        gameOverFunction();
    }



}
 
function gameOverFunction(){
    $("#game").css('display','none');
    // $("body").append("<h1>GAME OVER</h1>");
    $("body").append(gameOverScreenCom());
}

function  gameOverScreenCom() {
    return (`<section class="gameOverScreen">
        <h1>GAME OVER</h1>
        <button>Retry</button>
    </section>`);
}

let stonesList = document.querySelectorAll(".stone");

function moveObstacles() {
    let stoneSet = document.querySelectorAll(".stone");
    stoneSet.forEach(function (item) {

        // console.log("Item.style.left : ",);
        if (item.offsetLeft < -40) {
            item.remove();
            makeObstacles();
        }

        let value = parseInt(item.offsetLeft);
        
        item.style.left = `${parseInt(value - 20)}px`;

    })
}


document.onkeydown = checkKey;
start();
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        turnCarRight();
    }
    else if (e.keyCode == '40') {
        turnCarLeft();
    }
    else if (e.keyCode == '37') {
        carMoveBackward();
    }
    else if (e.keyCode == '39') {
        carMoveForward();
    }

}

// let j = 0;

function gamePlay() {
    let road = gameArea.getBoundingClientRect();
    // console.log(road);

    moveLines();

}

function moveLines() {
    let lines = document.querySelectorAll(".lines");
    lines.forEach(function (item) {
        if (item.x >= 1200) {
            item.x = -50;
        }
        item.x += 20;
        item.style.right = item.x + 'px';
    })

    // window.requestAnimationFrame(moveLines);
}


function start() {


    for (m = 0; m < 9; m++) {
        let roadLines = document.createElement("div");
        roadLines.setAttribute("class", "lines");
        roadLines.x = (m * 150);
        console.log(roadLines.x);
        roadLines.style.right = roadLines.x + 'px';
        gameArea.appendChild(roadLines);
    }

    // moveLines();

    // window.requestAnimationFrame(moveLines);

}

function turnCarLeft() {

    var fromBottom = parseInt($("#car").css("top"));
    let roadFromTop = parseInt($(".gameArea").css("top"));


    if (fromBottom < gameArea.clientHeight + 40) {
        fromBottom = fromBottom + 10;
        $("#car").css("top", `${fromBottom}px`);
    } else {

    }




}

function turnCarRight() {
    let road = gameArea.getBoundingClientRect();

    let roadFromTop = parseInt($(".gameArea").css("top"));
    var fromBottom = parseInt($("#car").css("top"));

    if (fromBottom > roadFromTop + 130) {
        fromBottom = fromBottom - 10;
        $("#car").css("top", `${fromBottom}px`);
    } else {

    }

}

function carMoveForward() {
    let road = gameArea.getBoundingClientRect();


    var fromLeft = parseInt($("#car").css("left"));

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

    if (road.left + 20 < car.x) {
        fromLeft = fromLeft - 10;
        $("#car").css("left", `${fromLeft}px`);
    } else {

    }

}