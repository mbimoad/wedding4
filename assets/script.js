let ukuranlayar = window.innerWidth;
const audio = document.querySelector('.audio');
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var cookie  = getCookie('login'); 
var scookie = String(cookie); 

$(window).on('resize', function() {
    let mobile = window.innerWidth;
    if(mobile <= 683 && $('.dashboard').hasClass('aktif')) {
        $('.nav').css({
            'display': 'inline-block',
        })
    } else if(mobile <= 683 && !$('.dashboard').hasClass('aktif')) {
        console.log("Sini gays")
        $('.nav').css({
            'display': 'none',
        })
    }
    
    else if(mobile > 683) {
        $('.nav').css({
            'display': 'none',
        })
    }
})


$('.open').on('click', function() {
    $('html').animate({
        scrollTop: 0,
    })
    if(ukuranlayar <= 683) {
        $('.nav').css({
            'display':'inline-block',
        })
    } else if(ukuranlayar > 683) {
        $('.nav').css({
            'display':'none',
        })
    }

    $('.invite').addClass('buka'); 
    $('.dashboard').addClass('aktif'); 
    $('.myicon').css({
        'display': 'inline-block'
    })
    audio.play(); 
    setCookie('login','true',1);    
})






$(window).on('load', function() {
    if(scookie != 'null') {
        $('.dashboard').addClass('aktif');
        $('.myicon').css({
            'display': 'inline-block'
        })
        if(ukuranlayar <= 683) {
            $('.nav').css({
                'display': 'inline-block',
            })
        } else if(ukuranlayar > 683) {
            $('.nav').css({
                'display': 'none',
            })
        } 
    } else {
        $('.nav').css({
            'display': 'none',
        })
    }
    if($('.dashboard').hasClass('aktif')) {
        $('.myicon').css({
            'display': 'inline-block'
        })
    }
    
   
})


gsap.from('.frame', {
    y:'-100%', 
    duration:1.5, 
    opacity:0, 
})

gsap.to('.cursor', {
    opacity:0, 
    duration:0.3,
    repeat: -1,
    delay: 1,
})

$('.link').on('click', function(e) {
    e.preventDefault();
    href = $(this).attr('href'); 
    href = $(href); 
    href = href.offset().top;
    $('html').animate({
        scrollTop: href,
    }, 1000, 'easeInOutExpo'); 
})


const teks = "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought<br>[QS. AR-RUM AYAT 21]";
let ptl = gsap.timeline({
    repeat: -1, 
    repeatDelay:2,
    duration:3,
})

let mtl = gsap.timeline({
    repeat: -1,
    yoyo:true,
    repeatDelay:1,
})

mtl.to('.teks', {
    text: teks, 
    duration:40,
}); 

mtl.add(ptl); 

$('.bank-img').on('click', async function() {
    let rekening = $(this).data('rekening'); 
    let namabank = $(this).data('bank');
    await navigator.clipboard.writeText(rekening);
    Swal.fire(
        'Good job!',
        `${namabank} Successfully coppied`,
        'success'
    )
})





const card = document.querySelectorAll('.bride .card');
card.forEach(function(item, index) {
    item.dataset.aos = 'fade-up'; 
    item.dataset.aosDuration = '2000'; 
    item.dataset.aosDelay = '500'; 
});

$(window).on('scroll', function() {
    let Position  = $(this).scrollTop(); 
    let lovestory = $('.lovestory').offset().top - 30;
    if(Position > lovestory) {
        $('.lovestory .card-love').each((index, item) => {
            setTimeout(() => {
                $('.lovestory .card-love').eq(index).addClass('muncul'); 
            }, index * 500);
        })
    }

    
})


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});


let wedding = new Date("Sept 19, 2025 11:00:00").getTime();

let x = setInterval(() => {
    let current = new Date().getTime(); 
    var targets = wedding - current; 
    var hari  = Math.floor(targets / (1000 * 60 * 60 * 24)); 
    var jams  = Math.floor(targets % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var menit = Math.floor(targets % (1000 * 60 * 60)      / (1000 * 60));
    var detik = Math.floor(targets % (1000 * 60)           / (1000)); 

    $('.hari').html(hari); 
    $('.jam').html(jams); 
    $('.menit').html(menit); 
    $('.detik').html(detik);

    if(targets <= 0) {
        $('.hari').html(0); 
        $('.jam').html(0); 
        $('.menit').html(0); 
        $('.detik').html(0);
        clearInterval(x); 
    }
}, 1000);


// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$('.myicon').on('click', function() {
   if($('.myicon i').hasClass('fa-play')) {
       $('.myicon').html('<i class="fas fa-pause"></i>');
       audio.play(); 
   } else {
       $('.myicon').html('<i class="fas fa-play"></i>');
       audio.pause();
   }
});