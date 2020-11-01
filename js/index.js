$(function () {
    $("[data-toggle='tooltip']").tooltip();
});

$(function () {
    $("[data-toglle='popover']").popover;
});

$('.carousel').carousel({
    interval: 1000
});

$('#reserva').on('show.bs.modal', function (e) {
    console.log('Modal Activo');

    $('#reserva-btn').removeClass('btn-primary');
    $('#reserva-btn').addClass('btn-outline-success');
    $('#reserva-btn').prop('disable', true);
});

$('#reserva').on('shown.bs.modal', function (e) {
    console.log('Modal se activó');
});

$('#reserva').on('hide.bs.modal', function (e) {
    console.log('Modal desactivandose');
});

$('#reserva').on('hidden.bs.modal', function (e) {
    console.log('Modal se desactivó');
    $('#reserva-btn').prop('disabled', false);
});