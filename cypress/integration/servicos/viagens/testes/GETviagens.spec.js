import * as GETviagens from '../request/GETviagens.request'
import '../../../../support/commands'

describe('GET retornar viagens',()=>{
    it('deve retornar todas as viagens com o usuario logado',()=>{
        GETviagens.retornarTodasAsViagens(Cypress.env("emailUsuario"), Cypress.env("senhaUsuario"),true).should((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.data).to.be.not.null
       })
    })
    it('não deve retornar as viagens',()=>{
        GETviagens.retornarTodasAsViagens(Cypress.env("emailAdm"), Cypress.env("senhaAdm"),false).should((response)=>{
           expect(response.status).to.eq(403)
       })
    })
})