/*'use strict'

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
        p_nome: nomeInput,
        p_email: emailInput,
        p_senha: senhaInput,
        p_telefone: telefoneInput,
        p_cep: cepInput,
        p_cidade: cidadeInput,
        p_estado: estadoInput,
        p_endereco: enderecoInput,
        p_bairro: bairroInput,
        
    }


    postCliente(insert)
    console.log(insert)
    window.location.href = './login.html'
})*/




document.addEventListener('DOMContentLoaded', () => {



    const button = document.getElementById('cadastro');

    button.addEventListener('click', () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const telefone = document.getElementById('telefone').value;
        const cep = document.getElementById('cep').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;
        const endereco = document.getElementById('endereco').value;
        const estado = document.getElementById('estado').value;

        let mensagemErro = '';

        if (nome === '') {
            mensagemErro += 'Nome de Usuário está vazio.\n';
        }
        if (email === '') {
            mensagemErro += 'Email está vazio.\n';
        }
        if (senha === '') {
            mensagemErro += 'Senha está vazia.\n';
        }
        if (telefone === '') {
            mensagemErro += 'Senha está vazia.\n';
        }
        if (cep === '') {
            mensagemErro += 'Cep está vazia.\n';
        }
       

        if (mensagemErro !== '') {
            alert(mensagemErro);
        } else {
            const user = {
                nome,
                email,
                senha,
                telefone,
                cep,
                bairro,
                cidade,
                endereco,
                estado

            };

            const url = 'http://localhost:8080/v2/lavaRapido/cliente';

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            };

            fetch(url, options)
                .then(response => {
                    if (response.ok) {
                        alert('Usuário Cadastrado');
                    } else {
                        alert('Erro ao cadastrar usuário');
                    }
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Erro ao cadastrar usuário');
                })


        }
    })
})

window.onload = () => {
    button.addEventListener('click', 
    window.location.href = './login.html'
    )
}
