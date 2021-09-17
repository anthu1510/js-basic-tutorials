
// function add(a, b) {
//     var inp1 =  document.getElementById('inp1');
//     var input = inp1.value;
//     users.push(input);
//     inp1.value = '';
//     showList();
//     //alert('welcome');
// }

// function showList() {
//     var res = document.getElementById('res');
//     res.innerHTML = JSON.stringify(users);
// }

function add() {
    //var res = document.getElementById('res');
    var input1 = document.getElementById('inp1').value;
    var input2 = document.getElementById('inp2').value;
    document.getElementById('inp3').value = parseInt(input1) + parseInt(input2);
    //input3.value = parseInt(input1) + parseInt(input2);
}
