Адаптація контентних зображень під ретіна екрани (розмір фіксований)
<img
  class="team-avatar"
  srcset="./images/team/x/img1_lg-@1x.jpg 1x, ./images/team/x/img1_lg-@2x.jpg 2x"
  src="./images/team/x/img1_lg-@1x.jpg"
  alt="John Smith"
  width="370"
  height="346"
  loading="lazy"
/>
Адаптація контентних зображень під ретіна екрани (розмір залежить від типу пристрою)
<img
  class="team-avatar"
  srcset="
    ./images/team/img1-370.jpg 370w,
    ./images/team/img1-418.jpg 418w,
    ./images/team/img1-450.jpg 450w,
    ./images/team/img1-740.jpg 740w,
    ./images/team/img1-836.jpg 836w,
    ./images/team/img1-900.jpg 900w
  "
  sizes="(min-width: 1200px) 370px, (min-width: 768px) 450px, (min-width: 480px) 418px, 100vw"
  src="./images/team/img1-418.jpg"
  alt="John Smith"
  loading="lazy"
/>
Адаптація контентних зображень під ретіна екрани (залежно від формату і кадрування зображення)
<picture>
  <!-- Desktop screen -->
  <source
    media="(min-width: 1200px)"
    srcset="./images/gallery/img-1_lg.webp 1x, ./images/gallery/img-1_lg@2x.webp 2x"
    type="image/webp"
  />
  <source
    media="(min-width: 1200px)"
    srcset="./images/gallery/img-1_lg.jpg 1x, ./images/gallery/img-1_lg@2x.jpg 2x"
    type="image/jpg"
  />
  <!-- Tablet screen -->
  <source
    media="(min-width: 768px)"
    srcset="./images/gallery/img-1_md.webp 1x, ./images/gallery/img-1_md@2x.webp 2x"
    type="image/webp"
  />
  <source
    media="(min-width: 768px)"
    srcset="./images/gallery/img-1_md.jpg 1x, ./images/gallery/img-1_md@2x.jpg 2x"
    type="image/jpg"
  />
  <!-- Mobile screen -->
  <source
    media="(max-width: 767px)"
    srcset="./images/gallery/img-1_sm.webp 1x, ./images/gallery/img-1_sm@2x.webp 2x"
    type="image/webp"
  />
  <source
    media="(max-width: 767px)"
    srcset="./images/gallery/img-1_sm.jpg 1x, ./images/gallery/img-1_sm@2x.jpg 2x"
    type="image/jpg"
  />
  <img
    class="card-img"
    src="./images/gallery/img-1_sm.jpg"
    alt="Ноутбук"
    width="450"
    height="294"
    loading="lazy"
  />
</picture>
Адаптація фонових зображень під ретіна екрани
background-repeat: no-repeat;
background-position: center;
background-size: cover;

// Mobile screen
  background-image: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
    url("../images/price/bg-img_sm-@1x.jpg");
  // retina mobile screen
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
      url("../images/price/bg-img_sm-@2x.jpg");
  }

  // Tablet screen
  @media screen and (min-width: 481px) {
    background-image: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
      url("../images/price/bg-img_md-@1x.jpg");
    // retina tablet screen
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
        url("../images/price/bg-img_md-@2x.jpg");
    }
  }

  // Desktop screen
  @media screen and (min-width: 769px) {
    background-image: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
      url("../images/price/bg-img_lg-@1x.jpg");
    // retina desktop screen
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
        url("../images/price/bg-img_lg-@2x.jpg");
    }
  }

