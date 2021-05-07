let pic = document.getElementsByClassName("u-pic"),
    mlist = document.getElementsByClassName("m-list")[0],
    body = document.getElementsByTagName("body")[0];

for(let i=0;i<pic.length;i++){
  pic[i].onclick = function(e){
    mlist.style.transition = 'opacity 1s';
    mlist.style.opacity = '0.5';
    mlist.style.display="block";
    let t = e.currentTarget;
    let d = t.parentNode.nextElementSibling;
    d.classList.remove('hide');
    d.appendChild(t.cloneNode(true));
    let p = d.querySelectorAll('.u-pic');
    for(let j=1;j<p.length;j++){
      p[j].parentNode.removeChild(p[j]);
    }
    e.stopPropagation();
  }
}

body.onclick = function(e){
  mlist.style.transition = 'opacity 1s';
  mlist.style.backgroundColor=window.getComputedStyle(this,null).getPropertyValue("background-color");
  mlist.style.opacity = '1';
  let t = e.currentTarget;
  let b = t.children;
  b[0].children[1].classList.add('hide');
}