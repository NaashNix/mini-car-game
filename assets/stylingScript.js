let gameArea = document.querySelector(".gameArea");
let car = document.querySelector("#car");
let stoneContainer = document.querySelector(".stoneContainer");

makeObstacles();

let height = window.innerHeight;
let width = window.innerWidth;

$("#backgroundImage").css("height", `${height}px `);
$("#backgroundImage").css("width", `${width}px `);

function makeObstacles() {
    window.requestAnimationFrame(moveObstacles);

    // for (m = 0; m < 4; m++) {
    //     let distance = Math.floor(Math.random() * 1000);
    //     let widthDistance = Math.floor(Math.random() * 300);
    //     console.log("WidthDistance : ",widthDistance);
    //     let stoneSet = document.createElement("div");
    //     stoneSet.setAttribute("class", "stone");
    //     stoneSet.x = distance;
    //     console.log(stoneSet.x);
    //     stoneSet.style.right = stoneSet.x + 'px';
    //     stoneSet.style.top = widthDistance + 'px';
    //     stoneContainer.appendChild(stoneSet);
    //}

    let widthDistance = Math.floor(Math.random() * 340);
    let singleStone = document.createElement("div");
    singleStone.setAttribute("class", "stone");

    // singleStone.top = `${widthDistance}px !important`;
    singleStone.setAttribute("style", `top:${widthDistance}px !important`);
    console.log("Stone.Top : ", singleStone.top);
    stoneContainer.append(singleStone);

}


function gameLogic() {
    let CAR_obj = document.querySelector("#car");
    let STONE_obj = document.querySelector(".stone");

    let carBounds = CAR_obj.getBoundingClientRect();
    let stoneBounds = STONE_obj.getBoundingClientRect();

    let overlapped = (carBounds.top > stoneBounds.bottom ||
        carBounds.right < stoneBounds.left ||
        carBounds.bottom < stoneBounds.top ||
        carBounds.left > stoneBounds.right);

    console.log(overlapped);



}

let stonesList = document.querySelectorAll(".stone");

function moveObstacles() {
    let stoneSet = document.querySelectorAll(".stone");
    stoneSet.forEach(function (item) {
        console.log("Item.offsetLeft : ", item.offsetLeft);
        // console.log("Item.style.left : ",);
        if (item.offsetLeft < -40) {
            item.style.display = 'none';
            makeObstacles();
        }

        let value = parseInt(item.offsetLeft);
        // console.log(value-20);
        item.style.left = `${parseInt(value - 20)}px`;
        console.log("Final Item.offsetLeft : ", item.offsetLeft);
        // console.log("Item.Offset",item.offsetTop);

    })
}


// var roadRunningFunc = setInterval(() => {
//     gamePlay();
//     moveObstacles();
//     gameLogic();
// }, 1000);


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

    console.log("Total Width : ", road.left + 20 + gameArea.clientWidth);

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