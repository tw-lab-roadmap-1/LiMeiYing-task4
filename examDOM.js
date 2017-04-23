/**
 * Created by lmy on 17-4-23.
 */
function judge() {

    var a = document.getElementById("classes");
    var b = document.getElementById("number");
    var c = document.getElementById("name");

    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
        alert("This page says:\n请检查并填写必填信息！");
        document.getElementById("must").style.color = "#F00";
    }
    else {
        document.getElementById("must").style.color = "#000";
    }

}

function countScore() {
    judge();

}
