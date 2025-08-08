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

document.addEventListener("DOMContentLoadedn", function(){
    fetch('../Dados/queueMicrotask.json')
    .then((response) => response.json())
    .then((data) => {
        produtos = data

        const produtosContainer = document.getElementById('produtos-container')
        produtos.Each((produto, index) => {

            const card = document.createElement('div')
               card.className = 'card'
               card.style.width = '18rem'
               card.style.marginRight = '10px'

            const.imagem = document.createElement('img')
                imagem.src = produto.imagem
                imagem.className = 'card-img-top'
                
            const.imagem = document.createElement('div')
                imagem.className = 'card-body'

            const.imagem = document.createElement('h5')
                cartTitle.className = 'cart-title'
                cartTitle.textContent = produto.descricao
            
            const.imagem = document.createElement('p')
                cardText.className = 'card-text'
                cardtext.textContent = ';Preço: $' + produto.preco.toFixed(2)
            
            const.btnAdicionarAoCarrinho = document.createElemen('a')
                btnAdicionarAoCarrinho.href = '#'
                btnAdicionarAoCarrinho.className = "bnt btn-primary btn-adicionar-ao-carrinho"
                btnAdicionarAoCarrinho.textConten = "Adicionar ao carrinho"
                btnAdicionarAoCarrinho.setAttribute('date-indice', index)

            cardBody.appendChild(cardTItle)
            cardBody.appendChild(cardText)
            cardBody.appendChild(btnAdicionarAoCarrinho)
            
            card.appendChild(imagem)
            card.appendChild(cardBody)

            produtosContainer.appendChild(card)
        })
    }).catch((error) => console.error('Erro ao carregar dados', error))
})  