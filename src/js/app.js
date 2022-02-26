import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from "swiper";
// import "boxicons";
// import { DatePicker } from 'antd';

// ReactDOM.render(<DatePicker />, mountNode);
$(document).ready(function () {
  $("input:checkbox").removeAttr("checked");
  let number = 0;
  $(".form-btn__next").click(function (e) {
    e.preventDefault();
    number++;
    if ($(".number-1").hasClass("active") && number == 1) {
      $(".number-1").addClass("active", 500);
      $(".number-2").addClass("active", 500);
      $(".form-progress__line").css("width", "33%");
      $(".form-btn__back").addClass("active", 500);
      $(".form-menu__item.number-1").removeClass("active");
      $(".form-menu__item.number-3").removeClass("active");
      $(".form-menu__item.number-4").removeClass("active");
      $(".form-menu__item.number-2").addClass("active");
    } else if (
      $(".number-1").hasClass("active") &&
      $(".number-2").hasClass("active") &&
      number == 2
    ) {
      $(".number-1").addClass("active", 500);
      $(".number-2").addClass("active", 500);
      $(".number-3").addClass("active", 500);
      $(".form-progress__line").css("width", "66%");
      $(".form-menu__item.number-1").removeClass("active");
      $(".form-menu__item.number-2").removeClass("active");
      $(".form-menu__item.number-4").removeClass("active");
      $(".form-menu__item.number-3").addClass("active");
    } else if (
      $(".number-1").hasClass("active") &&
      $(".number-2").hasClass("active") &&
      $(".number-3").hasClass("active") &&
      number == 3
    ) {
      $(".number-1").addClass("active", 500);
      $(".number-2").addClass("active", 500);
      $(".number-3").addClass("active", 500);
      $(".number-4").addClass("active", 500);
      $(".form-progress__line").css("width", "100%");
      $(".form-btn__submit").addClass("active", 500);
      $(".form-btn__next").removeClass("active", 500);
      $(".form-menu__item.number-1").removeClass("active");
      $(".form-menu__item.number-2").removeClass("active");
      $(".form-menu__item.number-3").removeClass("active");
      $(".form-menu__item.number-4").addClass("active");
    } else if (
      $(".number-1").hasClass("active") &&
      $(".number-2").hasClass("active") &&
      $(".number-3").hasClass("active") &&
      $(".number-4").hasClass("active") &&
      number == 4
    ) {
      $(".number-1", ".number-2", ".number-3", ".number-4").addClass(
        "active",
        500
      );
      $(".form-progress__line").css("width", "100%");
    } else {
      number = 0;
      $(".form-btn__next").removeClass("active", 500);
    }
  });
  $(".form-btn__back").click(function (e) {
    e.preventDefault();
    number--;
    if ($(".number-4").hasClass("active")) {
      $(".number-4").removeClass("active", 500);
      $(".number-3").addClass("active", 500);
      $(".form-progress__line").css("width", "66%");
      $(".form-btn__next").addClass("active", 500);
      $(".form-btn__submit").removeClass("active", 500);
      $(".form-menu__item.number-4").removeClass("active");
      $(".form-menu__item.number-2").removeClass("active");
      $(".form-menu__item.number-1").removeClass("active");
      $(".form-menu__item.number-3").addClass("active");
    } else if ($(".number-3").hasClass("active")) {
      $(".number-3").removeClass("active", 500);
      $(".number-2").addClass("active", 500);
      $(".form-progress__line").css("width", "33%");
      $(".form-menu__item.number-3").removeClass("active");
      $(".form-menu__item.number-1").removeClass("active");
      $(".form-menu__item.number-4").removeClass("active");
      $(".form-menu__item.number-2").addClass("active");
    } else if ($(".number-2").hasClass("active")) {
      $(".number-2").removeClass("active", 500);
      $(".number-1").addClass("active", 500);
      $(".form-progress__line").css("width", "0%");
      $(".form-btn__back").removeClass("active", 500);
      $(".form-menu__item.number-2").removeClass("active");
      $(".form-menu__item.number-4").removeClass("active");
      $(".form-menu__item.number-3").removeClass("active");
      $(".form-menu__item.number-1").addClass("active");
    } else {
      $(".number-4").remove("active", 500);
      $(".form-progress__line").css("width", "0%");
      number = 0;
    }
  });

  $(".form-btn__submit").click(function (e) {
    alert("Ваша заявка отправлена!");
    location.reload();
  });
});
