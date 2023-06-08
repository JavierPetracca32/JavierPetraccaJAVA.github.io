var nombre = prompt ("Ingrese su nombre, por favor");
if (nombre==null) {alert ("Debe ingresar un nombre");}
else if (nombre=="") {alert("Debe ingresar un nombre")}
else {alert ("Bienvenido " + nombre);}


function total (s=150,b=250,o=10,kat=15,k=25){
}  
document.getElementById("calcular").onclick= function(){
  let s = 0;
  let b = 0;
  let o = 0;
  let kat = 0;
  let k = 0; 
 if (document.getElementById ("s").checked) {s = 150;}
 if (document.getElementById ("b").checked) {b = 250;}
 if (document.getElementById ("o").checked) {o = 10;}
 if (document.getElementById ("kat").checked) {kat = 15;}
 if (document.getElementById ("k").checked) {k = 25;}
 let final = s+b+o+kat+k;
 alert ("Total a pagar="+final)
}

total();
  