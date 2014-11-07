var getElement = function () {
  return document.querySelector('.wechat-share-guide');
};

var show = function () {
  var el = getElement();
  if (el) {
    el.style.display = 'block';
    el.onclick = el.onclick || hide;
  }
};

var hide = function () {
  var el = getElement();
  if (el) {
    el.style.display = 'none';
  }
};

exports.getElement = getElement;
exports.show = show;
exports.hide = hide;
