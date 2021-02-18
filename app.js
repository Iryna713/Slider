function slideEffect(page) {
  let wrapper = document.querySelector('.wrapper');

  switch(page) {
    case '.all':
      wrapper.style.cssText = "right: 0px;";
      break;
    case '.home':
      wrapper.style.cssText = "right: 350px;"
      break;
    case '.new':
      wrapper.style.cssText = "right: 700px;"
      break;
  }

  return false;
}

function copyText(event) {
  let text = event.target.innerText;
  let textArea = document.createElement('textarea');
  textArea.width = "1px";
  textArea.height = "1px";
  textArea.background = "transparents";
  textArea.value = text;
  document.body.append(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  let message = document.createElement('span');
  message.innerText = 'Copied!';
  event.target.after(message);

  setTimeout(() => message.remove(), 1000);
}
