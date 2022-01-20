<!DOCTYPE html> 

<html> 

  

<head> 

    <title> 

        arrow 

    </title> 

</head> 

  

<body style="text-align:center;"> 

  

    <h1>assignment</h1> 

      

    <p id="assign"></p> 

      

    

        passed by value --> 

    <script> 

      

        /* Function definition */ 

        function assignment(var1, var2) {  

            document.write("Inside the assignment function");  

            document.write('<br/>'); 

              

            var1 = 100;  

            var2 = 200;  

              

            /* Display the value of variable inside function */ 

            document.write("var1 =" + var1 +" var2 =" +var2);  

            document.write('<br/>'); 

        }  

          

        var1 = 10;  

        var2 = 20; 

          

        /* The value of variable before Function call */ 

        document.write("Before function calling");  

        document.write('<br/>'); 

          

        document.write("var1 =" + var1 +" var2 =" +var2);  

        document.write('<br/>'); 

          

        /* Function call */ 

        assignment(var1,var2); 

          

        /* The value of variable after Function call */ 

        document.write("After function calling");  

        document.write('<br/>'); 

          

        document.write("var1 =" + var1 +" var2 =" +var2); 

        document.write('<br/>'); 

    </script> 

</body> 

  

</html> 

