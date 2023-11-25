# js-Array-Arraymethods #arraycreation #arrayaccessing #arraydeletion #arrayupdation #arrayinsertion 

Array - Array is also object which can store multiple type of elements into a single character/string.
Syntax - var arr=[10,34.5,"rathi"] ;

Difference between array and normal variable ?
variable which can store only single element of any datatype.
syntax: var name="kirani";
But whereas array can store multiple type of data elements in a single variable.
syntax: var arr=["Ravi shastri",1983,"coach","india"];

Checking whether it is array or not:
  Array.isArray(array_name) --> returns boolean value i..e., if it is array returns true otherwise false
  

* CREATION OF ARRAY :
  Creating of arrays can created into two different ways i..e..,
  i) At the time of declaration:
     Var id=[102,104,123,167]  /* array with four data elements of size four*/
     var empty_arr=[];  /* empty array */
  ii) Otherway of creating an array using "new" keyword :
      var marks=new Array(24,21,23,24,19,23);
      var array_size=new Array(10);
      /*above array is declaring the empty array with size of 10 */

* length property:
    for ex: var len=[10,23,432,234]
            len.length -->returns the length four(4).

* Deleting the elements:
  var del=[28,23,122,233]
  syntax: delete a[3]
  /* deleting the elements means the value of the element only deleted but not the memory space in that place it will show UNDEFINED */

* Updating the elements:
  var arr=[10,20,30]
   arr[2]=60  /* document.writeln(arr) --> [10,20.60] */
   arr[5]=96  /* document.writeln(arr) --> [10,20,60,undefined,undefined,96] */
  
* Accessing of elements:
  using index value we can retreive the elements.
  var arr1=[10,20,30,40,50] --> [arr1[0] , arr1[1] ,arr[2] , arr[3] , arr[4]] --> this are known as NUMBERED INDEX.

  using named index also we can access the elements.
  var kohli_details={"name":"virat kohli","age":35,"strike_rate":167.5}
  kohli_details.name --> virat kohli
  kohli_details.age --> 35              ---> this are known as NAMED INDEX.

  Accessing using loops:
  var strike_rate=[180,200,173,94.5,111.2]
  for(i=0;i<strike_rate.length;i++)
  {
  document.writeln(strike_rate[i])
  }

ARRAY METHODS:

* JAVASCRIPT ARRAY LENGTH : This array length() method is used to return the length of array.
  syntax : array_name.length();
  for example:
  var fruits=["apple","lemon","grapes"]
  document.writeln(fruits.length())
  output : 3
* JOIN METHOD : This join() method is used to joins all array elements into a string.It behaves just like toString(),but in additional you can specify the separator.
  syntax : array_name.join("delimit")
  var attach=[12,23,4,56,77]
  document.writeln(attach.join("+"))
  output : 12+23+4+56+77
* SORTING : This method is used sort the array elements into ascending order only for the strings(alphabetics).
  syntax : array_name.sort();
  for example : var months=new Array("june","may","jan");
  document.writeln(months.sort())
  output : jan,june,may
* POPPING AND PUSHING :
  When you work with arrays,  it is easy to remove elements and add new elements.This is what popping and pushing is:
  Popping items out of an array, or pushing items into an array.
  pop() method : The pop() method removes the last element from an array.It is used to return the popped out element.
  syntax : array_name.pop();
  for example : var fruits=["banana","grapes","mango"]
  document.writeln(fruits.pop())
  output : mango
  push() method : The push() method is used to add the elements into the array at the last index.It is used to return the length of the new array.
  syntax : array_name.push();
  for example : var fruits=["banana","grapes","mango"]
  document.writeln(fruits.push("lemon","orange"))
  output : 5
  * SHIFTING ELEMENTS :
    Shifting is equivalent to popping, but working on the first element instead of the last.
    Array shift() method : The shift() method removes the first array element and "shifts" all other elements to a lower index. The shift() method returns the value that was "shifted out".
    syntax : array_name.shift();
   for example :var fruits = ["Banana", "Orange", "Apple", "Mango"];
   document.writeln(fruits.shift());
    output : banana
    Array unshift() method : The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.The unshift() method returns the new array length.
      syntax : array_name.unshift();
   for example :var fruits = ["Banana", "Orange", "Apple", "Mango"];
   document.writeln(fruits.shift("lemon"));
    output : 5
  * MERGING (CONCATENATING) ARRAYS :
    The concat() method creates a new array by merging (concatenating) existing arrays.
    The concat() method can take any number of array arguments
    syntax :new_array=array1.concat(array2);
    for example : var classA_names=["rithu","iran","malla","viran"];
                  var classB_names=["seshu","aveent","sohu"];
                  var names=classA_names.concat(classB_names);
  * SPLICING AND SLICING ARRAYS :
    The splice() method adds new items to an array.
    The slice() method slices out a piece of an array.
    
  
    
  
  
  
     
