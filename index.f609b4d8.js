var e;(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),d=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),document.body.classList.toggle("hystmodal__opened");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};$(".mob-nav-item__link").click((function(){e.classList.toggle("is-open"),document.body.classList.toggle("hystmodal__opened")})),o.addEventListener("click",d),t.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var o=this,t=(o.document||o.ownerDocument).querySelectorAll(e),d=0;t[d]&&t[d]!==o;)++d;return Boolean(t[d])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var o=this;o&&1===o.nodeType;){if(o.matches(e))return o;o=o.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+t+'"]').classList.add("active"),o.classList.add("active"),document.body.classList.toggle("modal-open")}))})),t.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),o.classList.remove("active"),document.body.classList.toggle("modal-open")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1)})),document.querySelector(".js-speaker-form").addEventListener("submit",(e=>{e.preventDefault(),new FormData(e.currentTarget).forEach(((e,o)=>console.log(`${o}: ${e}`))),e.currentTarget.reset()})),(()=>{const e={openModalBtn:document.querySelector("[read-more-modal-open]"),closeModalBtn:document.querySelector("[read-more-modal-close]"),modal:document.querySelector("[read-more-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector(".by-me-modal-open"),closeModalBtn:document.querySelector("[by-me-modal-close]"),modal:document.querySelector("[by-me-data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("by-my_is-hidden")}$("body").on("mousedown ",(function(e){$(e.target).is(".backdrop")&&$("body").hasClass("modal-open")&&!$("body").hasClass("hystmodal__opened")&&o()})),e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),$(document).ready((function(){$(".reviews__slider").slick({arrows:!1,dots:!0,adaptiveHeight:!0,speed:500,easing:"ease",infinite:!0,initialSlide:0,autoplay:!1,autoplaySpeed:500,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0,draggable:!0,swipe:!0,touchThreshold:10,touchMove:!0,waitForAnimate:!1,fade:!1}),$(".gallery__slider").slick({arrows:!1,dots:!1,adaptiveHeight:!0,speed:500,easing:"ease",infinite:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0,draggable:!0,swipe:!0,touchThreshold:10,touchMove:!0,waitForAnimate:!1,centerMode:!0,fade:!0,cssEase:"linear"})})),(()=>{const e={openModalBtn:document.querySelector(".by-me-mobile-open"),closeModalBtn:document.querySelector("[by-me-mobile-close]"),modal:document.querySelector("[by-me-mobile-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("by-my_is-hidden")}$("body").on("touchstart",(function(e){var t=$(e.target);t.is(".backdrop")&&$("body").hasClass("modal-open")&&(o(),console.log(t,"mob"))})),e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),$(".product-card-container").on("click touchstart",(function(e){e.preventDefault(),$(".buy-me-btn").removeAttr("disabled");var o=$(this).index()+1;$(".buy-me__product-card").removeClass("active"),$(this).find(".buy-me__product-card").addClass("active"),$(".check").removeAttr("checked"),$("#product"+o).attr("checked","checked")})),$(".buy-me-btn").on("click",(function(){$(".form__input").removeClass("empty"),$(".form__input").each((function(e){null!==this.value&&""!==this.value||(this.classList.add("empty"),$(".buy-me-btn").attr("disabled","disabled"))}))})),$(".form__input").on("input",(function(){null==this.value&&""==this.value||$(this).removeClass("empty"),$(".buy-me-btn").removeAttr("disabled")})),(()=>{const e={openModalBtn:document.querySelector("[products-modal-open]"),closeModalBtn:document.querySelector("[products-modal-close]"),modal:document.querySelector("[products-data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("products-backdrop__is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[second-products-modal-open]"),closeModalBtn:document.querySelector("[second-products-modal-close]"),modal:document.querySelector("[second-products-data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("products-backdrop__is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[third-products-modal-open]"),closeModalBtn:document.querySelector("[third-products-modal-close]"),modal:document.querySelector("[third-products-data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("products-backdrop__is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.f609b4d8.js.map