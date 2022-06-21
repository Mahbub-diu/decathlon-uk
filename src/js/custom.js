
// menu type writter js start from here 

var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
    var charIndex = 0;
    var maxCharIndex = text.length - 1;

    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex];
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function () { deleting(textIndex, text) }, sBetweenWord * 1000);

        } else {
            charIndex += 1;
        }
    }, sPerChar * 1000);
}

function deleting(textIndex, text) {
    var minCharIndex = 0;
    var charIndex = text.length - 1;

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex);
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;
            setTimeout(function () { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000);
        } else {
            charIndex -= 1;
        }
    }, sPerChar * 1000);
}

// menu type writter js end here 

// home slider start from here 

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".custom-arrow-next",
        // prevEl: ".custom-arrow-prev",

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
        },
    },
});

// home slider end here 

console.clear()
