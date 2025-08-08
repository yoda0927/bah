let produtos

window.onload = function(){
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)

    var dataEntrada = new Date(user.dataEntrada);
    var dataFormatada = dataEntrada.toLocaleString("pt-BR", {
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour:"2-digit",
        minute:"2-digit",
    })

    document.getElementById("perfil").innerText = dataFormatada
    document.getElementById("user").innerText = user.name
    document.getElementById("idPerfil").innerText = user.id

}