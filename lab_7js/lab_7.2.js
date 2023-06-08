'use strict';
let tf = document.getElementById("hhh");
let input = tf.getElementsByTagName("input")[0];
let lb = tf.getElementsByTagName("label")[0];
lb.style.display = "none";
input.setAttribute("placeholder", input.dataset.placeholder); //setAttribute добавляет атрибут или изменяет значение существующего атрибута в выбранном элементе.
lb.innerHTML = input.dataset.placeholder;
input.addEventListener("blur", function () {
lb.style.display = "none";
input.setAttribute("placeholder", input.dataset.placeholder);
});
input.addEventListener("focus", function () { //addEventListener устанавливает функцию, которая будет вызываться всякий раз, когда указанное событие доставляется цели
lb.style.display = "block";
input.setAttribute("placeholder", "");
});
