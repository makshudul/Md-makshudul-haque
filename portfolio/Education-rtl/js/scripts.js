$(document).ready(function(){
    tpj('input[type="checkbox"]').click(function(){
      var inputValue = tpj(this).attr("value");
        tpj("." + inputValue).slideToggle();
    });
    
    
   tpj('.dropdown-item').hover(
    function(){ tpj(this).parents('.nav-item.dropdown').addClass('hover') },
    function(){ tpj(this).parents('.nav-item.dropdown').removeClass('hover') }
    );
   
    tpj(".btn-search-dropdown").click(function(){
        tpj(this).toggleClass('show_border');
        tpj(this).siblings(".search-dropdown-menu").toggleClass('show')
    });
    tpj('[data-toggle="datepicker"]').datepicker({
      inline:true,
      language:''
    });
    tpj('[data-toggle="end-date"]').datepicker({
      autoPick:true
    });
    tpj('[data-toggle="start-date"]').datepicker({
      autoPick:true
    });
    tpj('.open_box').click(function(){
      tpj('i', this).toggleClass('fas fa-caret-left fas fa-caret-down')
      tpj('.advance_search_form-box').slideToggle();
      return false
    });

    tpj(".add_comment").click(function(){
      tpj(this).hide();
      tpj('.comment_form').addClass('show');

      return false;
    });

    tpj('.category_label').select2();
    tpj('.tags_input').select2();
    
    tpj('.stellarnav').stellarNav({
        theme: 'dark',
        breakpoint: 991,
        position: 'left',
        menuLabel: false,
        closeLabel: false,
        showArrows: true,
    });
    
   
    tpj('.gallery_card').simpleLightbox({ 
        rtl: true
    });

    
    
   
});


    

    



var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

function yelonmoreh_onSelectDonationType ()
{
	tpj("#onceTotal").prop("disabled", true);
	tpj("#monthlyTotal").prop("disabled", true);
	tpj("#onePaymentTotal").prop("disabled", true);
	tpj("#paymentsNo").prop("disabled", true);

	if (tpj("#once").prop("checked"))
	{
		tpj("#onceTotal").prop("disabled", false);

		tpj("#monthlyTotal").val("");
		tpj("#onePaymentTotal").val("");
		tpj("#paymentsNo").val("");
	}
	else if (tpj("#monthly").prop("checked"))
	{
		tpj("#monthlyTotal").prop("disabled", false);

		tpj("#onceTotal").val("");
		tpj("#onePaymentTotal").val("");
		tpj("#paymentsNo").val("");
	}
	else if (tpj("#payments").prop("checked"))
	{
		tpj("#onePaymentTotal").prop("disabled", false);
		tpj("#paymentsNo").prop("disabled", false);

		tpj("#onceTotal").val("");
		tpj("#monthlyTotal").val("");
	}

	return true;
}

// cart Item Increase & Decrease

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


