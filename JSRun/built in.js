<!DOCTYPE html> 

<html> 

  

<head> 

    <title> 

        assignment 

    </title> 

</head> 

  

<body style="text-align:center;"> 

  

    <h1>assignment</h1> 

      

    <p id="assign"></p> 

  

    <script> 

        function assignment(varObj) {  

            document.write("Inside assignment function");  

            document.write('<br/>'); 

            varObj.a = 100;  

            document.write(varObj.a);  

            document.write('<br/>'); 

        }  

          

        // Create object 

        varObj = {a:1}; 

          

       

        document.write("Before function calling");  

        document.write('<br/>'); 

        document.write(varObj.a); 

        document.write('<br/>'); 

          

        /* Function calling */ 

        assignment(varObj)  

          

        /* Display value of object after function call */ 

        document.write("After function calling"); 

        document.write('<br/>');  

        document.write(varObj.a); 

    </script> 

</body> 

  

</html> 

