'use strict'

import  {getClientesId} from "./funcoes.js"
const idCliente = new URLSearchParams(window.location.search).get('id');
const cliente = await getClientesId(idCliente);




function usuarioId (id) {
    const usuario = document.getElementById('usuario')

    usuario.addEventListener('click', ()=> {
        window.location.href= './usario.html?id='+cliente.id_cliente
    })


}

