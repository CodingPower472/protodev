$(document).ready(function () {
    var inputOne = '';
    var inputTwo = '';
    var operator = '';
    var output = 0;
    /*add number into a string*/
    $('.num').click(function () {
            inputOne += $(this).val();
            $('#output').html(inputOne);
        })
        /*keep track of the operator, set the current number to inputTwo, reset inputOne*/
    $('.operator').click(function () {
            operator = $(this).val();
            inputTwo = inputOne;
            inputOne = '';
        })
        /*equals function*/
    $('#equals').click(function () {
        /*define operation*/
        if (operator == '+') {
            output = eval(parseInt(inputOne) + parseInt(inputTwo));
        } else if (operator == '-') {
            output = eval(parseInt(inputOne) - parseInt(inputTwo));
        } else if (operator == '/') {
            output = eval(parseInt(inputOne) / parseInt(inputTwo));
        } else if (operator == '*') {
            output = eval(parseInt(inputOne) * parseInt(inputTwo));
        }
        $('#output').html(output);
        inputOne = '';
        inputTwo = '';
    })

    $('#clear').click(function () {
        inputOne = '';
        inputTwo = '';
        $('#output').html('');
    })

});
