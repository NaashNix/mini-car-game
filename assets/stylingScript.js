$("#gameSection").css("display", "none");

let forward = 0;
let actualHeight = window.innerHeight
let actualWidth = window.innerWidth;
// console.log(actualHeight);

$("#homeSection").css("height", actualHeight);

function gameStart() {
    $("#homeSection").css("display", "none");
    $("#gameSection").css("display", "block");
    $("#roadContainer").css("height", actualHeight);
}

document.onkeydown = checkKey;

function checkKey(e) {

    let value = $("#gameSection").css("display");

    if (value != 'block') {
        return;
    }

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log("");
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
        //Left Key
        driveRoadForward();
    }
    else if (e.keyCode == '39') {
        // right arrow
    }

}


function driveRoadForward() {

}

function roadRunning() {
    
}