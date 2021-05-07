var tab = document.getElementsByClassName("u-tab"),
    con = document.getElementsByClassName("m-content")[0];

for(let i=0;i<tab.length;++i){
  tab[i].onclick=function(){
    for(let j=0;j<tab.length;++j){
      tab[j].style.backgroundColor="white";
    }
    this.style.backgroundColor="#999";
    con.innerHTML=Array.prototype.indexOf.call(this.parentNode.children,this)+1;
  }
}