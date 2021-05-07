var num = 1; //总数

$('body').on('click', '.u-add', (e) => {
  let item = `<div class="u-content"><div class="u-no">${++num}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`
  $(".u-add").before(item);
})

$('body').on('click', '.u-del', (e) => {
  let t = e.currentTarget;
  $(t).parent().remove();
  num --;
  upload();
})
//修正序号
function upload() {
  let contentList = $('.m-data').children();
  let i = num;
  contentList.map((index,item)=>{
  	$(item).find('.u-no').text(num - (--i));
  })
} 