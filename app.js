const anchors = document.querySelectorAll('li a');
const buttons = document.querySelectorAll('.post');

anchors.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    content = e.target.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});





