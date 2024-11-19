function trocarValores() {
   
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira dois números válidos.");
        return;
    }

    
    var temp = num1;
    num1 = num2;
    num2 = temp;

    
    document.getElementById("resultado").innerText = 
        "Após a troca: \n" +
        "Primeiro número: " + num1 + "\n" +
        "Segundo número: " + num2;
}