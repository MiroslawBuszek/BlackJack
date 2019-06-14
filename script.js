let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');
textArea.innerText = 'hello world';

okButton.addEventListener('click', function() {
  textArea.innerText = 'Button clicked';
});
