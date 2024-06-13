'use strict'

import {postVeiculo } from "./js/funcoes.js"

// Import das tags do HTML pelo ID
const modelo = document.getElementById('modelo')
const marca = document.getElementById('marca')
const ano = document.getElementById('ano')
const placa = document.getElementById('placa')
const cor = document.getElementById('cor')
const cadastro = document.getElementById('cadastrar')



cadastro.addEventListener('click', ()=>{

    const modeloInput = modelo.value
    const marcaInput = marca.value
    const anoInput = ano.value
    const placaInput = placa.value
    const corInput = cor.value
    
    const insert ={
        modelo: modeloInput,
        marca: marcaInput,
        ano: anoInput,
        placa: placaInput,
        cor: corInput,
       
    }


    postVeiculo(insert)
    console.log('oi')


    if (cadastro) {
     window.location.href = '../usuario.html'
    } else {
        alert('Por favor tente novamente!!')
    }
})
