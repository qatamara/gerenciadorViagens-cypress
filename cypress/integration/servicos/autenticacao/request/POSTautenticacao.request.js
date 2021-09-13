//verbo/metodo -endpoint -motivo(request).extensão

///<reference types="cypress"/>

const payloadfazerLoginAdm = require('../payload/fazerLoginAdm-autenticacao.json')

function fazerLoginAdministrador(){
    return cy.request({  //cy.request : e responsavel por fazer a requisicao ao servico
        method:'POST',
        url:'v1/auth',
        body: payloadfazerLoginAdm

    })

    
}
export {fazerLoginAdministrador};