$(document).ready(function(){
    $("#i2").click(function(){
        $(".block").addClass("aa")
        $("header").addClass("bb")
        $(".block").css("transition-duration","1s")
        $("header").css("transition-duration","1s")
    })

    $("#i3").click(function(){
        $(".block").removeClass("aa")
        $("header").removeClass("bb")
        $(".block").css("transition-duration","1s")
        $("header").css("transition-duration","1s")
      })

    $("#a1").mouseenter(function(){
        $(".d1").css("display","block")
    })
    
    $("#a1").mouseleave(function(){
        $(".d1").css("display","none")
    })
    
    $("#a2").mouseenter(function(){
        $(".d2").css("display","block")
    })
    
    $("#a2").mouseleave(function(){
        $(".d2").css("display","none")
    })

    $("#a3").mouseenter(function(){
        $(".d3").css("display","block")
    })
    
    $("#a3").mouseleave(function(){
        $(".d3").css("display","none")
    })

    $("#a4").mouseenter(function(){
        $(".d4").css("display","block")
    })
    
    $("#a4").mouseleave(function(){
        $(".d4").css("display","none")
    })
    $("#a5").mouseenter(function(){
        $(".d5").css("display","block")
    })
    
    $("#a5").mouseleave(function(){
        $(".d5").css("display","none")
    })
})

$(window).scroll(function()
{
    $('header').toggleClass('background',$(this).scrollTop()>100);
});

var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    autoplayspeed: 1000,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    navigation: {
      nextEl: ".s31",
      prevEl: ".s32",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination1",
    },
  });

  $(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });