// function add () {
//     //var a = document.getElementById('inpt1').value;
//    var a = $('#inpt1').val();
//    $('#inpt1').css('border-color', 'red');
//     console.log(a);
// }

// $('button').click(function(){
//     //var users = ['BMW', 'AUDI', 'TOYOTA'];

//     var bids = [
//         {id: 1, name: 'Ravi', isAdmin: false},
//         {id: 2, name: 'Raja', isAdmin: true},
//         {id: 3, name: 'Mani', isAdmin: false},
//         {id: 4, name: 'Pram', isAdmin: true},
//         {id: 5, name: 'Jeeva', isAdmin: false}
//     ];


//     $.each(bids, function(i, v){
//         console.log(v.name);
//     });
//     // for (var i = 0; i < users.length; i++) {
//     //     console.log(users[i]);
//     // }

//     // $.each(users, function(i, v){
//     //     //console.log(user + '------' + index);
//     //     console.log(v);
//     //     console.log(users[i]);
//     // });

//    // console.log(cars.age);

//     // var a = $('#inpt1').val();
//     // $('#inpt1').css('border-color', 'red');
//     // console.log(a);
// });

$(function(){
    getUsers();
});


function getUsers() {
    $.get('https://jsonplaceholder.typicode.com/users', function(data){
        var res = '';
        $.each(data, function(i,v){
            res += '<li>'+ v.name +'</li>';
        });
        console.log(res);
        $('#group').append(res);
    });
}

function getUser(userId) {
    $.get('https://jsonplaceholder.typicode.com/users/' + userId, function(data){
        console.log(data.name);
    });
}
