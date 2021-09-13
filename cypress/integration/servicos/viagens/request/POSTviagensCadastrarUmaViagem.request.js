//verbo/metodo -endpoint -motivo(request).extensão

/// <reference types="cypress"/>

const payloadCadastrarUmaViagem = require('../payload/cadastrarUmaViagem.json')
import '../../../../support/commands'


   function cadastrarUmaViagem(emailAdm,senhaAdm,status) {

    return cy.token(emailAdm, senhaAdm).then(tokenAdm => {
        console.log(tokenAdm)
        cy.request({
            method: 'POST',
            url: 'v1/viagens',
            body:payloadCadastrarUmaViagem,
            headers: {
                //accept: "application/json",
                Authorization: tokenAdm
            },
            failOnStatusCode:status
            

        })
    }) 
  }
export{cadastrarUmaViagem}