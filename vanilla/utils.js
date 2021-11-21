function hasClass(el, className) {
  return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
  if (!hasClass(ele, className)) ele.className += " " + className;
}

function removeClass(el, className) {
  if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className=el.className.replace(reg,' ');
  }
}