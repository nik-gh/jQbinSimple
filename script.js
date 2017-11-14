function update() {
  $('iframe').contents().find('html').html(`<html><head><style type='text/css'>${$('#cssPan').val()}</style></head><body>
    ${$('#htmlPan').val()}</body></html>`);

  document.getElementById('outputPan').contentWindow.eval($('#jsPan').val());
}

$('.toggleButton').hover(function () {
  $(this).addClass('highlightedbtn');
}, function () {
  $(this).removeClass('highlightedbtn');
});

$('.toggleButton').click(function () {
  $(this).toggleClass('active');
  $(this).removeClass('highlightedbtn');

  const panelId = `${$(this).attr('id')}Pan`;
  $(`#${panelId}`).toggleClass('hidden');
  const numOfPanels = 4 - $('.hidden').length;
  $('.panel').width(($(window).width() / numOfPanels) - 10);
});

$('.panel').height($(window).height() - $('#header').height() - 14);
$('.panel').width(($(window).width() / 2) - 10);

update();

$('textarea').on('change keyup paste', () => {
  update();
});
