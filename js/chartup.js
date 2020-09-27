// var num = 10000 //这个是num 值
// var currentNum =500
// var html = document.getElementsByClassName('no-size');
// // console.log(html)
// var abs =120
// var interval = null

// start()

// function start () {
//   interval = setInterval(function () {
//     currentNum = currentNum + abs
//     for (var i = 0; i <= html.length - 1; i++) {
//       set(i, currentNum)
//     }
//     if (currentNum + abs > num) {
//       clearInterval(interval)
//       for (var j = 0; j <= html.length - 1; j++) {
//         set(j, num)
//       }
//     }
//   })
// }

// function set (index, num) {
//   html[index].innerHTML = num.toString()[index] ?? 0
// }
// var container = document.getElementById('container');
// var ul = document.getElementById('ul');
// var timer = null;
// function lunPo() {
//     if(!timer) {
//         var count = 0;
//         timer = setInterval(function() {
//             count +=1;
//             ul.style.top = count + 'px';
//             if(count >=65) {
//                 count = 0;
//                 var flag;
//                 flag = ul.children[0].cloneNode(true);
//                 ul.removeChild(ul.children[0]);
//                 ul.appendChild(flag)
//             }
//         },10)
//     }
// }
// lunPo();