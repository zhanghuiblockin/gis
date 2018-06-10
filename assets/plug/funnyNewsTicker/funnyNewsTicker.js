(function(e) {
  $.fn.funnyNewsTicker = function(e) {
    var t = {
      width: "100%",
      modulid: "funnyNewsTicker",
      autoplay: true,
      timer: 3e3,
      titlecolor: "#333",
      titlefontsize: "14px",
      itembgcolor: "#FFF",
      contentlinkcolor: "#099",
      infobgcolor: "#f2f2f2",
      bordercolor: "#DDD",
      itemheight: 130,
      infobarvisible: true,
      btnfacebook: true,
      btntwitter: true,
      btngoogleplus: true,
      btnlinkbutton: true,
      btnlinktarget: "_blank",
      pagecountvisible: true,
      buttonstyle: "black",
      pagenavi: true,
      pagenavistyle: "black",
      feed: false,
      feedcount: 100
    };
    var e = $.extend(t, e);
    return this.each(function() {
      function o() {
        function o() {
          $(e.modulid + ">div").css({ left: ($(e.modulid).width() - 30) / 2 });
        }
        function u() {
          $(e.modulid + " ul li")
            .eq(r[0])
            .addClass("fnt-top0");
          $(e.modulid + " ul li")
            .eq(r[1])
            .addClass("fnt-top1");
          $(e.modulid + " ul li")
            .eq(r[2])
            .addClass("fnt-top2");
          $(e.modulid + " ul li")
            .eq(r[3])
            .addClass("fnt-active");
          $(e.modulid + " ul li")
            .eq(r[4])
            .addClass("fnt-bottom2");
          $(e.modulid + " ul li")
            .eq(r[5])
            .addClass("fnt-bottom1");
          $(e.modulid + " ul li")
            .eq(r[6])
            .addClass("fnt-bottom0");
        }
        function a() {
          t--;
          if (t < 0) t = n;
          l();
        }
        function f() {
          t++;
          if (t == n + 1) t = 0;
          l();
        }
        function l() {
          $(e.modulid + " ul li").attr("class", "");
          if (t == 0) {
            r[0] = n - 2;
            r[1] = n - 1;
            r[2] = n;
            r[3] = t;
            r[4] = t + 1;
            r[5] = t + 2;
            r[6] = t + 3;
          } else if (t == 1) {
            r[0] = n - 1;
            r[1] = n;
            r[2] = t - 1;
            r[3] = t;
            r[4] = t + 1;
            r[5] = t + 2;
            r[6] = t + 3;
          } else if (t == 2) {
            r[0] = n;
            r[1] = t - 2;
            r[2] = t - 1;
            r[3] = t;
            r[4] = t + 1;
            r[5] = t + 2;
            r[6] = t + 3;
          } else if (t == n) {
            r[0] = n - 3;
            r[1] = n - 2;
            r[2] = n - 1;
            r[3] = t;
            r[4] = 0;
            r[5] = 1;
            r[6] = 2;
          } else if (t == n - 1) {
            r[0] = n - 4;
            r[1] = n - 3;
            r[2] = n - 2;
            r[3] = t;
            r[4] = t + 1;
            r[5] = 0;
            r[6] = 1;
          } else if (t == n - 2) {
            r[0] = n - 5;
            r[1] = n - 4;
            r[2] = n - 3;
            r[3] = t;
            r[4] = t + 1;
            r[5] = t + 2;
            r[6] = 0;
          } else {
            r[0] = t - 3;
            r[1] = t - 2;
            r[2] = t - 1;
            r[3] = t;
            r[4] = t + 1;
            r[5] = t + 2;
            r[6] = t + 3;
          }
          u();
        }
        $(e.modulid + " ul li").css({
          height: e.itemheight,
          background: e.itembgcolor,
          border: "solid 1px " + e.bordercolor,
          color: e.titlecolor,
          "font-size": e.titlefontsize
        });
        $(e.modulid + " ul li").each(function(t, r) {
          if (e.infobarvisible) {
            i =
              '<div class="fnt-info" style="background:' +
              e.infobgcolor +
              "; border-color:" +
              e.bordercolor +
              ';">';
            if (e.btnfacebook)
              i =
                i +
                '<a data-type="facebook" data-url="' +
                $(this)
                  .find(".fnt-content")
                  .attr("data-link") +
                '" data-text="' +
                $(this)
                  .find(".fnt-content")
                  .text() +
                '" class="fnt-easing2 fnt-facebook-' +
                e.buttonstyle +
                '"></a>';
            if (e.btntwitter)
              i =
                i +
                '<a data-type="twitter" data-url="' +
                $(this)
                  .find(".fnt-content")
                  .attr("data-link") +
                '" data-text="' +
                $(this)
                  .find(".fnt-content")
                  .text() +
                '" class="fnt-easing2 fnt-twitter-' +
                e.buttonstyle +
                '"></a>';
            if (e.btngoogleplus)
              i =
                i +
                '<a data-type="google" data-url="' +
                $(this)
                  .find(".fnt-content")
                  .attr("data-link") +
                '" data-text="' +
                $(this)
                  .find(".fnt-content")
                  .text() +
                '" class="fnt-easing2 fnt-google-' +
                e.buttonstyle +
                '"></a>';
            if (e.pagecountvisible)
              i =
                i +
                "<span>" +
                ($(this).index() + 1) +
                " / " +
                (n + 1) +
                "</span>";
            if (e.btnlinkbutton)
              i =
                i +
                '<a href="' +
                $(this)
                  .find(".fnt-content")
                  .attr("data-link") +
                '" class="fnt-easing2 fnt-link-' +
                e.buttonstyle +
                '" target="' +
                e.btnlinktarget +
                '"></a>';
            i = i + "</div>";
          }
          $(this).append(i);
        });
        $(e.modulid + " ul li .fnt-content")
          .find("a")
          .css({ color: e.contentlinkcolor });
        $(e.modulid + " ul li")
          .find(".fnt-info")
          .find("a")
          .click(function(e) {
            if ($(this).attr("data-type") == "facebook") {
              window.open(
                "http://www.facebook.com/sharer.php?u=" +
                  encodeURIComponent($(this).attr("data-url")) +
                  "&t=" +
                  encodeURIComponent($(this).attr("data-text")),
                "sharer",
                "toolbar=0,status=0,width=626,height=436"
              );
              return false;
            } else if ($(this).attr("data-type") == "twitter") {
              window.open(
                "http://twitter.com/share?text=" +
                  $(this).attr("data-text") +
                  "&url=" +
                  $(this).attr("data-url"),
                "sharer",
                "toolbar=0,status=0,width=626,height=436"
              );
              return false;
            } else if ($(this).attr("data-type") == "google") {
              window.open(
                "https://plus.google.com/share?url=" +
                  $(this).attr("data-url") +
                  "&title=" +
                  $(this).attr("data-text"),
                "sharer",
                "height=550,width=525,left=100,top=100,menubar=0"
              );
              return false;
            }
          });
        $(e.modulid + " ul li").click(function(e) {
          t = $(this).index();
          l();
        });
        if (e.pagenavi) {
          $(e.modulid).append(
            '<div class="fnt-top-arrow" style="background:url(img/fnt-arrows-' +
              e.pagenavistyle +
              '.png) top no-repeat;"></div><div class="fnt-bottom-arrow" style="background:url(img/fnt-arrows-' +
              e.pagenavistyle +
              '.png) bottom no-repeat;"></div>'
          );
          $(e.modulid).css({
            height: e.itemheight + 200,
            padding: "0px 0px",
            width: e.width
          });
        } else {
          $(e.modulid).css({
            height: e.itemheight + 105,
            padding: "0px 0px",
            width: e.width
          });
        }
        o();
        $(window).resize(function(e) {
          o();
        });
        u();
        $(e.modulid + ">div").click(function(e) {
          if ($(this).attr("class") == "fnt-top-arrow") a();
          else f();
        });
        if (e.autoplay) {
          s = setInterval(function() {
            f();
          }, e.timer);
          $(e.modulid).hover(
            function() {
              clearInterval(s);
            },
            function() {
              s = setInterval(function() {
                f();
              }, e.timer);
            }
          );
        }
      }
      function u() {
        $.ajax({
          type: "GET",
          url:
            document.location.protocol +
            "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" +
            e.feedcount +
            "&callback=?&q=" +
            encodeURIComponent(e.feed),
          dataType: "json",
          async: false,
          success: function(i) {
            veri = i.responseData.feed.entries;
            news = "";
            $(veri).each(function(e, t) {
              if (e == 0)
                news =
                  news +
                  '<li class="fnt-active"><div class="fnt-content" data-link="' +
                  veri[e].link +
                  '"><a href="' +
                  veri[e].link +
                  '">' +
                  veri[e].title +
                  "</a></div></li>";
              else if (e == 1)
                news =
                  news +
                  '<li class="fnt-bottom2"><div class="fnt-content" data-link="' +
                  veri[e].link +
                  '"><a href="' +
                  veri[e].link +
                  '">' +
                  veri[e].title +
                  "</a></div></li>";
              else if (e == 2)
                news =
                  news +
                  '<li class="fnt-bottom1"><div class="fnt-content" data-link="' +
                  veri[e].link +
                  '"><a href="' +
                  veri[e].link +
                  '">' +
                  veri[e].title +
                  "</a></div></li>";
              else if (e == 3)
                news =
                  news +
                  '<li class="fnt-bottom0"><div class="fnt-content" data-link="' +
                  veri[e].link +
                  '"><a href="' +
                  veri[e].link +
                  '">' +
                  veri[e].title +
                  "</a></div></li>";
              else if (e == veri.length - 1)
                news =
                  news +
                  '<li class="fnt-top2"><div class="fnt-content" data-link="' +
                  veri[e].link +
                  '"><a href="' +
                  veri[e].link +
                  '">' +
                  veri[e].title +
                  "</a></div></li>";
              else if (e == veri.length - 2)
                news =
                  news +
                  '<li class="fnt-top1"><div class="fnt-content" data-link="' +
                  veri[e].link +
                  '"><a href="' +
                  veri[e].link +
                  '">' +
                  veri[e].title +
                  "</a></div></li>";
              else if (e == veri.length - 3)
                news =
                  news +
                  '<li class="fnt-top0"><div class="fnt-content" data-link="' +
                  veri[e].link +
                  '"><a href="' +
                  veri[e].link +
                  '">' +
                  veri[e].title +
                  "</a></div></li>";
              else
                news =
                  news +
                  '<li><div class="fnt-content" data-link="' +
                  veri[e].link +
                  '"><a href="' +
                  veri[e].link +
                  '">' +
                  veri[e].title +
                  "</a></div></li>";
            });
            $(e.modulid + " ul").html("");
            $(e.modulid + " ul").append(news);
            n = veri.length - 1;
            r = [n - 2, n - 1, n, t, t + 1, t + 2, t + 3];
            o();
          },
          error: function() {
            $(e.modulid + " ul").html(
              '<li class="fnt-active"><div class="fnt-content">Error! Please try again later...</div></li>'
            );
          }
        });
      }
      e.modulid = "#" + $(this).attr("id");
      var t = 0;
      var n = $(e.modulid + " ul li").length - 1;
      var r = [n - 2, n - 1, n, t, t + 1, t + 2, t + 3];
      var i = "";
      var s = e.modulid;
      if (e.feed != false) {
        $(e.modulid + " ul").html("");
        $(e.modulid + " ul").append(
          '<li class="fnt-active"><div class="fnt-content">Rss Feed Loading...</div></li>'
        );
        u();
      } else {
        o();
      }
    });
  };
})(jQuery);
