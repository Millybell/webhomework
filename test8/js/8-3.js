var num = 1;
    add = document.getElementsByClassName("u-add")[0],
    del = document.getElementsByClassName("u-del"),
    data = document.getElementsByClassName("m-data")[0];

add.onclick = function(e) {
  let t = e.currentTarget;
  let f = t.parentElement.children[0];
  let i = f.childElementCount+1;
  let item = `<div class="u-content"><div class="u-no">${i>1?(++num):num=1}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`
  t.previousElementSibling.insertAdjacentHTML('beforeend',item);
  f.children[f.childElementCount-1].children[2].addEventListener("click",function(){
    this.parentElement.remove();
  });
}

for(let i=0;i<data.childElementCount;++i){
  data.children[i].children[2].addEventListener("click",function(){
    this.parentElement.remove();
  });
}