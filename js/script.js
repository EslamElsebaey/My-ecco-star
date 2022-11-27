// main Swiper 
const mainSwiper = new Swiper('.mainBanner .main-swiper', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});



// swiper 1  shop by category
const swiper1 = new Swiper('.category .swiper1', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ' .category  .swiper-button-next ',
    prevEl: '.category .swiper-button-prev',
  },
  pagination: {
    el: '.category .swiper-pagination',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween:20,
    },
    400: {
      slidesPerView: 3,
      spaceBetween:15,
    },
    650: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView:4,
    },
    1300: {
      slidesPerView:6,
    },
  },
});

// swiper 2  bestseller

const swiper2 = new Swiper(' .bestseller .swiper2', {
  loop: true,
  autoplay: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swipertwo ',
    prevEl: '.swipertwo',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1100: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// swiper 3 top deals

const swiper3 = new Swiper(' .topdeals .swiper3', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.topdeals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ' .topdeals .swiperthree ',
    prevEl: '.topdeals .swiperthree',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1100: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
// swiper 4 new arrivals

const swiper4 = new Swiper(' .newArrivals .swiper4', {
  loop: true,
  autoplay : true , 
  
  pagination: {
    el: '.newArrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ' .newArrivals .swiperfour ',
    prevEl: '.newArrivals .swiperfour',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1100: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


// swiper 5 shop by brands
const swiper5 = new Swiper('.shopByBrand .swiper5', {
  loop: true,
  autoplay : true ,
  pagination: {
    el: '.shopByBrand .swiper-pagination',
    clickable: true,
  },
 
  navigation: {
    nextEl: '.swiperfive ',
    prevEl: '.swiperfive',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 15
    } , 
    1100: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});



let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 


closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
})


openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
})



// to top

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})


$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, '1000');
}) 


$(".li-drop").click(function(){
  $(this).children().next().slideToggle(500);
})



if(window.innerWidth < 768){
  $(".col-lg-2 .list .ancor").click(function(e){
    e.preventDefault();
  $(this).next().slideToggle(500);
  $(this).toggleClass("test");
  })
}










