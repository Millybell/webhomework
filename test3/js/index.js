function getNewDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

var ul = document.getElementsByTagName('ul')[0];
var li = ul.getElementsByTagName('li');
var p = document.getElementsByClassName('m-item');

ul.onclick = function(e){
	var e = e || window.event, target = e.target || e.srcElement;
	for(var s in li){
		if(target == li[s]){
		s = parseInt(s)+1;
		alert(s);
		break;
		}
	}
}

p[0].onclick=function(){
	p[0].style.color="red";
}

p[1].onclick=function(){
	document.getElementsByTagName("h1")[0].innerHTML = getNewDate();
}

p[2].onclick=function(){
	this.className+=" fn-active";
}

p[3].onclick=function(){
	ul.removeChild(ul.getElementsByTagName('li')[7]);
}

p[4].onclick=function(){
	window.open('https://www.taobao.com/');
}

p[5].onclick=function(){
	var p9=document.createElement("li");
	p9.innerHTML="p9";
	ul.appendChild(p9);
}

p[6].onclick=function(){
	var b = document.getElementsByClassName('m-box')[0];
	var width = window.screen.availWidth;
	b.style.width = width+'px';
}
