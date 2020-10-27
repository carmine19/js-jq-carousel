$(document).ready(function () {

	// intercetto il click su next
	$('.next i').click(function () {
		// recupero l'immagine corrente
		var img_corrente = $('img.active');

		// tolgo la classe active all'immagine corrente
		img_corrente.removeClass('active');

		// verifico se esiste un'immagine successiva usando leght per leggere tutta la lughezza
		if (img_corrente.next('img').length) {
			// se c'è aggiungo la classe active
			img_corrente.next('img').addClass('active');
		} else {
			// se non c'è la riassegno al primo elemento
			$('.slide :first-child').addClass('active');
		}
	});

	$('.next i').click(function () {
		// recupero il round corrente
		var round_corrente = $('.fa-circle.active-round');

		// tolgo la classe active dal round corrente
		round_corrente.removeClass('active-round');

		// verifico se esiste un altro round
		if (round_corrente.next('.fa-circle').length) {
			// se c'è assegno la classe active -round al elemento successivo
			round_corrente.next('.fa-circle').addClass('active-round');
		} else {
			// altrimenti assegno la classe active-roun al primo
			$('.round :first-child').addClass('active-round');
		}
	});

	$('.prev i').click(function () {
		// recupero il round corrente
		var round_corrente = $('.fa-circle.active-round');

		// tolgo la classe active dal round corrente
		round_corrente.removeClass('active-round');

		// verifico se esiste un altro round
		if (round_corrente.prev('.fa-circle').length) {
			// se c'è assegno la classe active -round al elemento successivo
			round_corrente.prev('.fa-circle').addClass('active-round');
		} else {
			// altrimenti assegno la classe active-round al ultimo elemento
			$('.round :last-child').addClass('active-round');
		}
	});

	// intercetto il click su prev
	$('.prev i').click(function () {
		// recupero l'immagine corrente
		var img_corrente = $('img.active');

		// tolgo la classe active all'immagine corrente
		img_corrente.removeClass('active');

		// verifico se esiste un'immagine precedente usando leght per leggere tutta la lughezza
		if (img_corrente.prev('img').length) {
			// se c'è aggiungo la classe active
			img_corrente.prev('img').addClass('active');
		} else {
			// se non c'è la riassegno al ultimo elemento
			$('.slide img:last-of-type').addClass('active');
		}
	});


	/* DARK MODE */

	$('.dark-button').click(function () {
		$('.dark-button').toggleClass('button-white');
		$('body').toggleClass('white');
	});


});