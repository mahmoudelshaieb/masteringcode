
var action = document.querySelectorAll('[data-action]');

action.forEach(element => {
  element.addEventListener('click', function() {
    console.log(element);
  })
});

alert('aaa')