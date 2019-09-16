let map = (document.getElementsByClassName("map"))[0]
let marker = (document.getElementsByClassName("marker"))[0];

map.onmouseover = function (event) {
    let target = event.target;
    if (target.nodeName == "path") {
        target.setAttribute("fill", "#342422");
    }
};
map.onmouseout = function (event) {
    let target = event.target;
    if (target.nodeName == "path") {
        target.setAttribute("fill", "#FFFFFF");
    }
};

marker.onmousedown = function (event) {

    let img = marker.cloneNode(true);
    document.body.append(img);
    img.clientX = event.clientX;
    img.clientY = event.clientY;

    let shiftX = event.clientX - img.getBoundingClientRect().left;
    let shiftY = event.clientY - img.getBoundingClientRect().top;

    img.style.position = 'absolute';
    img.style.zIndex = 1000;
    document.body.append(img);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        img.style.left = pageX - shiftX + 'px';
        img.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    img.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        img.onmouseup = null;
    };

};

marker.ondragstart = function () {
    return false;
}

