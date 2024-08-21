// land page Swiper 
var swiper = new Swiper(".slide-swp ", {
  pagination: {
  el: ".swiper-pagination",
  dynamicBullets: true,
  clickable:true,
},
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable:true,
  },
  autoplay:{
    delay:2500,
  },
  loop:true,
});
  
  // Swiper  slide have no image
  var swiper = new Swiper(".sale_sec", {
  
      slidesPerView:4,
  
      spaceBetween:4,
  
      autoplay:{
        delay:3000,
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      loop:true,
    });
  


  // Swiper slide product
  var swiper = new Swiper(".product_swip", {

    slidesPerView:3,

    spaceBetween:30,

    autoplay:{
      delay:3000,
    },
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },

    loop:true,
  });