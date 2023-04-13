function changeOpacity() {
  var all = document.querySelector('header');
  all.style.opacity = 0.5;
  var rest = document.getElementById('content');
  rest.style.opacity = 0.5;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 0.5;
  document.getElementById('first-info').style.display = 'flex';
}

function changeOpacity2() {
  var all = document.querySelector('header');
  all.style.opacity = 0.5;
  var rest = document.getElementById('content');
  rest.style.opacity = 0.5;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 0.5;
  document.getElementById('second-info').style.display = 'flex';
}

function changeOpacity3() {
  var all = document.querySelector('header');
  all.style.opacity = 0.5;
  var rest = document.getElementById('content');
  rest.style.opacity = 0.5;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 0.5;
  document.getElementById('troisieme-info').style.display = 'flex';
}

function changeOpacity4() {
  var all = document.querySelector('header');
  all.style.opacity = 0.5;
  var rest = document.getElementById('content');
  rest.style.opacity = 0.5;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 0.5;
  document.getElementById('quatrieme-info').style.display = 'flex';
}

function changeOpacity5() {
  var all = document.querySelector('header');
  all.style.opacity = 0.5;
  var rest = document.getElementById('content');
  rest.style.opacity = 0.5;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 0.5;
  document.getElementById('cinquieme-info').style.display = 'flex';
}

function changeOpacity6() {
  var all = document.querySelector('header');
  all.style.opacity = 0.5;
  var rest = document.getElementById('content');
  rest.style.opacity = 0.5;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 0.5;
  document.getElementById('sixieme-info').style.display = 'flex';
}

function changeOpacity7() {
  var all = document.querySelector('header');
  all.style.opacity = 0.5;
  var rest = document.getElementById('content');
  rest.style.opacity = 0.5;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 0.5;
  document.getElementById('septieme-info').style.display = 'flex';
}

function changeOpacity8() {
  var all = document.querySelector('header');
  all.style.opacity = 0.5;
  var rest = document.getElementById('content');
  rest.style.opacity = 0.5;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 0.5;
  document.getElementById('huitieme-info').style.display = 'flex';
}

function retourNormal() {
  var all = document.querySelector('header');
  all.style.opacity = 1;
  var rest = document.getElementById('content');
  rest.style.opacity = 1;
  var bottom = document.getElementById('bottom-header');
  bottom.style.opacity = 1;
  document.getElementById('first-info').style.display = 'none';
  document.getElementById('second-info').style.display = 'none';
  document.getElementById('troisieme-info').style.display = 'none';
  document.getElementById('quatrieme-info').style.display = 'none';
  document.getElementById('cinquieme-info').style.display = 'none';
  document.getElementById('sixieme-info').style.display = 'none';
  document.getElementById('septieme-info').style.display = 'none';
  document.getElementById('huitieme-info').style.display = 'none';
}


function goUp() {
  var up = document.getElementById('scroll-top-button');
  up.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: "smooth",
  }))
}
