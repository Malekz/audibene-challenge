/* Manipulate the DOM when screen is less the 600 screen width */

var articleDate = document.getElementById('js-date');

/* Dynamic date function */
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function dynamicDate() {
  var n = new Date();
  var y = n.getFullYear();
  var m = months[n.getMonth()];
  d = n.getDate() - 2;

  if (window.innerWidth > 600) {
    m = months[n.getMonth()];
    document.getElementById('article__date').innerHTML = d + ' ' + m + ', ' + y;
  } else {
    m = n.getMonth();
    document.getElementById('article__date').innerHTML = d + '/' + m + '/' + y;
  }
}

dynamicDate();
window.addEventListener('resize', dynamicDate);
//window.onresize=dynamicDate
