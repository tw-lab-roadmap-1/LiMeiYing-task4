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

    let answer = [{blank1: "统一建模语言", blank2: "封装性", blank3: "继承性", blank4: "多态性"}];
    let score = 0;
    if (document.getElementById("blank1").value == answer[0].blank1) {
        score += 5;
    }
    if (document.getElementById("blank2").value == answer[0].blank2) {
        score += 5;
    }
    if (document.getElementById("blank3").value == answer[0].blank3) {
        score += 5;
    }
    if (document.getElementById("blank4").value == answer[0].blank4) {
        score += 5;
    }

    let a = document.getElementById("in");
    let input = a.getElementsByTagName('input');
    if (input[1].checked) {
        score += 10;
    }
    if (input[4].checked) {
        score += 10;
    }
    if (input[8].checked && input[10].checked && input[11].checked) {
        score += 10;
    }
    if (input[12].checked && input[13].checked && input[14].checked) {
        score += 10;
    }
    if (input[17].checked) {
        score += 10;
    }
    if (input[18].checked) {
        score += 10;
    }

    if (document.getElementById("textbox").value == "模型是对现实世界的简化和抽象") {
        score += 20;
    }

    document.getElementById("scores").innerHTML = '得分:' + String(score);
    document.getElementById("scores").style.color = 'red';
}
