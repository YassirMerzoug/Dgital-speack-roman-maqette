$(document).ready(function () {
  $(".header-truc").css({
    animation: "rotate 5.5s linear infinite",
  });
  $.keyframe.define([
    {
      name: "rotate",
      to: {
        transform: "rotateY(360deg)",
      },
    },
  ]);

  $(".header-rose").css({
    animation: "rotate1 15s linear infinite",
  });
  $.keyframe.define([
    {
      name: "rotate1",
      to: {
        transform: "rotate(360deg)",
      },
    },
  ]);

  $(".service-rose").css({
    animation: "rotate2 15s linear infinite",
  });
  $.keyframe.define([
    {
      name: "rotate2",
      to: {
        transform: "rotate(360deg)",
      },
    },
  ]);

  $(".owner-rose").css({
    animation: "rotate3 15s linear infinite",
  });
  $.keyframe.define([
    {
      name: "rotate3",
      to: {
        transform: "rotate(360deg)",
      },
    },
  ]);

  $(".my-services").waypoint(function () {
    $(".service-box.box1").animate({ left: "0" }, 2000);
    $(".service-box.box2").animate({ top: "0" }, 2000);
    $(".service-box.box3").animate({ right: "0" }, 2000);
  });

  $(".my-owner").waypoint(function () {
    $(".owner-img ").animate({ left: "75px" }, 4000);
    // $(".service-box.box2").animate({ top: "0" }, 2000);
    $(".owner-infos").animate({ right: "0" }, 2000);
  });

  $(".box").mouseover(function () {
    $(this).css({
      transform: "scale(1.2)",
      transition: "all 1s ease-in-out",
    });
  });

  $(".box").mouseout(function () {
    $(this).css({
      transform: "scale(1)",
      transition: "all 1s ease-in-out",
    });
  });

  $(".consectetur").waypoint(function () {
    $(".cons-img").animate({ top: "0%" }, 1000);
    $(".roman-cover").animate({ right: "20%" }, 1000);
  });

  //   $(".galery-rose").css({
  //     animation: "rotate3 15s linear infinite",
  //   });
  //   $.keyframe.define([
  //     {
  //       name: "rotate3",
  //       to: {
  //         transform: "rotate(360deg)",
  //       },
  //     },
  //   ]);
});
