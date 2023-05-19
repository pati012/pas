"use strict";


//burger menu

 const burger = document.querySelector('#burger');
  const bodyMenuBurger = document.querySelector('.header__body');
  burger.addEventListener('click', function (e){
   burger.classList.toggle('openBurger');
    bodyMenuBurger.classList.toggle('OpenBodyMenu');
     if(burger.classList.contains('openBurger')){
       document.body.style.overflow = 'hidden';
     }
     else{
      document.body.style.overflow = 'visible';
     }
  });


 //ленивая подгрузка

  const allImage = document.querySelectorAll('img[data-src]');
   const clientHeight = document.documentElement.clientHeight;
  
   let imageArray = [];
    if(allImage.length > 0){
      allImage.forEach((item) => {
        imageArray.push(item.getBoundingClientRect().top + pageYOffset);
      });
      lazyLoading();
    }

   window.addEventListener('scroll', function (e){
     if(document.querySelectorAll('img[data-src]').length > 0){
       lazyLoading();
     }
   })

    function lazyLoading(){
      let arrayImageIndex = [];
       imageArray.forEach((item, index) => {
         if(pageYOffset > item - clientHeight){
           arrayImageIndex.push(index);
         }
         arrayImageIndex.forEach(item => {
           if(allImage[item].dataset.src){
             allImage[item].src = allImage[item].dataset.src;
            allImage[item].removeAttribute('data-src');
           }
           delete arrayImageIndex[item];
         });
       })
    }

    //смена color in header

    //  const element = document.querySelectorAll('.section-colors');
    //   const header = document.querySelector('header');
    //  const menuHeader = document.querySelectorAll('.header a');
    //  const imageAttributeSrc = document.querySelectorAll('svg.colors');
    //   let arrayItems = [];
    //    for(let item = 0; item < menuHeader.length; item++){
    //     arrayItems.push(menuHeader[item]);
    //    } 
    //   if(element.length > 0){
    //     for(let item = 0; item < element.length; item++){
    //       const elements = element[item];
    //        const coordinate = elements.getBoundingClientRect().top + pageYOffset;
    //       window.addEventListener('scroll', function (e){
    //          if(pageYOffset >= coordinate && document.querySelectorAll('.section-colors').length > 0){
    //           header.style.color = '#fff';
    //           arrayItems[0].style.color = '#fff';
    //           arrayItems[1].style.color = '#fff';
    //           arrayItems[2].style.color = '#fff';
    //           arrayItems[3].style.color = '#fff';
    //           for(let item = 0; item < imageAttributeSrc.length; item++){
    //             const element = imageAttributeSrc[item];
    //              element.style.fill = '#fff';
    //           }
    //          }
    //          else{
    //           header.style.color = '';
    //           arrayItems[0].style.color = '';
    //           arrayItems[1].style.color = '';
    //           arrayItems[2].style.color = '';
    //           arrayItems[3].style.color = '';
    //           for(let item = 0; item < imageAttributeSrc.length; item++){
    //             const element = imageAttributeSrc[item];
    //              element.style.fill = '#000';
    //           }
    //          }
    //       })
    //     }
    //   }



       //swiper

       new Swiper('.swiper', {
         slidesPerView: 1,
         watchOverflow: true,
         spaceBetween: 30,
         conteredSlides: true,
         speed: 600,
         observer: true,
         observerSlideChildren: true,
         simulateTouch: true,
         navigation: {
          nextEl: '.swiper-button-next ',
          prevEl: '.swiper-button-prev',
          },      
          breakpoints:{    
            650: {
              slidesPerView: 2,
            }
          }
       });

       Fancybox.bind('[data-fancybox="gallery"]', {
       
      });

     

      