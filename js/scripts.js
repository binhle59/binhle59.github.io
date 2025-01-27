$(document).ready(function () {
  /***************** Waypoints ******************/

  $(".wp1").waypoint(
    function () {
      $(".wp1").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    },
  );
  $(".wp2").waypoint(
    function () {
      $(".wp2").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    },
  );
  $(".wp3").waypoint(
    function () {
      $(".wp3").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    },
  );
  $(".wp4").waypoint(
    function () {
      $(".wp4").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    },
  );
  $(".wp5").waypoint(
    function () {
      $(".wp5").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    },
  );
  $(".wp6").waypoint(
    function () {
      $(".wp6").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    },
  );
  $(".wp7").waypoint(
    function () {
      $(".wp7").addClass("animated fadeInUp");
    },
    {
      offset: "75%",
    },
  );
  $(".wp8").waypoint(
    function () {
      $(".wp8").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    },
  );
  $(".wp9").waypoint(
    function () {
      $(".wp9").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    },
  );

  /***************** Initiate Flexslider ******************/
  $(".flexslider").flexslider({
    animation: "slide",
  });

  /***************** Initiate Fancybox ******************/

  $(".single_image").fancybox({
    padding: 4,
  });

  $(".fancybox").fancybox({
    padding: 4,
    width: 1000,
    height: 800,
  });

  /***************** Tooltips ******************/
  $('[data-toggle="tooltip"]').tooltip();

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $(".nav-toggle").click(function () {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("open");
    e.preventDefault();
  });
  /* When user clicks a link */
  $(".header-nav li a").click(function () {
    $(".nav-toggle").toggleClass("active");
    $(".header-nav").toggleClass("open");
  });

  /***************** Header BG Scroll ******************/

  $(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $("section.navigation").addClass("fixed");
        $("header").css({
          "border-bottom": "none",
          padding: "35px 0",
        });
        $("header .member-actions").css({
          top: "26px",
        });
        $("header .navicon").css({
          top: "34px",
        });
      } else {
        $("section.navigation").removeClass("fixed");
        $("header").css({
          "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
          padding: "50px 0",
        });
        $("header .member-actions").css({
          top: "41px",
        });
        $("header .navicon").css({
          top: "48px",
        });
      }
    });
  });
  /***************** Smooth Scrolling ******************/

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 90,
            },
            2000,
          );
          return false;
        }
      }
    });
  });

  /********************** Social Share buttons ***********************/
  var share_bar = document.getElementsByClassName("share-bar");
  var po = document.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.src = "https://apis.google.com/js/platform.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);

  for (var i = 0; i < share_bar.length; i++) {
    var html =
      '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
      'src="https://platform.twitter.com/widgets/tweet_button.html?url=' +
      encodeURIComponent(window.location) +
      "&amp;text=" +
      encodeURIComponent(document.title) +
      '&amp;hashtags=binhduong&amp;count=horizontal"' +
      'style="width:105px; height:21px;">' +
      "</iframe>" +
      '<iframe src="//www.facebook.com/plugins/like.php?href=' +
      encodeURIComponent(window.location) +
      '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>';

    share_bar[i].innerHTML = html;
    share_bar[i].style.display = "inline-block";
  }

  /********************** Embed youtube video *********************/
  $(".player").YTPlayer();

  /********************** Toggle Map Content **********************/
  $("#btn-show-map").click(function () {
    $("#map-content").toggleClass("toggle-map-content");
    $("#btn-show-content").toggleClass("toggle-map-content");
  });
  $("#btn-show-content").click(function () {
    $("#map-content").toggleClass("toggle-map-content");
    $("#btn-show-content").toggleClass("toggle-map-content");
  });

  /********************** Add to Calendar **********************/
  //=========RSVP and Add Calendar =================
  $("#rsvp-form").on("submit", function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    var addLocation;
    var startDate;
    var endDate;

    $("#alert-wrapper").html(
      alert_markup(
        "info",
        "<strong>Đợi tí!</strong> Tụi mình đang lưu thông tin.",
      ),
    );

    //============= Add Calendar ======
    if ($("#invite_location :selected").val() == "DaLat") {
      addLocation = "Garden Palace, 1A Cô Giang, Da Lat, Lam Dong";
      startDate = new Date("Apr 10, 2022 07:00");
      endDate = new Date("Apr 10, 2022 23:00");
    } else if ($("#invite_location :selected").val() == "QuangNam") {
      addLocation = "Tịnh Đông Tây, Đại Lãnh, Đại Lộc, Quảng Nam";
      startDate = new Date("May 08, 2022 07:00");
      endDate = new Date("May 08, 2022 23:00");
    } else {
      console.log("Somethings wrong!");
    }

    var r = createCalendar({
      options: { class: "", id: "" },
      data: {
        title: "BinhDuong's Wedding",
        start: startDate,
        end: endDate,
        address: addLocation,
        description:
          "We can't wait to see you on our big day. For any queries or issues, please contact Binh (+84932.512.535) or Duong (+84399272935)",
      },
    });

    if (MD5($("#invite_code").val()) !== "8174017745b8d9d01fc6e1fda260b9df") {
      $("#alert-wrapper").html(
        alert_markup(
          "danger",
          "<strong>Sorry!</strong> Bạn đã nhập sai mã rồi. Nhập lại mã 08052022 nhé!",
        ),
      );
    } else {
      $.post(
        "https://script.google.com/macros/s/AKfycbyqFBXh45xw1yDwKhcDqpWtXhToKQ8b6WA4ub3anwTZKCJf0pu4GnMfvGaPIIynhALt/exec",
        data,
      )
        .done(function (data) {
          console.log(data);
          if (data.result === "error") {
            $("#alert-wrapper").html(alert_markup("danger", data.message));
          } else {
            $("#alert-wrapper").html("");
            $("#rsvp-modal").modal("show");
            $("#add-to-cal").html(r);
          }
        })
        .fail(function (data) {
          console.log(data);
          $("#alert-wrapper").html(
            alert_markup(
              "danger",
              "<strong>Sorry!</strong> Ối dồi ôiiii !!! Sơ vờ bị lỗi rồi :(. ",
            ),
          );
        });
    }
  });
});
/********************** Extras **********************/

// Google map
// function initMap() {
//   var location = { lat: 11.947137294311238, lng: 108.45817435785845 };
//   var map = new google.maps.Map(document.getElementById("map-canvas"), {
//     zoom: 15,
//     center: location,
//     scrollwheel: false,
//   });

//   var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//   });
// }

// function initBBSRMap() {
//   var la_fiesta = { lat: 11.947137294311238, lng: 108.45817435785845 };
//   var map = new google.maps.Map(document.getElementById("map-canvas"), {
//     zoom: 15,
//     center: la_fiesta,
//     scrollwheel: false,
//   });

//   var marker = new google.maps.Marker({
//     position: la_fiesta,
//     map: map,
//   });
// }

// <script
//   async
//   defer
//   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAO-GN3z-6Sk512YOJRqud8v3UfL-9XpiI&callback=initMap"
// ></script>;

// alert_markup
function alert_markup(alert_type, msg) {
  return (
    '<div class="alert alert-' +
    alert_type +
    '" role="alert">' +
    msg +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>'
  );
}
var MD5 = function (e) {
  function l(e, t) {
    return (e << t) | (e >>> (32 - t));
  }
  function c(e, t) {
    var a, n, o, r, i;
    return (
      (o = 2147483648 & e),
      (r = 2147483648 & t),
      (i = (1073741823 & e) + (1073741823 & t)),
      (a = 1073741824 & e) & (n = 1073741824 & t)
        ? 2147483648 ^ i ^ o ^ r
        : a | n
        ? 1073741824 & i
          ? 3221225472 ^ i ^ o ^ r
          : 1073741824 ^ i ^ o ^ r
        : i ^ o ^ r
    );
  }
  function t(e, t, a, n, o, r, i) {
    var s;
    return (e = c(e, c(c(((s = t) & a) | (~s & n), o), i))), c(l(e, r), t);
  }
  function a(e, t, a, n, o, r, i) {
    var s;
    return (e = c(e, c(c((t & (s = n)) | (a & ~s), o), i))), c(l(e, r), t);
  }
  function n(e, t, a, n, o, r, i) {
    return (e = c(e, c(c(t ^ a ^ n, o), i))), c(l(e, r), t);
  }
  function o(e, t, a, n, o, r, i) {
    return (e = c(e, c(c(a ^ (t | ~n), o), i))), c(l(e, r), t);
  }
  function r(e) {
    var t,
      a = "",
      n = "";
    for (t = 0; t <= 3; t++)
      a += (n = "0" + ((e >>> (8 * t)) & 255).toString(16)).substr(
        n.length - 2,
        2,
      );
    return a;
  }
  var i,
    s,
    p,
    d,
    m,
    f,
    g,
    u,
    h,
    w = Array();
  for (
    w = (function (e) {
      for (
        var t,
          a = e.length,
          n = a + 8,
          o = 16 * (1 + (n - (n % 64)) / 64),
          r = Array(o - 1),
          i = 0,
          s = 0;
        s < a;

      )
        (i = (s % 4) * 8),
          (r[(t = (s - (s % 4)) / 4)] = r[t] | (e.charCodeAt(s) << i)),
          s++;
      return (
        (i = (s % 4) * 8),
        (r[(t = (s - (s % 4)) / 4)] = r[t] | (128 << i)),
        (r[o - 2] = a << 3),
        (r[o - 1] = a >>> 29),
        r
      );
    })(
      (e = (function (e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", a = 0; a < e.length; a++) {
          var n = e.charCodeAt(a);
          n < 128
            ? (t += String.fromCharCode(n))
            : (127 < n && n < 2048
                ? (t += String.fromCharCode((n >> 6) | 192))
                : ((t += String.fromCharCode((n >> 12) | 224)),
                  (t += String.fromCharCode(((n >> 6) & 63) | 128))),
              (t += String.fromCharCode((63 & n) | 128)));
        }
        return t;
      })(e)),
    ),
      f = 1732584193,
      g = 4023233417,
      u = 2562383102,
      h = 271733878,
      i = 0;
    i < w.length;
    i += 16
  )
    (f = t((s = f), (p = g), (d = u), (m = h), w[i + 0], 7, 3614090360)),
      (h = t(h, f, g, u, w[i + 1], 12, 3905402710)),
      (u = t(u, h, f, g, w[i + 2], 17, 606105819)),
      (g = t(g, u, h, f, w[i + 3], 22, 3250441966)),
      (f = t(f, g, u, h, w[i + 4], 7, 4118548399)),
      (h = t(h, f, g, u, w[i + 5], 12, 1200080426)),
      (u = t(u, h, f, g, w[i + 6], 17, 2821735955)),
      (g = t(g, u, h, f, w[i + 7], 22, 4249261313)),
      (f = t(f, g, u, h, w[i + 8], 7, 1770035416)),
      (h = t(h, f, g, u, w[i + 9], 12, 2336552879)),
      (u = t(u, h, f, g, w[i + 10], 17, 4294925233)),
      (g = t(g, u, h, f, w[i + 11], 22, 2304563134)),
      (f = t(f, g, u, h, w[i + 12], 7, 1804603682)),
      (h = t(h, f, g, u, w[i + 13], 12, 4254626195)),
      (u = t(u, h, f, g, w[i + 14], 17, 2792965006)),
      (f = a(
        f,
        (g = t(g, u, h, f, w[i + 15], 22, 1236535329)),
        u,
        h,
        w[i + 1],
        5,
        4129170786,
      )),
      (h = a(h, f, g, u, w[i + 6], 9, 3225465664)),
      (u = a(u, h, f, g, w[i + 11], 14, 643717713)),
      (g = a(g, u, h, f, w[i + 0], 20, 3921069994)),
      (f = a(f, g, u, h, w[i + 5], 5, 3593408605)),
      (h = a(h, f, g, u, w[i + 10], 9, 38016083)),
      (u = a(u, h, f, g, w[i + 15], 14, 3634488961)),
      (g = a(g, u, h, f, w[i + 4], 20, 3889429448)),
      (f = a(f, g, u, h, w[i + 9], 5, 568446438)),
      (h = a(h, f, g, u, w[i + 14], 9, 3275163606)),
      (u = a(u, h, f, g, w[i + 3], 14, 4107603335)),
      (g = a(g, u, h, f, w[i + 8], 20, 1163531501)),
      (f = a(f, g, u, h, w[i + 13], 5, 2850285829)),
      (h = a(h, f, g, u, w[i + 2], 9, 4243563512)),
      (u = a(u, h, f, g, w[i + 7], 14, 1735328473)),
      (f = n(
        f,
        (g = a(g, u, h, f, w[i + 12], 20, 2368359562)),
        u,
        h,
        w[i + 5],
        4,
        4294588738,
      )),
      (h = n(h, f, g, u, w[i + 8], 11, 2272392833)),
      (u = n(u, h, f, g, w[i + 11], 16, 1839030562)),
      (g = n(g, u, h, f, w[i + 14], 23, 4259657740)),
      (f = n(f, g, u, h, w[i + 1], 4, 2763975236)),
      (h = n(h, f, g, u, w[i + 4], 11, 1272893353)),
      (u = n(u, h, f, g, w[i + 7], 16, 4139469664)),
      (g = n(g, u, h, f, w[i + 10], 23, 3200236656)),
      (f = n(f, g, u, h, w[i + 13], 4, 681279174)),
      (h = n(h, f, g, u, w[i + 0], 11, 3936430074)),
      (u = n(u, h, f, g, w[i + 3], 16, 3572445317)),
      (g = n(g, u, h, f, w[i + 6], 23, 76029189)),
      (f = n(f, g, u, h, w[i + 9], 4, 3654602809)),
      (h = n(h, f, g, u, w[i + 12], 11, 3873151461)),
      (u = n(u, h, f, g, w[i + 15], 16, 530742520)),
      (f = o(
        f,
        (g = n(g, u, h, f, w[i + 2], 23, 3299628645)),
        u,
        h,
        w[i + 0],
        6,
        4096336452,
      )),
      (h = o(h, f, g, u, w[i + 7], 10, 1126891415)),
      (u = o(u, h, f, g, w[i + 14], 15, 2878612391)),
      (g = o(g, u, h, f, w[i + 5], 21, 4237533241)),
      (f = o(f, g, u, h, w[i + 12], 6, 1700485571)),
      (h = o(h, f, g, u, w[i + 3], 10, 2399980690)),
      (u = o(u, h, f, g, w[i + 10], 15, 4293915773)),
      (g = o(g, u, h, f, w[i + 1], 21, 2240044497)),
      (f = o(f, g, u, h, w[i + 8], 6, 1873313359)),
      (h = o(h, f, g, u, w[i + 15], 10, 4264355552)),
      (u = o(u, h, f, g, w[i + 6], 15, 2734768916)),
      (g = o(g, u, h, f, w[i + 13], 21, 1309151649)),
      (f = o(f, g, u, h, w[i + 4], 6, 4149444226)),
      (h = o(h, f, g, u, w[i + 11], 10, 3174756917)),
      (u = o(u, h, f, g, w[i + 2], 15, 718787259)),
      (g = o(g, u, h, f, w[i + 9], 21, 3951481745)),
      (f = c(f, s)),
      (g = c(g, p)),
      (u = c(u, d)),
      (h = c(h, m));
  return (r(f) + r(g) + r(u) + r(h)).toLowerCase();
};
