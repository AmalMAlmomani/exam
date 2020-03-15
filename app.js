`use static`;
// var site1 = 'welcome!';
// var update = function (){
//     var el = document.getElementById('site');
//     el.textContent = site1;
// }
// update();
// var try1 = 'Hi!';
// function update1(){
//     var el1 = document.getElementById('q1');
//     el1.textContent=try1;
// }
// update1();

// function say (){
//     document.write('hello');
// }
// say();
// function multi(wid,hie){
//    var area = wid*hie;
//    var area1 = wid+hie;
//     return [area , area1];
// }

// var aa = multi(3,2);
// document.write(aa);

//  var area = {
//      hieght : 2 , 
//      width : 2 , 
//      aa : ['1','2','3'],
//      area1 : function(){
//          return this.hieght*this.width;
//      }


//  };
//  var a = area.area1();
//  document.write(a);
//  document.write(area.aa);


//  var family = { 
//      member : [ 2,4,1],
//      fun : function(){
//          return this.member[1]+this.member[2] ;

//      }

//  };


// document.write(family.member);
// document.write(family['fun()']);


// var tried = {
// a: 'amal',
//     x : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     add : function(){
//             var a = this.x[4] +this.x[9];
//             return a;
//         }
// };

// var q = document.getElementById('site');
// q.textContent = tried.x ;
// var q1 = document.getElementById('q1');
// q1.textContent = tried.add();

// var tried = new Object();
// tried.a = 'amal';
// tried.x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// tried.add = function(){
//                 var a = this.x[4] +this.x[9] +this.x[0];
//             return a;
// }

// document.write(tried.add());
// var q = document.getElementById('site');
// q.textContent = tried.x;
// document.write(tried.a);
// tried['a'] = 'amani';
// document.write(tried.a);
// tried['x'] = [10,9,8,7,6,5,4,3,2,1];
// document.write(tried['x']);


// function Hotel(name, room,book){
//     this.name=name;
//     this.room=room;
//     this.book=book;
//     this.add = function(){
//         return this.room+this.book;
//     };
// }

// var amman = new Hotel('amman',10,3);
// var saudi = new Hotel('saudi',20,8);

// var am = document.write(amman.name) + document.write(amman.add()) ;

// var sa = `${saudi.name} room :`;
// sa += amman.add();
// var x = document.getElementById('site');
// x.textContent = sa ;

// var aa = {
// mem1 : 'mahmmed',
// mem2 : 'linah ',
// mem3 :'eman',
// mem4 : function(){
//     return [this.mem1,this.mem2,this.mem3];
// }
// };

// document.write(aa.mem4() ) ;

// aa.mem5 = 'amal';
// document.write(aa.mem5);
// delete aa.mem1;
// document.write(aa.mem4());

// aa.mem6 = true ;
// aa.mem7= false;
// document.write(aa.mem7);


// var width = 600;
// var shape = {width: 300};
// var showWidth = function(){
// document.write(this.width);
// };
// showWidth();
// shape.tWidth = showWidth;
// shape.tWidth();



// var arr = ['a','b','c'];
// document.write(arr[1]);



// var x = document.getElementsByClassName('id');
// if(x.length>=1){
//     var y = x.item(0);
// }


// var z = document.getElementsByTagName('ol');
// if(z.length){
//     var c = z.item[3];
// }
var e = document.getElementById('q2').innerHTML= elContne;