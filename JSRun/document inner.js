<script>
function showMsg(){
  var userInput = document.getElementById('userInput').value;
  document.getElementById('userMsg').innerHTML = userInput;
}
</script>
<input type="input" maxlength="40" id="userInput" onkeyup="showMsg()" placeholder="Enter text here...">
<p id="userMsg"></p>