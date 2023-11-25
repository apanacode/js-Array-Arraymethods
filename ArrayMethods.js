document.writeln("<h2>ARRAY METHODS</h2>")
//ARRAY METHODS
var sectionA_id=[101,109,134,123,100];
var sectionB_id=[65,78,99,83,91];

document.writeln("<h3>sectionA_id : </h3>",sectionA_id)
document.writeln("<h3>sectionB_id : </h3>",sectionB_id,"<br>")
document.writeln("<br>")
document.writeln("<h3>JOIN METHOD:</h3>")
document.writeln("join() method : ",sectionA_id.join(" "),"<br>");
document.writeln("join() method :", sectionA_id.join("@"),"<br>");
 

//sorting the elements
var months=new Array("jan","march","june","oct","may")
document.writeln("<h3>SORTING</h3>");
document.writeln("<h3>months : </h3>",months,"<br>");
document.writeln("sort() method : ",months.sort(),"<br>");


// reversing the elements:
var reversing_elements=[10,20,30,40,50]
document.writeln("<h3>reversing_elements : </h3>",reversing_elements,"<br>")
document.writeln("reverse the elements : ",reversing_elements.reverse(),"<br>");
document.writeln("After reversing the elements : ",reversing_elements,"<br>");

// pushing and popping :

document.writeln("push the elements into the array of sectionB_id : ","<h5>",sectionB_id.push(97),"</h5>","-shows the length of the array<br>");
document.writeln("After pushing the elements into the array",sectionB_id,"<br>")

var items=new Array("carrot","greenleaves","brinjal","onions","corn","cabbage","beet") ;
document.writeln("items list : ",items,"<br>");
document.writeln("pop(removing the top element from the items list ) : ",items.pop());
document.writeln("After popping the item from the array : ",items,"<br>");

//shift and unshift :

var toshift_elements=[100,200,300,400];
document.writeln("<h3>toshift : </h3>",toshift_elements,"<br>");
document.writeln("delets the first element : ",toshift_elements.shift(),"<br>");
document.writeln("after applying the shift function : ",toshift_elements,"<br>");

var tounshift_elements=[500,600,700,800]
document.writeln("<h3>tounshift_elements  : </h3>",tounshift_elements,"<br>");
document.writeln("deleting the first element : ",tounshift_elements.unshift(450),"<br>");
document.writeln("After applying the unshift function : ",tounshift_elements,"<br>");

var classA_names=["iran","afrani","ramu","sirisha"]
var classB_names=["rithu","lavvan","greek","girish"]
var names=classA_names.concat(classB_names);
document.writeln("concating the two arrays : ",names)

//splice and slice
document.writeln("<h3>SPLICING AND SLICING</h3><br>")
var roll_no=[102,123,234,101,145]
document.writeln("roll_no : ",roll_no,"<br>")
document.writeln("splicing :",roll_no.splice(2,3,154,106),"<br>");
document.writeln("slicing",roll_no.slice(0,3))

