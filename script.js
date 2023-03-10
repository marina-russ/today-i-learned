const btnOpenHidden = document.querySelector('.btn-open-hidden');
const factForm = document.querySelector('.fact-form');

btnOpenHidden.addEventListener('click', function () {

  if (factForm.classList.contains('hidden')) {
    factForm.classList.remove('hidden');
    btnOpenHidden.textContent = "Close";
    console.log('Click Event - Reveal!');
  } else {
    factForm.classList.add('hidden');
    btnOpenHidden.textContent = "Share A Fact";
    console.log('Click Event - Hide!');
  }
});