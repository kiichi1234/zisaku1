document.addEventListener("DOMContentLoaded", function (event) {
	let elements = document.getElementsByClassName("top");
	for (var i = 0; i < elements.length; i++) {
		animateText(elements[i]);
	}
});

function animateText(element) {
	let text = element.innerText;
	element.innerText = "";

	for (var i = 0; i < text.length; i++) {
		var span = document.createElement("span");
		span.innerText = text[i];
		element.appendChild(span);
	}

	let spans = element.getElementsByTagName("span");
	for (var j = 0; j < spans.length; j++) {
		(function (index) {
			setTimeout(function () {
				spans[index].style.opacity = 1;
			}, index * 200); 
		})(j);
	}
}