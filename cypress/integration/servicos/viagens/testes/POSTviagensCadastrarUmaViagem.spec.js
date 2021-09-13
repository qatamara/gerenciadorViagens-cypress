import * as POSTcadastrarUmaViagem  from '../request/POSTviagensCadastrarUmaViagem.request'

describe('POST cadastrar viagem',()=>{
    it('deve conseguir cadastrar uma viagem',()=>{
        POSTcadastrarUmaViagem.cadastrarUmaViagem(Cypress.env("emailAdm"), Cypress.env("senhaAdm"),true).should((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.data).to.be.not.null
        })

    })
})
