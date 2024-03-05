document.addEventListener('DOMContentLoaded', function() {
  var selects = document.querySelectorAll('select');
  var elems = document.querySelectorAll('.sidenav');
    M.FormSelect.init(selects, {});
    M.Sidenav.init(elems, {});
});