var $this = $(".scrollNews");
var scrollTimer;
$this.hover(function () {
    clearInterval(scrollTimer);
}, function () {
    scrollTimer = setInterval(function () {
        scrollNews($this);
    }, 1500);
}).trigger("mouseleave");

function scrollNews(obj) {
    var $self = obj.find("ul");
    var lineHeight = $self.find("li:first").height();
    $self.animate({
        "marginTop": -lineHeight + "px"
    }, 500, function () {
        $self.css({
            marginTop: 0
        }).find("li:first").appendTo($self);
    })
}

//列表滚动 右二
// var doscroll = function(){
//     var $parent = $('.js-slide-list');
//     var $first = $parent.find('li:first');
//     var Hheight = $first.height();
//     if( Hheight < Hheight*3 ){
//         $first.animate({
//             height: 0   //或者改成： marginTop: -height + 'px'
//             }, 500, function() {// 动画结束后，把它插到最后，形成无缝
//             $first.css('height', height).appendTo($parent);
//             // $first.css('marginTop', 0).appendTo($parent);
//          });
//     } else if(Hheight >= Hheight*3){
//         $first.animate({
//             height: 0   //或者改成： marginTop: -height + 'px'
//             }, 500, function() {// 动画结束后，把它插到最后，形成无缝
//             $first.css('height', height).appendTo($parent);
//             // $first.css('marginTop', 0).appendTo($parent);
//          });
//     }
   
// };

//列表滚动 右一

//列表滚动 右二
var doscroll = function(){
    var $parent = $('.js-slide-list');//弗雷的
    var $first = $parent.find('li:first'); //子类
    var Hheight = $first.height();
    var uheight = $parent.height();
    console.log(Hheight,"2222"); 27
    console.log(uheight,"33333"); 1229
    if(uheight<Hheight){
        //     $first.animate({
        //         Hheight: 0   //或者改成： marginTop: -height + 'px'
        //       }, 500, function() {// 动画结束后，把它插到最后，形成无缝
        //       $first.css('height', Hheight).appendTo($parent);
        //       // $first.css('marginTop', 0).appendTo($parent);
        //    });
        }
        console.log(uheight, Hheight)
        if(uheight>=Hheight * 10){
                    $first.animate({
                        Hheight: 0  //或者改成： marginTop: -height + 'px'
                        }, 500, function() {// 动画结束后，把它插到最后，形成无缝
                        $first.css('height', Hheight).appendTo($parent);
                        // $first.css('marginTop', 0).appendTo($parent);
                     });
                }
       
   
};
  setInterval(function(){doscroll()}, 2000);



//列表滚动 右二
var doscrolls = function(){
    var $parent = $('.js-slide-lists');
    var $first = $parent.find('li:first');
    var Hheight = $first.height();
    var uheight = $parent.height();
    if(uheight<Hheight){
    //     $first.animate({
    //         Hheight: 0   //或者改成： marginTop: -height + 'px'
    //       }, 500, function() {// 动画结束后，把它插到最后，形成无缝
    //       $first.css('height', Hheight).appendTo($parent);
    //       // $first.css('marginTop', 0).appendTo($parent);
    //    });
    }
    // console.log(uheight, Hheight)
    if(uheight>=Hheight * 8){
                $first.animate({
                    Hheight: 0  //或者改成： marginTop: -height + 'px'
                    }, 500, function() {// 动画结束后，把它插到最后，形成无缝
                    $first.css('height', Hheight).appendTo($parent);
                    // $first.css('marginTop', 0).appendTo($parent);
                 });
            }
   
};
  setInterval(function(){doscrolls()}, 2000);




// var doscrolls = function(){
//     var $parent = $('.js-slide-lists');
//     var $first = $parent.find('li:first');
//     var HHeight = $first.height();
//     var uheight = $parent.height();
//     console.log(HHeight,"获取一下")
//     console.log(uheight,"获取一下高度")
//     if( uheight<HHeight * 5){
//         $first.animate({
//             height: 0   //或者改成： marginTop: -height + 'px'
//             }, 500, function() {// 动画结束后，把它插到最后，形成无缝
//             $first.css('height', HHeight).appendTo($parent);
//             // $first.css('marginTop', 0).appendTo($parent);
//          });
//     } else if(uheight>=HHeight*5){
//         $first.animate({
//             height: HHeight   //或者改成： marginTop: -height + 'px'
//             }, 500, function() {// 动画结束后，把它插到最后，形成无缝
//             $first.css('height', HHeight).appendTo($parent);
//             // $first.css('marginTop', 0).appendTo($parent);
//          });
//     }
   
// };
//   setInterval(function(){doscrolls()}, 2000);

//   //列表滚动 右二
// //   都没有关系就是改这两个上下
// var doscrolls = function(){
//     var $parent = $('.js-slide-lists');
//     var $first = $parent.find('li:first');
//     var uheight = $(".slide-lists").height();
//     console.log(uheight); 
//     var iheight = $(".slide-lists li").height();
//     console.log(iheight);
//     if( uheight < iheight*3 ){
//         $first.animate({
//             height: 0  //或者改成： marginTop: -height + 'px'
//             }, 500, function() {// 动画结束后，把它插到最后，形成无缝
//             $first.css('height', iheight).appendTo($parent);
//             // $first.css('marginTop', 0).appendTo($parent);
//          });
      
//     } else if(uheight >= iheight*3){
//         $first.animate({
//             height: 0   //或者改成： marginTop: -height + 'px'
//             }, 500, function() {// 动画结束后，把它插到最后，形成无缝
//             $first.css('height', iheight).appendTo($parent);
//             // $first.css('marginTop', 0).appendTo($parent);
//          });
//          setInterval(function(){doscrolls()}, 2000);
//     }
// };
  
