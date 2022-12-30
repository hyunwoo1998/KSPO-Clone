$(document).ready(function () {
  // 헤더
  $('.nav__itm').hover(() => {
    $('body').toggleClass('on');
  });

  // 햄버거 메뉴
  $(".menu-collapsed").click(function () {
    $(this).toggleClass("menu-expanded");
    $('body, .m-nav').toggleClass('active');
    if ($('body').hasClass('active')) {
      $('body').addClass('scroll--no');
      $('.m-nav__inner').addClass('scroll--yes');
    } else {
      $('body').removeClass('scroll--no');
      $('.m-nav__inner').removeClass('scroll--yes');
    }
  });

  /* 모바일 nav */
  (function ($) {

    var lnbUI = {
      click: function (target, speed) {
        var _self = this,
          $target = $(target);
        _self.speed = speed || 300;

        $target.on('click', 'a', function (e) {
          e.stopPropagation();
          var $this = $(this),
            $depthTarget = $this.next(),
            $siblings = $this.parent().siblings();

          $this.parent('li').find('ul li').removeClass('on');
          $siblings.removeClass('on');
          $siblings.find('ul').slideUp(250);

          if ($depthTarget.css('display') == 'none') {
            _self.activeOn($this);
            $depthTarget.slideDown(_self.speed);
          } else {
            $depthTarget.slideUp(_self.speed);
            _self.activeOff($this);
          }

        })

      },
      activeOff: function ($target) {
        $target.parent().removeClass('on');
      },
      activeOn: function ($target) {
        $target.parent().addClass('on');
      }
    };

    $(function () {
      lnbUI.click('.m-nav li', 300)
    });

  }(jQuery));

  // 배너 슬라이드
  var bnrSwiper = new Swiper(".bnr", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  $(".controls-bnr--stop").click(function () {
    bnrSwiper.autoplay.stop();
  });

  $(".controls-bnr--play").click(function () {
    bnrSwiper.autoplay.start();
  });

  // 스크롤 다운
  $(".scroll_down").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
  });

  // 새소식 슬라이드
  var newSwiper = new Swiper(".swiper-new", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".new-btn--next",
      prevEl: ".new-btn--prev",
    },
    observer: true,
    observeParents: true,
  });

  $('.tabs__itm').find('a').click(() => {
    $('.tabs__itm').parent().find('li').removeClass('active').find('a').parent().addClass('active');
  });

  $(".content__new .swiper-new").hide();
  $(".content__new .swiper-new.active").show();
  $(".content__new .more-btn").hide();
  $(".content__new .more-btn.active").show();

  $(".content__new .tabs__itm").click(function () {
    let idx = $(this).index();
    $(".content__new .tabs__itm").removeClass("active").eq(idx).addClass("active");
    $(".swiper-new").hide().eq(idx).show();
    $(".content__new .more-btn").hide().eq(idx).show();
  });

  // 뉴스룸 슬라이드
  var roomSwiper = new Swiper(".swiper-room", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".room-btn--next",
      prevEl: ".room-btn--prev",
    },
    observer: true,
    observeParents: true,
  });

  $(".content__room .swiper-room").hide();
  $(".content__room .swiper-room.active").show();
  $(".content__room .more-btn").hide();
  $(".content__room .more-btn.active").show();

  $(".content__room .tabs__itm2").click(function () {
    let idx = $(this).index();
    $(".content__room .tabs__itm2").removeClass("active").eq(idx).addClass("active");
    $(".swiper-room").hide().eq(idx).show();
    $(".content__room .more-btn").hide().eq(idx).show();
  });

  // 퀵메뉴 슬라이드
  var quickSwiper = new Swiper(".swiper-quick", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".quick-btn--next",
      prevEl: ".quick-btn--prev",
    },
  });

  // 서비스 메뉴
  var serviceMenu = new Swiper(".service-menu", {
    direction: "vertical",
    slidesPerView: 7,
    freeMode: true,
  });

  var serviceContent = new Swiper(".service-content", {
    loop: true,
    thumbs: {
      swiper: serviceMenu,
    },
  });

  // SNS 슬라이드
  var snsSwiper = new Swiper(".swiper-sns", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".sns-btn--next",
      prevEl: ".sns-btn--prev",
    },
    observer: true,
    observeParents: true,
  });

  $(".content__notice .swiper-sns").hide();
  $(".content__notice .swiper-sns.active").show();

  $(".content__notice .tabs__itm3").click(function () {
    let idx = $(this).index();
    $(".content__notice .tabs__itm3").removeClass("active");
    $(".content__notice .tabs__itm3").eq(idx).addClass("active");
    $(".swiper-sns").hide();
    $(".swiper-sns").eq(idx).show();
  });

  // 알림 슬라이드
  var notifySwiper = new Swiper(".swiper-notify", {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".notify-btn--next",
      prevEl: ".notify-btn--prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  });

  $(".controls-notify").click(function () {
    if ($(this).children().hasClass("fa-pause")) {
      notifySwiper.autoplay.stop();
      $(this).children().addClass("fa-play").removeClass("fa-pause");
    } else {
      notifySwiper.autoplay.start();
      $(this).children().addClass("fa-pause").removeClass("fa-play");
    }
  });

  // 협력 기관 슬라이드
  var partnerSwiper = new Swiper(".swiper-partner", {
    slidesPerView: 5,
    loop: true,
    navigation: {
      nextEl: ".partner-btn--next",
      prevEl: ".partner-btn--prev",
    },
    observer: true,
    observeParents: true,
  });

  $(".controls-partner").click(function () {
    if ($(this).children().hasClass("fa-pause")) {
      $(this).children().addClass("fa-play").removeClass("fa-pause");
    } else {
      $(this).children().addClass("fa-pause").removeClass("fa-play");
    }
  });

  $(".sites__itm").click(function () {
    $(".sites__itm").removeClass("active");
    $(this).addClass("active");
  });

  // 탑 스크롤
  $(window).scroll(function () {
    if ($(this).scrollTop() > 920) {
      $('.top-btn').stop().fadeIn();
    } else {
      $('.top-btn').stop().fadeOut();
    }
  });

  $(".top-btn").click(function () {
    $('html,body').animate({ scrollTop: 0 }, 200);
    return false;
  });

});