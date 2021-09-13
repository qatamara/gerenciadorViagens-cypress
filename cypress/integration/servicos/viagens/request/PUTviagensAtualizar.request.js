//verbo/metodo - endpoint-motivo(request) . extensão

///<reference types="cypress"/>

const payloadAtualizarViagem = require('../payload/PUTviagensAtualizar.json')

import '../../../../support/commands'


function atualizarViagem(emailAdm,senhaAdm,status) {

    return cy.token(emailAdm, senhaAdm).then(tokenAdm => {
        console.log(tokenAdm)
        cy.request({
            method: 'PUT',
            url: 'v1/viagens/3',
            body:payloadAtualizarViagem,
            headers: {
                //accept: "application/json",
                Authorization: tokenAdm
            },
            failOnStatusCode:status
            

        })
    }) 
  }
  export{atualizarViagem}