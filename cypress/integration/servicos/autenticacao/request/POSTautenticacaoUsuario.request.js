//verbo/metodo -endpoint -motivo(request).extensão

///<reference types="cypress" />

const payloadfazerLoginUsuario = require ('../payload/fazerLoginUsuario-autenticacao.json')

function fazerLoginUsuario(){
    return cy.request({
        method:'POST',
        url:'v1/auth',
        body: payloadfazerLoginUsuario
    })
}
export {fazerLoginUsuario};