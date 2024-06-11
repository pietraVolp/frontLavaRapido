'use strict'

import { getClientes } from "./funcoes.js";
const idCliente = new URLSearchParams(window.location.search).get('id');
const usuarioAtual = await getClientes(idCliente);


const divInfoCarro = document.getElementById('contanierCarro')

usuarioAtual.forEach(usuario => {
    
    const veiculosUsuario = usuario.veiculo

    veiculosUsuario.forEach(veiculo => {

        const modelo = veiculo.modelo
        const placa = veiculo.placa

        const modeloCarro = document.createElement('span')
        modeloCarro.textContent = `modelo: ${modelo}`

        const placaCarro = document.createElement('span')
        placaCarro.textContent = `: ${placa}`

        console.log(modelo);
        console.log(placa);
        

        divInfoCarro.replaceChildren(modeloCarro, placaCarro)
    });

});

const divInfoUsuario = document.getElementById('contanierUsuario')

usuarioAtual.forEach(cliente => {
    const nome = cliente.nome
    const email = cliente.email
    const telefone = cliente.telefone


    const nomeCliente = document.createElement('span')
    nomeCliente.textContent = `nome: ${nome}`

    const emailCliente = document.createElement('span')
    emailCliente.textContent = `email: ${email}`

    const telefoneCliente = document.createElement('span')
    telefoneCliente.textContent = `telefone: ${telefone}`


    console.log(nome);

    divInfoUsuario.replaceChildren(nomeCliente, emailCliente, telefoneCliente)

})

async function fetchCliente(cliente) {

    contanierUsuario.append(nome, email, telefone)
    contanierCarro.append(modelo, placa);

    return contanierCarro, contanierUsuario
}


fetchCliente(usuarioAtual);