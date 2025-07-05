
document.getElementById("setaDir").addEventListener("click", function(){   
if (document.getElementById("audEstoque").style.display === "block") {
    document.getElementById("audEstoque").style.display = "none";
    document.getElementById("audPedidos").style.display = "block";
} else {
    document.getElementById("audEstoque").style.display = "block";
    document.getElementById("audPedidos").style.display = "none";
}
});

document.getElementById("setaEsq").addEventListener("click", function(){  
  if (document.getElementById("audEstoque").style.display === "block") {
    document.getElementById("audEstoque").style.display = "none";
    document.getElementById("audPedidos").style.display = "block";
  } else {
    document.getElementById("audEstoque").style.display = "block";
    document.getElementById("audPedidos").style.display = "none";
  }
});
