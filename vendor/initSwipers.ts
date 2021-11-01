import { Swiper, SwiperOptions } from "swiper";

const defaults = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 16,
};

interface Preset extends SwiperOptions {
  className: string;
}
function InitSwipers(presetsFn: Preset[]) {
  const getOptionsForSwiper = (swiperEl: Element) => {
    let options: SwiperOptions = {};
    const classList = swiperEl.classList;

    let presets = presetsFn.map((preset) => {
      Object.keys(preset).forEach((key) => {
        let value = preset[key];
        if (value === true && defaults[key]) {
          preset[key] = defaults[key];
        }
      });

      return preset;
    });

    classList.forEach((clss) => {
      const preset = presets.find((preset) => preset.className === clss);
      if (preset) {
        options = preset;
        return;
      }
    });

    options.slideToClickedSlide = true;
    return options;
  };

  const swipers = document.querySelectorAll(".swiper");
  swipers.forEach((swiper: Element) => {
    const options = getOptionsForSwiper(swiper);

    // @ts-ignore
    const instance = new Swiper(swiper, options);
  });
}

export default InitSwipers;
