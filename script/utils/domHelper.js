export function elemEditor (target, content) {
  document.querySelector(target).innerHTML = content;
}

export function multiElemSelector (target) {
  return document.querySelectorAll(target);
}

export function elemSelector (target) {
  return document.querySelector(target);
}