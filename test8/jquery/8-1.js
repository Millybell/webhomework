$('body').on('click', (e)=>{
  $("div .m-list").fadeTo("fast",1);
  let $b = $(e.currentTarget).children();
  $b.eq(0).children().eq(1).addClass('hide');
})

$('body').on('click','.u-pic', (e)=>{
  $("div .m-list").fadeTo("fast",0.5);
  let t = e.currentTarget;
  let $d = $(t).parent().next();
  $d.removeClass('hide');
  // 移除原有图片
  $d.find('.u-pic').remove();
  // <div>内增加所选项内容 (浅拷贝，防止点一个少一个)
  $d.append($(t).clone()); 
  e.stopPropagation();
})