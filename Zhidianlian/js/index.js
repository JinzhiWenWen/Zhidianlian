(function($){
  $.fn.scrollTo = function (options) {
    var defaults = {
      toT: 0,    //滚动目标位置
      durTime: 500,  //过渡动画时间
      delay: 30,     //定时器时间
      callback: null   //回调函数
    };
    var opts = $.extend(defaults, options),
      timer = null,
      _this = this,
      curTop = _this.scrollTop(),//滚动条当前的位置
      subTop = opts.toT - curTop,    //滚动条目标位置和当前位置的差值
      index = 0,
      dur = Math.round(opts.durTime / opts.delay),
      smoothScroll =(t)=>{
        index++;
        var per = Math.round(subTop / dur);
        if (index >= dur) {
          _this.scrollTop(t);
          window.clearInterval(timer);
          if (opts.callback && typeof opts.callback == 'function') {
            opts.callback();
          }
          return;
        } else {
          _this.scrollTop(curTop + index * per);
        }
      };
    timer = window.setInterval(()=>{
      smoothScroll(opts.toT);
    }, opts.delay);
    return _this;
  };
  //菜单下拉事件
  $('.icon').on('click',function(){
    var atr=$(this).attr('abc')
    if(atr==1){
        setTimeout(()=>{
          $('.hidden_box').css({'top':'-30rem'});
        },200)
        $('.nav').css('transform','translateY(100%)')
        $('.nav').css('opacity','0')
        setTimeout(()=>{
          $('.nav').css('display','none')
        },200);
        $('.content_one_title').css('opacity','1');
        $('.mask_nav').css('display','none')
        $(this).attr('abc',0);
    }else{
      $('.hidden_box').css({'top':'0'});
      setTimeout(()=>{
        $('.nav').css('transform','translateY(0)')
        $('.nav').css('opacity','1')
      },300)
      $('.nav').css('display','block')
      $('.content_one_title').css('opacity','0')
      $('.mask_nav').css('display','block')
      $(this).attr('abc',1)
    }
  });
  $('.mask_nav').on('click',()=>{
    setTimeout(()=>{
      $('.hidden_box').css({'top':'-30rem'});
    },200)
    $('.nav').css('transform','translateY(100%)')
    $('.nav').css('opacity','0')
    setTimeout(()=>{
      $('.nav').css('display','none')
    },200);
    $('.content_one_title').css('opacity','1');
    $('.mask_nav').css('display','none')
  })
  //下滑事件
  window.addEventListener('scroll',(e)=>{
    var topOne=$('.content_two').offset().top;
    var topOneImg=$('.content_img_two').offset().top - $(window).scrollTop();
    var topTwo=$('.content_two_cen').offset().top - $(window).scrollTop();
    var topThree=$('.content_three').offset().top - $(window).scrollTop();
    var topFour=$('.content_four').offset().top - $(window).scrollTop();
    var topFive=$('.content_five').offset().top - $(window).scrollTop();
    var topMany=$('.content_many').offset().top - $(window).scrollTop();
    var topSix=$('.content_six').offset().top - $(window).scrollTop();
    var topLast=$('.content_last').offset().top-$(window).scrollTop();
    var proTop=$('.content_progress').offset().top-$(window).scrollTop();
    if($(window).width()>1024){
      $('.content_progress_pc').show()
      $('.content_progress').hide()
      $('.content_five').hide()
      $('.content_five_pc').show()
      $('.content_many').hide()
      $('.content_many_pc').show()
      $('.content_last_pc').show()
    }else{
      $('.content_progress').show()
      $('.content_five').show()
      $('.content_progress_pc').hide()
      $('.content_five_pc').hide()
      $('.content_many').show()
      $('.content_many_pc').hide()
      $('.content_last_pc').hide()
    }
    if($(window).scrollTop()>150){
      $('.header_pc').css('background','#130a48')
    }else{
      $('.header_pc').css('background','')
    }
    if($(window).scrollTop()>0){
      // $('.content_progress').hide()
      setTimeout(()=>{
        $('.hidden_box').css({'top':'-30rem'});
      },200)
      $('.nav').css('transform','translateY(100%)')
      $('.nav').css('opacity','0')
      setTimeout(()=>{
        $('.nav').css('display','none')
      },200);
      $('.content_one_title').css('opacity','1');
      $('.mask_nav').css('display','none');
    }
    if(topOne<800){
      $('.content_two_title').css('transform','translateX(0)')
    }
    if(topOneImg<700){
      $('.content_img_two').css({'transform':'translateY(0)'})
      $('.content_img_two').css('opacity','1')
    }
    if(topTwo<500){
      $('.content_two_C').css('transform','translateY(0)')
      $('.content_two_C').css('opacity','1')
    }
    if(topThree<450){
      $('.content_three_title').css('transform','translateX(0)')
      $('.content_img_three').css('transform','translateY(0)')
      $('.content_img_three').css('opacity','1')
    }
    if(topThree<400){
      $('.content_title_T').css('transform','translateY(0)')
      $('.content_title_T').css('opacity','1')
    }
    if(topFour<500){
      $('.content_four_title').css('transform','translateX(0)')
      $('.content_four_img1').css('transform','translateY(0)')
      $('.content_four_img1').css('opacity','1')
    }
    if(topFour<400){
      $('.content_four_instTop').css('transform','translateX(0)')
    }
    if(topFour<100){
      $('.content_four_img2').css('transform','translateY(0)')
      $('.content_four_img2').css('opacity','1')
      $('.content_four_instBot').css('transform','translateX(0)')
    }
    if(topFive<500){
      $('.content_five_img1').css('transform','translateY(0)');
      $('.content_five_img1').css('opacity','1');
      $('.content_five_title1').css('transform','translateX(0)');
      $('.content_five_alt1').css('transform','translateX(0)')
    }
    if(topFive<100){
      $('.content_five_img2').css('transform','translateY(0)');
      $('.content_five_img2').css('opacity','1')
      $('.content_five_title2').css('transform','translateX(0)');
      $('.content_five_alt2').css('transform','translateX(0)')
    }
    if(topFive<0){
      $('.content_five_img3').css('transform','translateY(0)');
      $('.content_five_img3').css('opacity','1')
      $('.content_five_title3').css('transform','translateX(0)');
      $('.content_five_alt3').css('transform','translateX(0)')
    }
    if(topMany<600){
      $('.content_many_title').css('transform','translateX(0)')
    }
    if(topMany<500){
      $('.content_many_img1').css('transform','translateY(0)');
      $('.content_many_img1').css('opacity','1')
      $('.content_many_alt1').css('transform','translateX(0)')
    }
    if(topMany<300){
      $('.content_many_img2').css('transform','translateY(0)');
      $('.content_many_img2').css('opacity','1')
    }
    if(topMany<300){
      $('.content_many_alt2').css('transform','translateX(0)')
      $('.content_many_img3').css('transform','translateY(0)');
      $('.content_many_img3').css('opacity','1');
      $('.content_many_alt3').css('transform','translateX(0)');
    }
    if(topLast<500){
      $('.content_last_title').css('transform','translateX(0)');
      $('.content_last_qr').css('transform','translateY(0)');
      $('.content_last_qr').css('opacity','1');
      $('.content_last_alt').css('transform','translateX(0)');
      $('.content_last_email').css('transform','translateX(0)');
      $('.content_last_phone').css('transform','translateX(0)')
    }
    if(topSix<300){
      $('.content_six_title').css('transform','translateX(0)');
      $('.content_message').css('transform','translateY(0)');
      $('.content_message').css('opacity','1')
    }
    if(proTop<550){
      $('.content_progress').css('transform','translateY(0)');
      $('.content_progress').css('opacity','1');
      $('.content_progress_title').css('transform','translateX(0)');
    }
  })
  //点击跳转事件
  $('.about').on('click',()=>{
    $(window).scrollTo({toT:640})
  })
  $('.chose').on('click',()=>{
    $(window).scrollTo({toT:1285})
  })
  $('.todo').on('click',()=>{
    $(window).scrollTo({toT:2960})
  })
  $('.contact').on('click',()=>{
    $(window).scrollTo({toT:5502})
  })
  $('.join').on('click',()=>{
    $(window).scrollTo({toT:7000})
  })
  $('.progress').on('click',()=>{
    $(window).scrollTo({toT:4500})
  })
  $('.progressPc').on('click',()=>{
    $(window).scrollTo({toT:4300})
  })
  $('.todoPc').on('click',()=>{
    $(window).scrollTo({toT:2660})
  })
  $('.chosePc').on('click',()=>{
    $(window).scrollTo({toT:1485})
  })
//返回顶部
  $('.backTop').on('click',()=>{
      $(window).scrollTo({toT: 0});
  });
  //轮播图
  var swiper = new Swiper('.swiper-container', {
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });
})(Zepto)
