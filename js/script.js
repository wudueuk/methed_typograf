

const typeForm = document.querySelector('.form__typegraf');

const prepositions = ['в', 'без', 'до', 'для', 'за', 'через', 'над', 'по',
  'из', 'у', 'около', 'под', 'о', 'про', 'на', 'к', 'перед', 'при', 'с',
  'между'];

typeForm.addEventListener('submit', e => {
  e.preventDefault();
  const blankText = document.querySelector('#typetextarea');
  // проверка текста
  // на предлоги
  prepositions.forEach(elem => {
    const regex = new RegExp(`(\\s${elem})\\s`, 'gi');
    blankText.value = blankText.value.replace(regex, ` $1&nbsp;`);
  });

  // на знак копирайта
  blankText.value = blankText.value.replace(/#/g, '&#8470;')
      .replace(/©/g, '&#169;&nbsp;').replace(/\s-\s/g, '&#151;')
      .replace(/№/g, '&#8470;');

  // замена прямых ковычек на ёлочки
  blankText.value = blankText.value.replace(/(\s)\x22/g, '$1&laquo;');
  blankText.value = blankText.value.replace(/(\w?)\x22/g, '$1&raquo;');
});
