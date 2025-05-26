n1 = document.getElementById("button");
n2 = document.getElementById("form");
let modoClaro = true;
n1.onclick = function(){
    if(modoClaro){
        document.body.style.backgroundColor = "black";
        document.getElementById("form").style.color = "white"
    }else{
        document.body.style.backgroundColor = "white";
        document.getElementById("form").style.color = "black"
    }
    if(modoClaro){
        n1.src="visao1.png"
    }else{
        n1.src="visao2.png"
    }
    modoClaro = !modoClaro;
}



