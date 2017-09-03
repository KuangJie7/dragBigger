/**
 * Created by BlueBrant on 2017/8/31.
 */

window.onload = biggerChange;

function biggerChange() {
    var box = document.getElementById("box"),
        whole = document.getElementById("whole");
    var squares = [];
    squares = document.getElementsByClassName("squares");
    box.onmouseover = appear;
    for(var i = 0 ; i < squares.length ;i++){
        squares[i].onmouseover= appear;
    }
    whole.onmouseout = disappear;
    //squares[0].onmousedown = chosen;
}

function appear(){
    var squares = [];
    squares = document.getElementsByClassName("squares");
    for(var i = 0 ; i < squares.length ;i++){
        squares[i].style.opacity= "1";
    }
    squares[0].onmousedown =chosen;
}

function disappear(){
    var squares = [];
    squares = document.getElementsByClassName("squares");
    for(var i = 0 ; i < squares.length ;i++){
        squares[i].style. opacity= "";
    }
}

function chosen(event) {
   event = event || window.event;
    var squares = document.getElementsByClassName("squares"),
        box = document.getElementById("box");
    document.onmousemove = function (event) {
        event = event||window.event;
        var mouseX = event.clientX,
            mouseY = event.clientY;
        fnmove (event,mouseX,mouseY);
        bigger(event,mouseX,mouseY);
    };
}

function fnmove(event,poiX,poiY) {
    event = event || window.event;
    var squares = document.getElementsByClassName("squares"),
        box = document.getElementById("box");
    document.title = poiX +"," + poiY;
    squares[0].style.left = poiX + "px";
    squares[0].style.top = poiY + "px";
    //box.style.transform = "scale(1.1,1.1)";

    squares[0].onmouseup = function (event) {
        document.onmousemove = null;
    }
}

function bigger(event,poiX,poiY){
    event = event || window.event;
    var allSize = 100,
        box = document.getElementById("box"),
        allRight = box.offsetLeft + box.offsetWidth,
    squares = document.getElementsByClassName("squares"),
        leftSize = squares[0].offsetLeft,
        differLeft = allRight - leftSize - 17,
        ratioLeft = differLeft*1.414/allSize;
        //console.log(ratioLeft);
        box.style.transform = "scale("+ratioLeft+","+ratioLeft+")";

}
