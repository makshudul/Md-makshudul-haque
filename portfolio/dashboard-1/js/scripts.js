
$(document).ready(function(){
    // Table Row Spacer
    $("tbody tr:not(tbody tr:first-child, tbody tr.full-row)").before('<tr class="tr-spacer"/>');

    // Table Row Expand
    $(".row-expand").click(function(){
        $('i', this).toggleClass('fas fa-caret-down fas fa-caret-up');
        $(this).parents('tr').toggleClass('box-shadow');
        $(this).parents('tr').next("tr.full-row").toggleClass("show-row")
    });

    $(".expand_all").click(function(){
        $('body').find('tr.full-row').toggleClass("show-row");
        $("body").find('.row-expand i').toggleClass("fas fa-caret-down fas fa-caret-up")
    });

    // Navbar Expadn
    $(".expand-navbar").click(function(){
        $('.sidebar-wrap').toggleClass('small-nav');
        $(".main-content").toggleClass('big-main-content')
        return false;
    })


    var sheet = document.createElement('style'),  
    $rangeInput = $('.range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

    document.body.appendChild(sheet);
    var range_val = $(".range input").attr('max');
    
    var range_val_2 = range_val - 1;
    var fix_rangel = 100 / range_val_2 ;

    // li width
    var add_p = fix_rangel + '%';
    $(".range-labels li").css("width", add_p);

    var getTrackStyle = function (el) {  
    var curVal = el.value,
        val = (curVal - 1) * fix_rangel,
        style = '';
    
    // Set active label
    $('.range-labels li').removeClass('active selected');
    
    var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
    
    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected');
    
    // Change background gradient
    for (var i = 0; i < prefs.length; i++) {
        style += '.range {background: linear-gradient(to right, #FF9500 0%, #FF9500 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
        style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #FF9500 0%, #FF9500 ' + val + '%, #F9F9F9 ' + val + '%, #F9F9F9 100%)}';
    }

    return style;
    }

    $rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
    });

    // Change input value on label click
    $('.range-labels li').on('click', function () {
    var index = $(this).index();
    
    $rangeInput.val(index + 1).trigger('input');
    
    });
});

jQuery(function($) {
	$.fn.select2.amd.require([
    'select2/selection/single',
    'select2/selection/placeholder',
    'select2/selection/allowClear',
    'select2/dropdown',
    'select2/dropdown/search',
    'select2/dropdown/attachBody',
    'select2/utils'
  ], function (SingleSelection, Placeholder, AllowClear, Dropdown, DropdownSearch, AttachBody, Utils) {

		var SelectionAdapter = Utils.Decorate(
      SingleSelection,
      Placeholder
    );
    
    SelectionAdapter = Utils.Decorate(
      SelectionAdapter,
      AllowClear
    );
          
    var DropdownAdapter = Utils.Decorate(
      Utils.Decorate(
        Dropdown,
        DropdownSearch
      ),
      AttachBody
    );
    
    var reference_year = $('.reference-year')
    $(reference_year).select2({
        placeholder: 'Select Reference Year',
        selectionAdapter: SelectionAdapter,
        dropdownAdapter: DropdownAdapter,
        allowClear: true,
        templateResult: function (data) {

            if (!data.id) { return data.text; }

            var $res = $('<div></div>');

            $res.text(data.text);
            $res.addClass('wrap');

            return $res;
        },
        templateSelection: function (data) {
            if (!data.id) { return data.text; }
            var selected = ($(reference_year).val() || []).length;
            var total = $('option', $(reference_year)).length;
            return "Selected " + selected + " of " + total;
        }
    });

    var reference_role = $('.reference_role')
    $(reference_role).select2({
        placeholder: 'Select Multiple Reference Roles',
        selectionAdapter: SelectionAdapter,
        dropdownAdapter: DropdownAdapter,
        allowClear: true,
        templateResult: function (data) {

            if (!data.id) { return data.text; }

            var $res = $('<div></div>');

            $res.text(data.text);
            $res.addClass('wrap');

            return $res;
        },
        templateSelection: function (data) {
            if (!data.id) { return data.text; }
            var selected = ($(reference_role).val() || []).length;
            var total = $('option', $(reference_role)).length;
            return "Selected " + selected + " of " + total;
        }
    });

    var reference_dept = $('.reference_dept')
    $(reference_dept).select2({
        placeholder: 'Departments of reference ',
        selectionAdapter: SelectionAdapter,
        dropdownAdapter: DropdownAdapter,
        allowClear: true,
        templateResult: function (data) {

            if (!data.id) { return data.text; }

            var $res = $('<div></div>');

            $res.text(data.text);
            $res.addClass('wrap');

            return $res;
        },
        templateSelection: function (data) {
            if (!data.id) { return data.text; }
            var selected = ($(reference_dept).val() || []).length;
            var total = $('option', $(reference_dept)).length;
            return "Selected " + selected + " of " + total;
        }
    });

    var reference_price = $('.reference_price')
    $(reference_price).select2({
        placeholder: 'Departments of reference  ',
        selectionAdapter: SelectionAdapter,
        dropdownAdapter: DropdownAdapter,
        allowClear: true,
        templateResult: function (data) {

            if (!data.id) { return data.text; }

            var $res = $('<div></div>');

            $res.text(data.text);
            $res.addClass('wrap');

            return $res;
        },
        templateSelection: function (data) {
            if (!data.id) { return data.text; }
            var selected = ($(reference_price).val() || []).length;
            var total = $('option', $(reference_price)).length;
            return "Selected " + selected + " of " + total;
        }
    });
  
  });
  
});