
var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
    sectionsColor: ['#E8E8DD', '#E8E8DD', '##E8E8DD','##E8E8DD','#E8E8DD','#E8E8DD','#E8E8DD'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    scrollBar:false,
});


new WOW().init();

var $btn = $('nav li a');

$btn.click(function(){
    $btn.removeClass('on');
    $(this).addClass('on');
});

/* isotope 플러그인 설정 */
$('.thumb').isotope({
    // options
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    stagger: 30
});

/* isotope 플러그인을 이용 필터링 */
$('.btn_all').click(function(){
    $('.thumb').isotope({ filter: '.all' });
});
$('.btn_goods').click(function(){
    $('.thumb').isotope({ filter: '.goods' });
});
$('.btn_copy').click(function(){
    $('.thumb').isotope({ filter: '.copy' });
});
$('.btn_etc').click(function(){
    $('.thumb').isotope({ filter: '.etc' });
});


//썸네일 팝업창 띄우기
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });


