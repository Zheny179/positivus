import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'

class Slider {
  constructor() {
    this.init()
  }

  init() {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,

      pagination: {
        el: '.slider__pagination',
        bulletActiveClass: 'slider__pagination-bullet--active',
        bulletClass: 'slider__pagination-bullet',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          const svgIcon = `
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
            </svg>
          `

          return `
                  <span 
                    class="${ className }" 
                    aria-label="Go to slide ${ index + 1 }"
                  >
                    ${ svgIcon }
                  </span>
          `
        }
      },

      navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
        addIcons: false,
        disabledClass: 'slider__disabled',
      },

      breakpoints: {
        1024: {
          slidesPerView: 1,
        },
        1025: {
          slidesPerView: 1.8,
        }
      }
    })
  }
}

export default Slider
