$('#get-image').on('click', function (params) {
    var XHRrequest = new XMLHttpRequest();
    XHRrequest.onload = function (){
        var JSONobj = JSON.parse(XHRrequest.response);
        $('#dog-image').attr('src', JSONobj.message);
    }

    XHRrequest.open('get','https://dog.ceo/api/breeds/image/random');
    XHRrequest.send();
})

$('#next').on('click',function(){
    var XHRrequest = new XMLHttpRequest();

    XHRrequest.onload = function(){
        var JSONobj = JSON.parse(XHRrequest.response);
        $('#dog-image').attr('src', JSONobj.message);
    }
    let url = 'https://dog.ceo/api/breed/' + $('.dog-selector').find(':selected').text() + '/images/random'; 
    XHRrequest.open('get',url);

    XHRrequest.send();
    
})