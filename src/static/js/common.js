import IMask from 'imask';
// import Swiper JS
import Swiper, { Navigation, Autoplay } from 'swiper';
Swiper.use(Navigation)
Swiper.use(Autoplay)
// import Swiper styles
const headerMobileButton = document.querySelector("#top-menu-mobile-btn")
const headerMobileMenuContainer = document.querySelector("#top-menu-mobile-container")

headerMobileButton.addEventListener("click", () => {
    headerMobileMenuContainer.classList.toggle("top-menu__mobile_visible")
})
const requestCallInput = document.querySelector("#request_call_input")

const requestCallInput2 = document.querySelector("#request_call_input_main")
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};
const mask = IMask(requestCallInput, maskOptions);
const mask2 = IMask(requestCallInput2, maskOptions)
const swiperCategories = new Swiper('#swiper-categories', {
  slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    watchOverflow: true,
    observer: true, 
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
      delay: 5000,
    },
    
    breakpoints: {
      1051: {
        slidesPerView: 4,

      },
      835: {
        slidesPerView: 3,
      },
      574: {
        slidesPerView: 2,

      },
      0: {
        slidesPerView: 1
      }
      
    }
  });

 const swiperAdvantages = new Swiper('#swiper-advantages', {
    slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      watchOverflow: true,
      observer: true, 
      observeParents: true,
      observeSlideChildren: true,
      autoplay: {
        delay: 5000,
      },
      
      breakpoints: {
        1224: {
          slidesPerView: 4,
          spaceBetween: 92,
        },
        1049: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        935: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        658: {
          slidesPerView: 2
        },
        0: {
          slidesPerView: 1
        }
        
      }
    });

const swiperReviews = new Swiper('#swiper-reviews', {
      slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        watchOverflow: true,
        observer: true, 
        observeParents: true,
        observeSlideChildren: true,
        autoplay: {
          delay: 5000,
        },
        loop:true,
       
        breakpoints: {
          1224: {
            slidesPerView: 5,
          },
          1073: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          735: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          658: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 1
            
          }
          
        }
      });



const animeNumbersCont = document.querySelector('#animated-numbers');

function callbackFunc(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return 
  
  const numbers = animeNumbersCont.querySelectorAll(".counters__number")
  for(let element of numbers) {
    const number = element.getAttribute('number')
    element.setAttribute('number', -1)
    for(let i = 0; i <= number; i++) {
      
      setTimeout(() => {
        element.innerText = i
      }, i * 1000/number)
    }
  }
});
}

let options = {
  rootMargin: '0px',
  threshold: 1.0
};

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(animeNumbersCont);



const swiperBrands = new Swiper('#swiper-brands', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    watchOverflow: true,
    observer: true, 
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
      delay: 5000,
    },
    loop:true,
   
    breakpoints: {
      1224: {
        slidesPerView: 7,
      },
      1073: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
      735: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      658: {
        slidesPerView: 3
      },
      370: {
        slidesPerView: 2
        
      },
      0: {
        slidesPerView: 1
        
      }
      
    }
  });

  
const swiperSale = new Swiper('#swiper-sale', {
  slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    watchOverflow: true,
    observer: true, 
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
      delay: 10000,
    },
    loop:true,
  });

  

const yandexMap = document.querySelector('#yandex-map');

function yandexMapcallbackFunc(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return 
    console.log(entries)
    const src = "https://yandex.ru/map-widget/v1/?um=constructor%3A383a8f54f5efad17de7faffda3e262e14f706f73bff314899239a7a17a22d3bf&amp;source=constructor"
    if(yandexMap.src !== src) {
      yandexMap.src = src
    }
    
  
});
}

let yandexMapoptions = {
  rootMargin: '200px',
  threshold: 0.2
};

let yandexMapobserver = new IntersectionObserver(yandexMapcallbackFunc, yandexMapoptions);


yandexMapobserver.observe(yandexMap);