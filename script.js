$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 300,
  center: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      margin: 15,
      //   stagePadding: 20,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
      margin: 300,
      stagePadding: 5,
    },
    1200: {
      items: 4,
      stagePadding: 5,
    },
    1300: {
      items: 4,
      stagePadding: 5,
    },
    1400: {
      items: 4,
      margin: 200,
      // stagePadding: 0,
    },
    1500: {
      items: 4,
      margin: 40,
      stagePadding: 5,
    },
    1600: {
      items: 5,
      margin: 300,
      stagePadding: 5,
    },
    1700: {
      items: 5,
      margin: 200,
      stagePadding: 5,
    },
  },
});

$(document).ready(function () {
  var t = false;
  $(".navbar-toggler").click(function () {
    if (t) {
      $(this).html('<img src="media/menu-hamburger.svg" alt="">');
      t = false;
    } else {
      $(this).html('<img src="media/cross-small.svg" alt="">');
      t = true;
    }
  });

  $(".tablesM").hide();
  $(".tablesM.active").show();
  $(".mnts").click(function () {
    var t = $(this).attr("data");
    $(".mnts").removeClass("active");
    $(this).addClass("active");
    $(".tablesM").each(function (index, el) {
      console.log(el);
      if ($(el).attr("id") == t) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
  $(".servD").click(function () {
    $(".servM").toggle();
    $(this).toggleClass("active");
  });
  $(".carD").click(function () {
    $(".carM").toggle();

    $(this).toggleClass("active");
  });
  $(".gbpD").click(function () {
    $(".gbpM").toggle();
    $(this).toggleClass("active");
  });

  $(".navbar-toggler").click(function () {
    $(".carM").hide();
  });

  var num = 100; //number of pixels before modifying styles

  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > num) {
      $(".hea").addClass("bac");
    } else {
      $(".hea").removeClass("bac");
    }
  });
});
