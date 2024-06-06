'use strict'

import { getServico } from "./funcoes.js";
const idServico = new URLSearchParams(window.location.search).get('id');
    const servicoAtual = await getServico(idServico);

async function fetchServico(servico) {
    const contanierServico = document.getElementById('contanierServico')
    contanierServico.classList.add(
        'p-[15px]',
        

    )

    const contanierPreco = document.getElementById('contanierPreco')
    contanierPreco.classList.add(
        'p-[15px]',
        

    )

    const card = document.createElement('div')
    card.classList.add(
        'mt-[10px]',
        'ml-[1px]',
        'bg-zinc-500',
        'w-[300px]'
       
    )

    const cardPreco = document.createElement('div')
    cardPreco.classList.add(
        'mt-[-30px]',
        'ml-[1px]',
        'bg-zinc-500',
        'w-[300px]'
       
    )


    const nome = document.createElement('h2');
    nome.textContent = servicoAtual.tipo_servico;
    nome.classList.add(
        'text-gray-50',
        'text-base',
        'w-[100px]',
        'pl-[10px]'
        
    )

    const preco = document.createElement('p');
    preco.textContent = "R$ " + servicoAtual.preco.toFixed(2); 
    preco.classList.add(
        'text-gray-50',
        'text-xl',
        'mt-[40px]',
        
    )


    
    card.append(nome) 
    contanierServico.appendChild(card)

    cardPreco.append(preco)
    contanierPreco.appendChild(cardPreco)


    return card, contanierServico, cardPreco, contanierPreco
}

fetchServico(servicoAtual);
