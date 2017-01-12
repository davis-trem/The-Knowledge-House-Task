var dropped = false;

function navDropdown() {
    var box = document.getElementById("dropbox");
    var endSpot = document.getElementById("nav-button").getBoundingClientRect().right;
    
    if (dropped) {
        var pos = parseInt(endSpot);
    } else {
        var pos = -120;
    }
    var id = setInterval(frame, 1);
    function frame() {
        if (dropped){
            if (pos == -120) {
                clearInterval(id);
                dropped = false;
            } else {
                pos--;
                box.style.left = pos + 'px';
            }
        } else {
            if (pos == parseInt(endSpot)) {
                clearInterval(id);
                dropped = true;
            } else {
                pos++;
                box.style.left = pos + 'px';
            }
        }
    }
}

window.onscroll = function() {navFixed()};
var fixed = false;
function navFixed() {
    var nav = document.getElementById("nav");
    var navTop = nav.getBoundingClientRect().top;
    var imgBum = document.getElementById("nav-header").getBoundingClientRect().bottom;
    
    if (fixed) {
        if ( 0 < parseInt(imgBum) ) {
            nav.style.position = 'static';
            fixed = false;
        }
    } else {
        if ( 0 > parseInt(navTop) ) {
            nav.style.position = 'fixed';
            nav.style.top = 0;
            fixed = true;
        }
    }
}


