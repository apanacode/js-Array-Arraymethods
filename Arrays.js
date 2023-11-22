document.writeln("<H3>Array_creation : </H3>"+"<br>")
var arr=[101,"shastri",'m']
document.writeln("TYPE OF ARR : ",typeof arr,"<br>")/* tells what type of variable it is object  */
document.writeln("verifiying whether it is array or not : ",Array.isArray(arr),"<br>")  /*returns boolean values */
document.writeln("ARRAY ELEMENTS ARE : ",arr,"<br>") /* retreival of elements */
document.writeln("length of array :",arr.length,"<br>")/*returns integer value of array length */
document.writeln("deleting the elements:",delete arr[2],"<br>")/* removal of elements from the array */
for(i=0;i<arr.length;i++) /* retreival of elements using looping statement */
{
    document.writeln(arr[i]+"<br>")
}
document.writeln("Inserting the elements into the array: ",arr[5]=134.3,"<br>") /* insertion of elements at particular index */
document.writeln("After insertion of elements into the array : ",arr)

document.writeln("<h3>Array creation using 'new' keyword </h3>","<br>")/*second way to initilaize of the array */
var kohli=new Array("45","rohit",133.4);
document.writeln("length of array : ",kohli.length,"<br>")
document.writeln("Array elements are : ",kohli,"<br>");

/*creating the new array with size declaration*/
var initilaizing=new Array(10);
document.writeln(initilaizing);


