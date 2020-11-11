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
const swiperReviews = new Swiper('#swiper-reviews', {
    slidesPerView: 4,
      navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
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
const swiperBrands = new Swiper('#swiper-brands', {
    navigation: {
      nextEl: '.brands__swiper-button-next',
      prevEl: '.brands__swiper-button-prev',
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
  const swiperTipikal = new Swiper('#swiper-tipikal', {
    navigation: {
      nextEl: '.tipikal__swiper-button-next',
      prevEl: '.tipikal__swiper-button-prev',
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

const calculator = document.querySelector("#price-calc")

const calculatorSelectButton = calculator.querySelector(".price__select-button")
const calculatorItemsContainer = calculator.querySelector(".price__select-items")
calculatorSelectButton.addEventListener('click', () => {
  calculatorSelectButton.classList.toggle("price__select-button_active")
  calculatorItemsContainer.classList.toggle("price__select-items_visible")
})

const calculatorItems = calculator.querySelectorAll(".price__select-item")
for(let calculatorItem of calculatorItems) {
  calculatorItem.addEventListener('click', () => {
    calculatorSelectButton.classList.toggle("price__select-button_active")
    calculatorItemsContainer.classList.toggle("price__select-items_visible")
    const selected = calculatorItemsContainer.querySelector(".price__select-item_selected")
    selected.classList.toggle("price__select-item_selected")
    calculatorItem.classList.toggle("price__select-item_selected")
    const textArea = calculator.querySelector(".price__textarea")
    const buttonText  = calculatorSelectButton.querySelector("span")
    const priceBlocks = calculator.querySelectorAll(".price__prices-block p")
    const priceMat = priceBlocks[0]
    const priceWork = priceBlocks[1]
    const priceSum = priceBlocks[2]
    buttonText.innerText = calculatorItem.textContent
    const [ price, work, reason ] = [calculatorItem.getAttribute("price"), calculatorItem.getAttribute("work"), calculatorItem.getAttribute("reason")];
    priceMat.innerText = price + "руб."
    priceWork.innerText = work + "руб."
    priceSum.innerText = Number(price) + Number(work) + "руб."
    textArea.innerText = reason

  })
}