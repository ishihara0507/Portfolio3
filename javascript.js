"use strict";

{
  //自作---------------------------------------------------
  /* アコーディオン */
    const dts = document.querySelectorAll(".bl-accordion dt");

    dts.forEach(dt => {
      dt.addEventListener("click", () => {
        dt.parentNode.classList.toggle("js-appear");
      })
    })
  
  /* 同意ボタン */
    const checkBox = document.getElementById("agree");
    const sumbitBtn = document.querySelector(".js-submit");

    checkBox.addEventListener("click", () => {
      if(checkBox.checked === true){
        sumbitBtn.disabled = false; //押せるようにする
      }
      else {
        sumbitBtn.disabled = true; //押せないようにする
      }
    });

  /*ハンバーガーメニュー*/
    const humburgerBtn = document.querySelector(".bl-header_btn");
    const humburgerMenu = document.querySelector(".bl-header_humburger");
    const closes = document.querySelectorAll(".js-close");

    humburgerBtn.addEventListener("click", () => {
      humburgerBtn.classList.toggle("js-active");
      humburgerMenu.classList.toggle("js-active");
    });
    closes.forEach(element => {
        element.addEventListener("click", () => {
        humburgerBtn.classList.remove("js-active");
        humburgerMenu.classList.remove("js-active");
      });
    });
    

  //ライブラリ---------------------------------------------
  /* Swiper */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      spaceBetween: 56,
      centeredSlides: true,
      breakpoints: {
        0: { //0px以上のとき
          slidesPerView: 1.4,
          spaceBetween: 15,
        },
        500: { //500px以上のとき
          slidesPerView: 1.4,
          spaceBetween: 25,
        },
        800: { //800px以上のとき
          slidesPerView: 3.4,
          spaceBetween: 25,
        },
        1240: { //1260px以上のとき
          slidesPerView: 3.4,
          spaceBetween: 56,
        }
      },
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

  /* AOS */
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 500,
      easing: 'ease-out',
      anchorPlacement:'top-bottom',
      once:true,
    });
}