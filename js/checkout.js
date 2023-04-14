$(document).ready(function () {
    // Show / hide shipping address
    $('#ship_to_different_address').on('change',function(){
        if ($(this).prop("checked")) {
            $('.different-address-container').show('slow');
            $('.shipping-input.required').each(function () {
                $(this).prop('required', true);
            });
        } else {
            $('.different-address-container').hide();
            $('.shipping-input').each(function () {
                $(this).val('');
                $(this).prop('required', false);
            });
        }
    });

    // Show / hide shipping address
    $('#privacy_consent').on('change',function(){
        if ($(this).prop("checked")) {
            $('#form_submit').prop('disabled', false);
        } else {
            $('#form_submit').prop('disabled', true);
        }
    });


});