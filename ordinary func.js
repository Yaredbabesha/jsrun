<!DOCTYPE html> 

<html> 

  

<head> 

    <title> 

        ordinary function

    </title> 

</head> 

  

<body style="text-align:center;"> 

  

    <h2>assignment</h2> 

  

    <p>Finding the largest number : (5, 45, 7)</p> 

  

    <p id="assign"></p> 

  

    <script> 

        function GFG( var1, var2, var3 ) { 

            if( var1 > var2 ) { 

                if( var1 > var3 ) { 

                    return var1; 

                } 

                else { 

                    return var3; 

                } 

            } 

            else { 

                if( var2 > var3 ) { 

                    return var2; 

                } 

                else { 

                    return var3; 

                } 

            } 

        }  

        document.getElementById("assign").innerHTML 

                = GFG(5, 45, 7); 

    </script> 

</body> 

  

</html>

