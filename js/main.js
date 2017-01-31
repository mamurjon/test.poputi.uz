!function (e) {
    "use strict";
    function o() {
        var o = e(window).width();
        return 601 > o ? 1 : 3
    }

    function s(o) {
        "success" === o.result ? (e("#subscribe-result").addClass("subs-result"), e(".subscription-success").text(o.msg).fadeIn(), e(".subscription-error").fadeOut()) : "error" === o.result && (e("#subscribe-result").addClass("subs-result"), e(".subscription-error").text(o.msg).fadeIn())
    }

    e(window).on("load", function () {
        e("body").addClass("loaded")
    }), e(window).on("scroll", function () {
        e(this).scrollTop() > 50 ? e("body").addClass("scrollActive") : e("body").removeClass("scrollActive"), e("body").scrollTop() >= 50 ? e(".scroll-to-top").fadeIn(200) : e(".scroll-to-top").fadeOut(200)
    }), e("body").scrollspy({
        target: "#navbar",
        offset: 80
    }), smoothScroll.init({offset: 80}), e(".img_popup").venobox(), e(".rotate").textrotator({
        animation: "flipUp",
        separator: ",",
        speed: 2e3
    });
    e(".screen_carousel").swiper({
        mode: "horizontal",
        loop: !0,
        speed: 1e3,
        autoplay: 1e3,
        effect: "coverflow",
        slidesPerView: o(),
        grabCursor: !0,
        pagination: ".screen-pagination",
        paginationClickable: !0,
        nextButton: ".arrow-right",
        prevButton: ".arrow-left",
        keyboardControl: !0,
        coverflow: {rotate: 0, stretch: 90, depth: 200, modifier: 1, slideShadows: !0}
    }), new Swiper(".testi_carousel", {
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        loop: !0,
        speed: 1e3,
        autoplay: 1e3
    });
    e(".subscribe_form").length > 0 && e(".subscribe_form").ajaxChimp({
        language: "es",
        callback: s,
        url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369"
    }), e.ajaxChimp.translations.es = {
        submit: "Submitting...",
        0: "We have sent you a confirmation email",
        1: "Please enter your email",
        2: "An email address must contain a single @",
        3: "The domain portion of the email address is invalid (the portion after the @: )",
        4: "The username portion of the email address is invalid (the portion before the @: )",
        5: "This email address looks fake or invalid. Please enter a real email address"
    }, AOS.init({easing: "ease-out-back", disable: "mobile", offset: 200, duration: 1200, delay: 100, once: !0})
}(jQuery);