const a = document.querySelector("#valorA");
const b = document.querySelector("#valorB");
const c = document.querySelector("#valorC");
const btn = document.querySelector("#calcular");
//Mostrar ao usuário que o campo não foi atendido
a.onblur = () =>{
    if(a.value == ""){
    l1.style = "color: #aa0044";
    a.style = "border-color: #aa0044";
    }else{
        l1.style = "color: black";
        a.style = "color: black";
    }
}
b.onblur = () =>{
    if(b.value == ""){
    l2.style = "color: #aa0044";
    b.style = "border-color: #aa0044";
    }else{
        l2.style = "color: black";
        b.style = "color: black";
    }
}
c.onblur = () =>{
    if(c.value == ""){
    l3.style = "color: #aa0044";
    c.style = "border-color: #aa0044";
    }else{
        l3.style = "color: black";
        c.style = "color: black";
    }
}
btn.onclick = () =>{
    if(a.value ==""){
        a.focus();
    }
    else if(b.value ==""){
        b.focus();
    }else if(c.value ==""){
        c.focus();
    }else{
        calculando(a.value, b.value, c.value);
    }
}
//Fazendo a veriificação 
const calculando = (a, b, c) => {
    var delta =(b**2-(4*a*c));
      if (delta<0) {
        alert("Valor de Delta é: "+delta)
        alert("Não existe raízes reais");
      }
      else if (delta>0) {
        let r1 = (-b + Math.sqrt(delta)) / (2 * a);
        let r2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Valor de Delta é: "+delta)
        alert("Valor da 1ª Raiz: "+r1);
        alert("Valor da 2ª Raiz: "+r2);
        }
      else{ 
        let r = (-b)/(2*a);
        alert("O valor de Delta é: " +delta);
        alert("Valor da raiz única é: " +r);
      }
      }
