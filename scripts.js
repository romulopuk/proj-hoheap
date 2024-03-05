document.addEventListener('DOMContentLoaded', function() {
  var selects = document.querySelectorAll('select');

  if(selects !== null) {
    M.FormSelect.init(selects, {});
  }

  var elems = document.querySelectorAll('.sidenav');
  if(elems !== null) {
    M.Sidenav.init(elems, options);
  }
});