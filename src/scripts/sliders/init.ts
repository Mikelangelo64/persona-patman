import makeSlider from './sliderHandler';
import Swiper from 'swiper';

interface IInitializedSlider {
  name: string;
  slider: Swiper | undefined;
}

const sliderBannerInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.banner'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'banner',
      renderBullets: (index, className) => {
        return `
          <button class="${className}">
            <svg class="pagination-star" width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 1.61804L16.6677 9.82827L16.7799 10.1738H17.1432H25.776L18.7919 15.248L18.498 15.4615L18.6103 15.807L21.2779 24.0172L14.2939 18.943L14 18.7295L13.7061 18.943L6.72206 24.0172L9.38973 15.807L9.50199 15.4615L9.20809 15.248L2.22405 10.1738H10.8568H11.2201L11.3323 9.82827L14 1.61804Z" fill="white" stroke="#1387F1"/>
            </svg>
          </button>
        `;
      },
      config: {
        effect: 'fade',
        allowTouchMove: false,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        }
      }
    });

    if (slider) {
      sliders.push({ name: `banner-${sliderIndex}`, slider });
    }
  });
};

const sliderInfoInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.about-info'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'about-info',
      renderBullets: (index, className) => {
        return `
          <button class="${className}">
            <svg class="pagination-star" width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 1.61804L16.6677 9.82827L16.7799 10.1738H17.1432H25.776L18.7919 15.248L18.498 15.4615L18.6103 15.807L21.2779 24.0172L14.2939 18.943L14 18.7295L13.7061 18.943L6.72206 24.0172L9.38973 15.807L9.50199 15.4615L9.20809 15.248L2.22405 10.1738H10.8568H11.2201L11.3323 9.82827L14 1.61804Z" fill="transparent" stroke="#1387F1"/>
            </svg>
          </button>
        `;
      },
      config: {
        effect: 'fade',
        allowTouchMove: false,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        }
      }
    });

    if (slider) {
      sliders.push({ name: `about-info-${sliderIndex}`, slider });
    }
  });
};

const slidersInit = () => {
  const sliders: Array<IInitializedSlider> = [];

  sliderBannerInit(sliders);
  sliderInfoInit(sliders);

  return sliders;
};

export default slidersInit;
