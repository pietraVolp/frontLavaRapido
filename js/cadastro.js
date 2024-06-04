'use strict'

import {getClientes, postCliente} from "./clientes.js"

// Import das tags do HTML pelo ID
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const telefone = document.getElementById('telefone')
const cep = document.getElementById('cep')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')
const endereco = document.getElementById('endereco')
const bairro = document.getElementById('bairro')

const cadastro = document.getElementById('cadastro')


cadastro.addEventListener('click', ()=>{

    const nomeInput = nome.value
    const emailInput = email.value
    const senhaInput = senha.value
    const telefoneInput = telefone.value
    const cepInput = cep.value
    const cidadeInput = cidade.value
    const estadoInput = estado.value
    const enderecoInput = endereco.value
    const bairroInput = bairro.value

    const insert ={
        nome: nomeInput,
        email: emailInput,
        senha: senhaInput,
        telefone: telefoneInput,
        cep: cepInput,
        cidade: cidadeInput,
        estado: estadoInput,
        endereco: enderecoInput,
        bairro: bairroInput,
        
    }

    postCliente(insert)
    console.log(insert)
    window.location.href = './login.html'
})