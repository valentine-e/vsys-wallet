let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');

  let selectItem = document.querySelectorAll('.select__text');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText;
    let selectContainer = this.closest('.select');
    let currentText = selectContainer.querySelector('.select__current');
    currentText.innerText = text;
    selectContainer.classList.remove('is-active');
  }
}

select();