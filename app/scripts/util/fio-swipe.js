

var ImageSwiper = function(imgs, minRange,slide) {
  this.imgBox = imgs
  this.imgs = imgs.children
  this.cur_img = 1  //起始图片设为1 ,而非0,将在图片显示方法中作-1处理
  this.pre
  this.next
  this.ready_moved = true  //判断每次滑动开始的标记变量
  this.imgs_count = this.imgs.length
  this.touchX  //触控开始的手指最初落点
  this.minRange = Number(minRange)
  this.fadeIn  //图片切换的方式,这里使用淡入淡出
  this.fadeOut
  this.bindTouchEvn() //初始化绑定滑动事件
  this.showPic(this.cur_img) //显示图片方法,注意其中图片编号的-1处理
  this.slide = (slide==undefined)?true:slide
  this.autoslide()
  this.c_cssVendor
  this.cssVendor = this.c_cssVendor()
}
ImageSwiper.prototype.c_cssVendor = function(){
    var divstyle=document.createElement('div').style;
    var tests="-webkit- -moz- -o- -ms-".split(" "),
        prop;
    while(prop=tests.shift()){
        if(prop+'transform' in divstyle){
            return prop;
        }
    }
    return '';
}
ImageSwiper.prototype.pre = function(cur){
  if(cur==1){
    return this.imgs_count-1;
  }
  return cur-2;
}
ImageSwiper.prototype.next = function(cur){
  if(cur==this.imgs_count){
    return 0;
  }
  return cur;
}
ImageSwiper.prototype.autoslide = function () {
  // this.imgs[this.cur_img].style.transform="translateX(100vw)";

  if(this.slide){
    var imgs_count = this.imgs_count
    var sh = setInterval(function() {
      if (this.ready_moved) {
        if (this.cur_img > (imgs_count - 1)) {
          this.cur_img = 0;
        }
        this.cur_img++;
        this.showPic(this.cur_img);
      }
    }.bind(this),3000);
  }
  // body...
}
ImageSwiper.prototype.bindTouchEvn = function() {
  console.log('bindtouch');
  this.imgBox.addEventListener('touchstart', this.touchstart.bind(this), false)
  this.imgBox.addEventListener('touchmove', this.touchmove.bind(this), false)
  this.imgBox.addEventListener('touchend', this.touchend.bind(this), false)
}
ImageSwiper.prototype.touchstart = function(e) {
  console.log('touchstart');
  if (this.ready_moved) {
    var touch = e.touches[0];
    this.touchX = touch.pageX;
    this.ready_moved = false;

  }

}

ImageSwiper.prototype.touchmove = function(e) {
  console.log('touchmove');
  e.preventDefault();
  var minRange = this.minRange
  var touchX = this.touchX
  var imgs_count = this.imgs_count

  var release = e.changedTouches[0];
  var releasedAt = release.pageX;
  var movedistant = releasedAt - touchX;

  var screenwidth = screen.width;
  var index = this.cur_img-1;
  var pre = this.pre(this.cur_img);
  var next = this.next(this.cur_img);
  for(var i = 0,length=this.imgs_count;i<length;i++){
    this.imgs[i].style.transition="all 0s ease";
  }
  document.getElementById('test').innerHTML=this.ready_moved;
  this.imgs[index].style.transform = "translateX("+movedistant+"px)";
  this.imgs[pre].style.transform = "translateX("+(movedistant-screenwidth)+"px)";
  this.imgs[next].style.transform = "translateX("+(movedistant+screenwidth)+"px)";
  this.imgs[index].style[this.cssVendor+'transform'] = "translateX("+movedistant+"px)";
  this.imgs[pre].style[this.cssVendor+'transform'] = "translateX("+(movedistant-screenwidth)+"px)";
  this.imgs[next].style[this.cssVendor+'transform'] = "translateX("+(movedistant+screenwidth)+"px)";
  // this.img[pre].style.

}

ImageSwiper.prototype.touchend = function(e) {
  e.preventDefault();
  var minRange = this.minRange
  var touchX = this.touchX
  var imgs_count = this.imgs_count

  for(var i = 0,length=this.imgs_count;i<length;i++){
    this.imgs[i].style.transition="";
    this.imgs[i].style.transform="";
    this.imgs[i].style[this.cssVendor+'transition']="";
    this.imgs[i].style[this.cssVendor+'transform']="";
  }
  
  if (!this.ready_moved) {
    var release = e.changedTouches[0];
    var releasedAt = release.pageX;
    if (touchX - releasedAt > minRange) {
      this.ready_moved = true;
      if (this.cur_img > (imgs_count - 1)) {
        this.cur_img = 0;
      }
      this.cur_img++;
      this.showPic(this.cur_img);

    } else if (releasedAt - minRange > touchX) {
      var pre_pre = this.pre(this.pre(this.cur_img)+1);
      this.imgs[pre_pre].style.transition="all 0s ease";
      this.imgs[pre_pre].style[this.cssVendor+'transition']="all 0s ease";
      console.log('index'+this.cur_img);
      this.imgs[this.cur_img-1].style.transition="all 0.4s ease";
      this.imgs[this.cur_img-1].style[this.cssVendor+'transition']="all 0.4s ease";
      if (this.cur_img <= 1) {
        this.cur_img = imgs_count + 1
      }
      this.cur_img--;
      this.showPic(this.cur_img);
      this.ready_moved = true;
      setTimeout(function(){
        this.imgs[this.pre(this.cur_img)].style.transition="";
        this.imgs[this.next(this.cur_img)].style.transition="";
        this.imgs[this.pre(this.cur_img)].style[this.cssVendor+'transition']="";
        this.imgs[this.next(this.cur_img)].style[this.cssVendor+'transition']="";
      }.bind(this),400);
    }else{
      this.imgs[this.next(this.cur_img)].style.transition="all 0.4s ease";
      this.imgs[this.next(this.cur_img)].style[this.cssVendor+'transition']="all 0.4s ease";

      this.showPic(this.cur_img);
      setTimeout(function(){
        this.imgs[this.next(this.cur_img)].style.transition="";
        this.imgs[this.next(this.cur_img)].style[this.cssVendor+'transition']="";
      }.bind(this),400);
    }
    this.ready_moved = true;
  }

}
//在样式表中设置好 .fadeIn 的透明度为0
ImageSwiper.prototype.fadeIn = function(e) {
  e.classList.add("fadeIn");
  console.log(this.cur_img);
  e.parentNode.style.left="-"+(this.cur_img-1)*100+"vw";
}

ImageSwiper.prototype.fadeOut = function(e) {
  Array.prototype.forEach.call(e, function(e) {
    e.className = "bg"
  })
}

ImageSwiper.prototype.showPic = function(cur_img) {


  var index = this.cur_img-1;
  var pre = this.pre(this.cur_img);
  var pre_pre = this.pre(pre+1);
  var next = this.next(this.cur_img);
  var next_next = this.next(next+1);
  // console.log("show pic");
  // console.log(index);
  // console.log(pre);
  // console.log(pre_pre);
  // console.log(next);
  

  this.imgs[index].className ="bg slide-in";
  this.imgs[pre].className = "bg slide-pre";
  this.imgs[next].className = "bg slide-next";
  this.imgs[pre_pre].className = "bg";
  this.imgs[next_next].className = "bg";


  if (document.getElementsByClassName("active")[0]) {
    var active = document.getElementsByClassName("active")[0];
    active.classList.remove("active")
  }
  console.log(this.cur_img)
  document.getElementById("dot_" + index).classList.add("active");

}
ImageSwiper.prototype.hidePics = function(e) {
  this.fadeOut(e)

}

export default ImageSwiper;