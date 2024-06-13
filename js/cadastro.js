'use strict'

import {postCliente} from "./funcoes.js"

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
const numero = document.getElementById('numero')
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
    const numeroInput = numero.value

    const insert ={
        p_nome: nomeInput,
        p_email: emailInput,
        p_senha: senhaInput,
        p_telefone: telefoneInput,
        p_cep: cepInput,
        p_cidade: cidadeInput,
        p_estado: estadoInput,
        p_rua: enderecoInput,
        p_bairro: bairroInput,
        p_numero: numeroInput
        
    }


    postCliente(insert)
    console.log('oi')

    console.log(insert)
    window.location.href = './login.html'
})
