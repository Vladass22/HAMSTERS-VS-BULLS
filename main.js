//Popup form
	document.getElementById('intro_btn').onclick = function() {
		document.getElementById('main').classList.add('pop-open');
	}
	document.getElementById('intro_btn2').onclick = function() {
		document.getElementById('main').classList.add('pop-open');
	}
	document.getElementById('intro_btn3').onclick = function() {
		document.getElementById('main').classList.add('pop-open');
	}
	document.getElementById('intro_btn4').onclick = function() {
		document.getElementById('main').classList.add('pop-open');
	}
	document.getElementById('pop_close').onclick = function() {
		document.getElementById('main').classList.remove('pop-open');
	}
	document.getElementById('pop_close2').onclick = function() {
		document.getElementById('main').classList.remove('pop-result');
		document.getElementById('main').classList.remove('pop-open');
	}



//Validate form
function validate(){
   document.getElementById('main').classList.add('pop-result');

    return true;
}