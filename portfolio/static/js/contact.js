$(document).ready(function(){
    $('#message').click(function(){
        $('.message').toggle();
        $('.message-con').css('display', 'block');
        var name = $('#what-name').val();
        var email = $('#what-email').val();
        var message = $('#what-message').val();

        $('#name').text(name);
        $('#name-con').val(name);
        $('#email').text(email);
        $('#email-con').val(email);
        $('#mess').text(message);
        $('#message-con').val(mess);

        var named = $('#name').val();
        var emailed = $('#email').val();
        var messed = $('#mess').val();
        console.log(named);
        console.log(emailed);
        console.log(messed);

        $('#name-con').val(named);
        $('#email-con').val(emailed);
        $('#message-con').val(messed);
        
    });

    $('#edit-mess').click(function(){
        $('.message').toggle();
        $('.message-con').toggle();
        console.log('this was clicked');
    });

    $('#confirming').hover(function(){

        $('.con').toggleClass('green');
        $('#choice').text('confirm');

    });
    $('#edit-mess').hover(function(){

        $('.con').toggleClass('red');
        $('#choice').text('edit');

    });
});