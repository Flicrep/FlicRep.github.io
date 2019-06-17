!(function(t) {
  "use strict";
  t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var o = t(this.hash);
      if ((o = o.length ? o : t("[name=" + this.hash.slice(1) + "]")).length)
        return (
          t("html, body").animate(
            { scrollTop: o.offset().top - 71 },
            1e3,
            "easeInOutExpo"
          ),
          !1
        );
    }
  }),
    t(document).scroll(function() {
      100 < t(this).scrollTop()
        ? t(".scroll-to-top").fadeIn()
        : t(".scroll-to-top").fadeOut();
    }),
    t(".js-scroll-trigger").click(function() {
      t(".navbar-collapse").collapse("hide");
    }),
    t("body").scrollspy({ target: "#mainNav", offset: 80 });
  function o() {
    100 < t("#mainNav").offset().top
      ? t("#mainNav").addClass("navbar-shrink")
      : t("#mainNav").removeClass("navbar-shrink");
  }
  o(),
    t(window).scroll(o),
    t(function() {
      t("body")
        .on("input propertychange", ".floating-label-form-group", function(o) {
          t(this).toggleClass(
            "floating-label-form-group-with-value",
            !!t(o.target).val()
          );
        })
        .on("focus", ".floating-label-form-group", function() {
          t(this).addClass("floating-label-form-group-with-focus");
        })
        .on("blur", ".floating-label-form-group", function() {
          t(this).removeClass("floating-label-form-group-with-focus");
        });
    });
})(jQuery);
