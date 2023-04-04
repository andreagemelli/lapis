(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    });


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);

function edit(color) {

    document.getElementById("head").style.backgroundColor = color;
    document.getElementById("menu").style.backgroundColor = color;
}

function closeApp() {
    var email = localStorage.getItem("email");
    document.addEventListener('pause', function () {
        var avaiable = 1;
        $.ajax({
            type: 'GET',	//Request method: GET, POST
            url: 'http://gemelligiuntinihci.altervista.org/myPHP/professor/setAvaiable.php',  //Where to send the data
            crossDomain: true,
            cache: false,
            data: {avaiable, email},
            success: function (data) {
                if (data != "success") {
                    if (data == "failed")
                        alert("Server error 1");
                    else
                        alert("Server error 2");
                }
            }
        });
    }, false);
    document.addEventListener('resume', function () {
        var avaiable = 0;
        $.ajax({
            type: 'GET',	//Request method: GET, POST
            url: 'http://gemelligiuntinihci.altervista.org/myPHP/professor/setAvaiable.php',  //Where to send the data
            crossDomain: true,
            cache: false,
            data: {avaiable, email},
            success: function (data) {
                if (data != "success") {
                    if (data == "failed")
                        alert("Server error 1");
                    else
                        alert("Server error 2");
                }
            }
        });
    }, false);
}