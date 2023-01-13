const anchors = document.querySelectorAll('a');

anchors.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});