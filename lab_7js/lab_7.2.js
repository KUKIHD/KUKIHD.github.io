let input = document.querySelector('input[data-placeholder]');
    let div = document.querySelector('div');

    input.value = input.getAttribute('data-placeholder');

    input.onfocus = function () {
      div.innerHTML = input.getAttribute('data-placeholder');
      input.setAttribute('data-placeholder', '');
      input.value = '';
    };

    input.onblur = function () {
      input.setAttribute('data-placeholder', div.innerHTML);
      div.innerHTML = '';
      input.value = input.getAttribute('data-placeholder');
    };

