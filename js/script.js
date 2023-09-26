$(document).ready(function () {
    // При клике на кнопку открываем соответствующее модальное окно
    $(".open-modal").click(function () {
        var targetModalId = $(this).data("target");
        $(targetModalId).modal('show');
    });

    // При клике на кнопку закрыть внутри модального окна, закрываем это окно
    $(".modal .close").click(function () {
        $(this).closest(".modal").modal('hide');
    });

    // При клике вне модального окна, закрываем его
    $(window).click(function (event) {
        if ($(event.target).hasClass("modal")) {
            $(event.target).modal('hide');
        }
    });

    // Активация каруселей
    $(".carousel").carousel();
});



