$(document).ready(function () {

    var $randomnbr = $('.nbr');
    var $timer = 20;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["न", "म", "स्ते", "मे", "रा", " ", "ना", "म", " ", "अं", "कि", "त", " ", "कु", "मा", "र", " ", "है", "H", "E", "L", "L", "O","M","Y"," ","N","A","M","E"," ","I","S"," ","A","N","K","I","T"," ","K","U","M","A","R"," "," "," "];

    $randomnbr.each(function () {

        change = Math.round(Math.random() * 100);
        $(this).attr('data-change', change);

    });

    function random() {
        return Math.round(Math.random() * 9);
    };

    function select() {
        return Math.round(Math.random() * $randomnbr.length + 1);
    };

    function value() {
        $('.nbr:nth-child(' + select() + ')').html(' ' + random() + ' ');
        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
        $data++;

        $randomnbr.each(function () {
            if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                index = $('.ltr').index(this);
                $(this).html(letters[index]);
                $(this).removeClass('nbr');
            }
        });

    };

    $it = setInterval(value, $timer);

});
