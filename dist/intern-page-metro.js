!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),n(2),$(document).ready(function(){if($(window).width()>991){var t=$(".desktop-img").height(),e=parseInt(t);$(".banner .right").height(e)}else $(".banner .right").height("auto");function n(){$(".accordion .accordion-section-title").removeClass("active"),$(".accordion .accordion-section-content").slideUp(300).removeClass("open"),$(".accordion-section-title span").css({transform:"rotate(90deg)"})}function i(){$(".accordion-min .accordion-section-title-min").removeClass("active"),$(".accordion-min .accordion-section-content-min").slideUp(300).removeClass("open"),$(".accordion-section-title-min span").text("+")}$(".accordion-section-title").click(function(t){var e=$(this).attr("href");$(t.target).is(".active")?(n(),$(this)[0].lastChild.style.transform="rotate(90deg)"):(n(),$(this)[0].lastChild.style.transform="rotate(0deg)",$(this).addClass("active"),$(".accordion "+e).slideDown(300).addClass("open")),t.preventDefault()}),$(".accordion-section-title-min").click(function(t){var e=$(this).attr("href");$(t.target).is(".active")?(i(),$(this)[0].firstChild.innerHTML="+",console.log($(this)[0].lastChild)):(i(),$(this)[0].firstChild.innerHTML="-",$(this).addClass("active"),$(".accordion-min "+e).slideDown(300).addClass("open")),t.preventDefault()})})},function(t,e,n){},function(t,e,n){}]);