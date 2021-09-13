//verbo/metodo - endpoint - motivo(request) ; extensao

///<reference types="cypress"/>

import * as DELETEDeletarUmaViagem from '../../autenticacao/request/POSTautenticacao.request'

import '../../../../support/commands'

function deletarUmaViagem(emailAdm,senhaAdm,status){
    return cy.token(emailAdm,senhaAdm).then(tokenAdm =>{
        console.log(tokenAdm)
        cy.request({
            method:'DELETE',
            url:'v1/viagens/4',
            headers:{
               // accept: "application/json",
                Authorization: tokenAdm

            },
            failOnStatusCode:status
            

        })

    })
}export {DELETEDeletarUmaViagem}

export{deletarUmaViagem}



