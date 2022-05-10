$('.coundown_res').countdown('2018/06/14', function(event) {
    var $this = $(this);
    $this.find('#day').html(event.strftime('<span>%D</span>'));
    $this.find('#hour').html(event.strftime('<span>%H</span>'));
    $this.find('#month').html(event.strftime('<span>%M</span>'));
    $this.find('#second').html(event.strftime('<span>%S</span>'));
});
