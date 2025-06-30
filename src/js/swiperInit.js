import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initSwiper() {
  new Swiper('.swiper', {
    modules: [EffectFade, Navigation, Pagination],
    effect: "fade",
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
