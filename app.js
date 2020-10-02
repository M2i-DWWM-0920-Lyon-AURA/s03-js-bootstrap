// Permet de faire fonctionner les popovers de Bootstrap
$(function () {
  $('[data-toggle="popover"]').popover()
})

$('#alert button.close').click(
  function () {
    $('#alert').remove();
  }
);

$('#paragraph > p > button').click(
  function () {
    $('#paragraph .collapse').toggleClass('show');
  }
);

$('#popover > button').click(
  function () {
    if($('#popover').has('.popover').length === 0) {
      $('#popover').append($('<div class="popover fade bs-popover-top show" style="will-change: transform; position: absolute; transform: translate3d(-55px, -67px, 0px); top: 0px; left: 0px;" x-placement="top"><div class="arrow" style="left: 124px;"></div><h3 class="popover-header"></h3><div class="popover-body">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'))
    } else {
      $('#popover .popover').remove();
    }
  }
)
