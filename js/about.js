function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


$('#recipeCarousel').carousel({
    interval: 10000
})

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


$(document).ready(function () {
    $('.intern-faq-ques').click(function () {
        if ($(this).next().next().css('display') === 'none') {
            $(this).next().next().slideDown('fast');
            $(this).find('span').css('transform', 'rotate(90deg)');
        }
        else {
            $(this).next().next().slideUp('fast');
            $(this).find('span').css('transform', 'rotate(0deg)');
        }
    });
});



function changeTab1() {
    var areaID = 'tab1';
    //alert('[' + areaID + ']');
    if (areaID == 'tab1') {
        $('#tab1div').show();
        $('#tab2div').hide();
        $('#tab5div').hide();
        $('#tab4div').hide();
        $('#tab6div').hide();
        $('#tab3div').hide();
        $('#tab7div').hide();
    }
}
function changeTab2() {
    var areaID = 'tab2';
    //alert('[' + areaID + ']');
    if (areaID == 'tab2') {
        $('#tab2div').show();
        $('#tab1div').hide();
        $('#tab5div').hide();
        $('#tab4div').hide();
        $('#tab6div').hide();
        $('#tab3div').hide();
        $('#tab7div').hide();
    }
}
function changeTab4() {

    var areaID = 'tab4';
    if (areaID == 'tab4') {
        $('#tab4div').show();
        $('#tab1div').hide();
        $('#tab2div').hide();
        $('#tab5div').hide();
        $('#tab6div').hide();
        $('#tab3div').hide();
        $('#tab7div').hide();
    }
}
function changeTab5() {
    var areaID = 'tab5';
    if (areaID == 'tab5') {
        $('#tab5div').show();
        $('#tab1div').hide();
        $('#tab2div').hide();
        $('#tab4div').hide();
        $('#tab6div').hide();
        $('#tab3div').hide();
        $('#tab7div').hide();
    }
}
function changeTab6() {
    var areaID = 'tab6';
    if (areaID == 'tab6') {
        $('#tab6div').show();
        $('#tab1div').hide();
        $('#tab2div').hide();
        $('#tab5div').hide();
        $('#tab4div').hide();
        $('#tab3div').hide();
        $('#tab7div').hide();
    }
}
function changeTab3() {

    var areaID = 'tab3';
    if (areaID == 'tab3') {
        $('#tab3div').show();
        $('#tab1div').hide();
        $('#tab2div').hide();
        $('#tab5div').hide();
        $('#tab4div').hide();
        $('#tab6div').hide();
        $('#tab7div').hide();
    }
}
function changeTab7() {
    var areaID = 'tab7';
    if (areaID == 'tab7') {
        $('#tab7div').show();
        $('#tab1div').hide();
        $('#tab2div').hide();
        $('#tab5div').hide();
        $('#tab4div').hide();
        $('#tab6div').hide();
        $('#tab3div').hide();
    }
}
