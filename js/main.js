$(function () {
  $('.reviews-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/Vector-1.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/Vector.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
       
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.area-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/Vector-1.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/Vector.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.package-item').on('mouseenter', function () {
    var someDiv = $('.package-item');
    someDiv.removeClass('active');
    $(this).addClass('active');
  }
  );
  $('.package-item').on('mouseleave', function () {
    $('.package-item').removeClass('active');
    $('.package-item.two').addClass('active');
  }
  );
  $('.burger-menu').on('click', function () {
    $('.menu-list2').slideToggle('active');
  }
  );
});