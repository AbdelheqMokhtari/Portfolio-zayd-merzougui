
var i = 0;
var backgroundcolor = ["white","#ebe48f","#f3ec8a","#f3ea7c","#f8ed65","#efe34e","#f1e43c","#f3e210"];
function incr(){
  i++;
  document.getElementById('numb').innerHTML=i;
  document.body.style.backgroundColor=backgroundcolor[i];


}
function decr(){
  i--;
  document.getElementById('numb').innerHTML=i;
  document.body.style.backgroundColor=backgroundcolor[i];
}
