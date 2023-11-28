module.exports = function () {

  let text = document.querySelector('.share__copy-input-text').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  $('.share__copy-input-text').on('click', function (e) {
    e.preventDefault();
    copyContent();
  });


};