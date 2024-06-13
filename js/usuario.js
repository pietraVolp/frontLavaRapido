'use strict'

import { getClientes, getClientesId } from "./funcoes.js"
// const idCliente = new URLSearchParams(window.location.search).get('id');
const idCliente = localStorage.getItem('idC')
console.log(idCliente);
const cliente = await getClientesId(idCliente);


const divInfoCarro = document.getElementById('contanierCarro')

console.log(cliente); 
const veiculosUsuario = cliente[0].veiculo
const veiculo = veiculosUsuario[0]
        const modelo = veiculo.modelo
        const placa = veiculo.placa

        const modeloCarro = document.createElement('span')
        modeloCarro.textContent = `modelo: ${modelo}`

        const placaCarro = document.createElement('span')
        placaCarro.textContent = `placa: ${placa}`

        

        console.log(modelo);
        console.log(placa);
        

        divInfoCarro.replaceChildren(modeloCarro, placaCarro)







const divInfoUsuario = document.getElementById('contanierUsuario')

    const nome = cliente.nome
    const email = cliente.email
    const telefone = cliente.telefone


    const nomeCliente = document.createElement('h2')
    nomeCliente.textContent = `nome: ${nome}`
    nomeCliente.classList.add(
        'p-[10px]',
        'mt-[10px]',
        'text-gray-50',
        'space-x-6'
    )

    const emailCliente = document.createElement('h2')
    emailCliente.textContent = `email: ${email}`
    emailCliente.classList.add(
        'p-[10px]',
        'text-gray-50',
        'space-x-6'
    )


    const telefoneCliente = document.createElement('h2')
    telefoneCliente.textContent = `telefone: ${telefone}`
    telefoneCliente.classList.add(
        'p-[10px]',
        'text-gray-50',
        'space-x-6'
    )
    divInfoUsuario.replaceChildren(nomeCliente, emailCliente, telefoneCliente)


    const divInfoEndereco = document.getElementById('contanierEndereco')

    console.log(cliente); 
    const enderecoUsuario = cliente[0].endereco
    const endereco = enderecoUsuario[0]
        const cep = endereco.cep
        const rua = endereco.rua
        const bairro = endereco.bairro

        const cepEndereco = document.createElement('h2')
        cepEndereco.textContent = `Cep: ${cep}`
        cepEndereco.classList.add(
            'p-[10px]',
            'text-gray-50',
            'space-x-6'
        )

        const ruaEndereco = document.createElement('h2')
        ruaEndereco.textContent = `Rua: ${rua}`
        ruaEndereco.classList.add(
            'p-[10px]',
            'text-gray-50',
            'space-x-6'
        )

        const bairroEndereco = document.createElement('h2')
        bairroEndereco.textContent = `Bairro: ${bairro}`
        bairroEndereco.classList.add(
            'p-[10px]',
            'text-gray-50',
            'space-x-6'
        )

        
        
        divInfoEndereco.replaceChildren(cepEndereco, ruaEndereco, bairroEndereco)



