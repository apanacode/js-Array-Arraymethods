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
  
  
  
     
