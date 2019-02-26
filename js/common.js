$(document).ready(function() {



	// slick
	$('.contacts_top_office-h').slick({
		dots: false,
		//		infinite: true,
		speed: 300,
		autoplaySpeed: 2000,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplay: true,
		prevArrow: '<div class="slick-prev"><img src="img/slick-arrow-l.svg"></div>',
		nextArrow: '<div class="slick-next"><img src="img/slick-arrow-r.svg"></div>',
	});

	$('.carusel-3in1-wr').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		prevArrow: '<div class="slick-prev"><img src="img/slick-arrow-l.svg"></div>',
		nextArrow: '<div class="slick-next"><img src="img/slick-arrow-r.svg"></div>',
	});





	if($(window).width() <= 768){
		$('[href="#s2"]').click(function(){

			$('.carusel-3in1-wr').slick('slickGoTo', 1);

		});
	}

	//map
	var map_coordinate1 = $("#map").data("coordinate1"),
			map_coordinate2 = $("#map2").data("coordinate2");
	map_coordinate3 = $("#map3").data("coordinate3");
	map_coordinate4 = $("#map4").data("coordinate4");
	map_coordinate5 = $("#map5").data("coordinate5");
	map_coordinate6 = $("#map6").data("coordinate6");
	map_coordinate7 = $("#map7").data("coordinate7");
	ymaps.ready(init);

	function init(){
		var myMap1 = new ymaps.Map("map", {
			center: map_coordinate1,
			zoom: 16
		});

		var myPlacemark1 = new ymaps.Placemark(map_coordinate1, { 
			balloonContent: ""+$("#map").data("balloon1")+"" 
		});

		var myMap2 = new ymaps.Map("map2", {
			center: map_coordinate2,
			zoom: 16
		});

		var myPlacemark2 = new ymaps.Placemark(map_coordinate2, { 
			balloonContent: ""+$("#map2").data("balloon2")+"" 
		});

		var myMap3 = new ymaps.Map("map3", {
			center: map_coordinate3,
			zoom: 16
		});

		var myPlacemark3 = new ymaps.Placemark(map_coordinate3, { 
			balloonContent: ""+$("#map3").data("balloon3")+"" 
		});

		var myMap4 = new ymaps.Map("map4", {
			center: map_coordinate4,
			zoom: 16
		});

		var myPlacemark4 = new ymaps.Placemark(map_coordinate4, { 
			balloonContent: ""+$("#map4").data("balloon4")+"" 
		});

		var myMap5 = new ymaps.Map("map5", {
			center: map_coordinate5,
			zoom: 16
		});

		var myPlacemark5 = new ymaps.Placemark(map_coordinate5, { 
			balloonContent: ""+$("#map5").data("balloon5")+"" 
		});

		var myMap6 = new ymaps.Map("map6", {
			center: map_coordinate6,
			zoom: 16
		});

		var myPlacemark6 = new ymaps.Placemark(map_coordinate6, { 
			balloonContent: ""+$("#map6").data("balloon6")+"" 
		});

		var myMap7 = new ymaps.Map("map7", {
			center: map_coordinate7,
			zoom: 16
		});

		var myPlacemark7 = new ymaps.Placemark(map_coordinate7, { 
			balloonContent: ""+$("#map7").data("balloon7")+"" 
		});

		// /* Определяем мобильный ли браузер*/
		// var isMobile = {
		// 	Android: function() {
		// 		return navigator.userAgent.match(/Android/i);
		// 	},
		// 	BlackBerry: function() {
		// 		return navigator.userAgent.match(/BlackBerry/i);
		// 	},
		// 	iOS: function() {
		// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		// 	},
		// 	Opera: function() {
		// 		return navigator.userAgent.match(/Opera Mini/i);
		// 	},
		// 	Windows: function() {
		// 		return navigator.userAgent.match(/IEMobile/i);
		// 	},
		// 	any: function() {
		// 		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		// 	}
		// };

		// /* Запрещаем драг с мобилы*/
		// if(isMobile.any()){
		// 	myMap.behaviors.disable('drag');
		// }

		myMap1.geoObjects.add(myPlacemark1);
		// myMap1.behaviors.disable('scrollZoom');
		// myMap1.controls.remove('largeMapDefaultSet');
		// myMap1.controls.remove("fullscreenControl");

		myMap2.geoObjects.add(myPlacemark2);
		// myMap2.behaviors.disable('scrollZoom');
		// myMap2.controls.remove('largeMapDefaultSet');
		// myMap2.controls.remove("fullscreenControl");

		myMap3.geoObjects.add(myPlacemark3);
		// myMap3.behaviors.disable('scrollZoom');
		// myMap3.controls.remove('largeMapDefaultSet');
		// myMap3.controls.remove("fullscreenControl");

		myMap4.geoObjects.add(myPlacemark4);
		// myMap4.behaviors.disable('scrollZoom');
		// myMap4.controls.remove('largeMapDefaultSet');
		// myMap4.controls.remove("fullscreenControl");

		myMap5.geoObjects.add(myPlacemark5);
		// myMap5.behaviors.disable('scrollZoom');
		// myMap5.controls.remove('largeMapDefaultSet');
		// myMap5.controls.remove("fullscreenControl");

		myMap6.geoObjects.add(myPlacemark6);
		// myMap6.behaviors.disable('scrollZoom');
		// myMap6.controls.remove('largeMapDefaultSet');
		// myMap6.controls.remove("fullscreenControl");

		myMap7.geoObjects.add(myPlacemark7);
		// myMap7.behaviors.disable('scrollZoom');
		// myMap7.controls.remove('largeMapDefaultSet');
		// myMap7.controls.remove("fullscreenControl");
	};

});



$(document).ready(function() {
var jason = $('#select1').data('jason');
var jsonar = JSON.stringify( jason );
	jsonar = jQuery.parseJSON( jsonar );

function makechanges(visaid,frstid,scndid) {
   var takeprice = jsonar[visaid][frstid][scndid];
   var takequoridor = jsonar[visaid]['quoridor'] + ' дней';
   var aid = $("select option:selected").attr('id');
   $('#visa_price').text(takeprice);
   $('#quoridor').text(takequoridor);
}
$('#top_form #select1').change(function(){
   var visaid = $(this).find('option:selected').attr('id');
   var frstid = $('#radio_calc1 input:radio:checked').attr('id');
   var scndid = $('#radio_calc2 input:radio:checked').attr('id');
   makechanges(visaid,frstid,scndid);
});
$('#radio_calc1 .radio_calc').on('click', function(){
   var visaid = $('#top_form #select1 option:selected').attr('id');
   var frstid = $(this).attr('for');
   var scndid = $('#radio_calc2 input:radio:checked').attr('id');
   makechanges(visaid,frstid,scndid);
});
$('#radio_calc2 .radio_calc').on('click', function(){
   var visaid = $('#top_form #select1 option:selected').attr('id');
   var frstid = $('#radio_calc1 input:radio:checked').attr('id');
   var scndid = $(this).attr('for');
   makechanges(visaid,frstid,scndid);
});

   var visaid = $('#top_form #select1 option:selected').attr('id');
   var frstid = $('#radio_calc1 input:radio:checked').attr('id');
   var scndid = $('#radio_calc2 input:radio:checked').attr('id');
   makechanges(visaid,frstid,scndid);

});


